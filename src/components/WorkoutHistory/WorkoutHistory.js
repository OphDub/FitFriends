import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { string, arrayOf, func } from 'prop-types';
import { getWorkouts } from '../../actions/actionsIndex';
import './WorkoutHistory.css';

export class WorkoutHistory extends Component {
  componentWillMount () {
    this.props.getWorkouts();
  }

  renderedWorkouts = () => {
    const workoutVals = Object.values(this.props.workouts);

    return workoutVals.map((workout, key) => {
      const exerciseVals = Object.values(workout.exercises).map((exercise, key) => {
        return (
          <li className="exercise" key={key}>
            <p className="exercise-reps">{exercise.reps}</p>
            <p className="exercise-name">{exercise.exercise}</p>
          </li>
        );
      });

      return (
        <article className="workout" key={key}>
          <h3 className="workout-name"><span className="workout-title">Workout:</span> {workout.workoutName}</h3>
          <p className="workout-desc">{workout.workoutDesc}</p>
          <ul className="exercises">
            <li className="exercises-header">
              <p className="exercises-reps">Reps:</p>
              <p className="exercises-name">Exercises:</p>
            </li>
            {exerciseVals}
          </ul>
        </article>
      );
    });
  }

  render () {
    return (
      <section className="WorkoutHistory">
        {this.renderedWorkouts()}
      </section>
    );
  }
}

const exercise = {
  reps: string.isRequired,
  exercise: string.isRequired
};

const workout = {
  workoutName: string.isRequired,
  workoutDesc: string.isRequired,
  exercises: arrayOf(exercise).isRequired
};

WorkoutHistory.propTypes = {
  getWorkouts: func.isRequired,
  workouts: arrayOf(workout).isRequired
};

export const mapStateToProps = (state) => ({
  workouts: state.workouts
});

export const mapDispatchToProps = (dispatch) => ({
  getWorkouts: () => dispatch(getWorkouts())
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutHistory);