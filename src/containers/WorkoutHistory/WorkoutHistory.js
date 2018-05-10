import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkouts, deleteWorkoutFromFirebase } from '../../thunks/thunks';
import './WorkoutHistory.css';

export class WorkoutHistory extends Component {
  async componentWillMount () {
    await this.props.getWorkouts();
  }

  deleteWorkout = (e) => {
    console.log(e.target.parentNode);
  }

  renderedWorkouts = () => {
    const workoutVals = Object.values(this.props.workouts);
    const workoutKeys = Object.keys(this.props.workouts);

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
        <article className="workout" key={key} id={workoutKeys[key]}>
          <h3 className="workout-name"><span className="workout-title">Workout:</span> {workout.workoutName}</h3>
          <p className="workout-desc">{workout.workoutDesc}</p>
          <ul className="exercises">
            <li className="exercises-header">
              <p className="exercises-reps">Reps:</p>
              <p className="exercises-name">Exercises:</p>
            </li>
            {exerciseVals}
          </ul>
          <button className="workout-delete-btn" onClick={this.deleteWorkout}>Delete Workout</button>
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

const exercise = PropTypes.shape({
  reps: PropTypes.string,
  exercise: PropTypes.string
});

const workout = PropTypes.shape({
  workoutName: PropTypes.string,
  workoutDesc: PropTypes.string,
  exercises: PropTypes.arrayOf(exercise)
});

WorkoutHistory.propTypes = {
  getWorkouts: PropTypes.func,
  workouts: PropTypes.arrayOf(workout)
};

export const mapStateToProps = (state) => ({
  workouts: state.workouts
});

export const mapDispatchToProps = (dispatch) => ({
  getWorkouts: () => dispatch(getWorkouts())
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutHistory);