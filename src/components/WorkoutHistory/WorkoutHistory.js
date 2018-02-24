import React, { Component } from 'react';
import './WorkoutHistory.css';
import { connect } from 'react-redux';
import { getWorkouts } from '../../actions/actionsIndex';

export class WorkoutHistory extends Component {
  componentWillMount () {
    this.props.getWorkouts();
  }

  renderedWorkouts = () => {
    const workoutVals = Object.values(this.props.workouts)

    return workoutVals.map((workout, key) => {
      const exerciseVals = Object.values(workout.exercises).map((exercise, key) => {
        return(
          <li className="exercise" key={exercise.key}>
            <p className="exercise-reps">{exercise.reps}</p>
            <p className="exercise-name">{exercise.exercise}</p>
          </li>
        )
      })

      return (
        <article className="workout" key={workout.key}>
          <h3 className="workout-name">{workout.workoutName}</h3>
          <p className="workout-desc">{workout.workoutDesc}</p>
          <ul className="exercises">
            {exerciseVals}
          </ul>
        </article>
      )
    })
  }

  render () {
    return (
      <section className="WorkoutHistory">
        {this.renderedWorkouts()}
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  workouts: state.workouts,
});

export const mapDispatchToProps = (dispatch) => ({
  getWorkouts: () => dispatch(getWorkouts())
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutHistory);