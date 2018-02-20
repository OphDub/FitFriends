import React, { Component } from 'react';
import './WorkoutHistory.css';
import { connect } from 'react-redux';
import { getWorkouts } from '../../actions/actionsIndex';

class WorkoutHistory extends Component {
  constructor () {
    super();
  }

  componentWillMount () {
    this.props.getWorkouts();
  }

  renderedWorkouts = () => {
    console.log(this.props.workouts);
    const workoutVals = Object.values(this.props.workouts)

    return workoutVals.map((workout) => {
      const exerciseVals = Object.values(workout.exercises).map((exercise) => {
        return(
          <li className="exercise">
            <p className="exercise-reps">{exercise.reps}</p>
            <p className="exercise-name">{exercise.exercise}</p>
          </li>
        )
      })

      return (
        <article className="workout">
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
    console.log(this.props);
    return (
      <section className="WorkoutHistory">
        {this.renderedWorkouts()}
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  workouts: state.workouts,
})

const mapDispatchToProps = (dispatch) => ({
  getWorkouts: () => dispatch(getWorkouts())
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutHistory);