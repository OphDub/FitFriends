import React, { Component } from 'react';
import './WorkoutHistory.css';
import { connect } from 'react-redux';
import { getWorkouts } from '../../actions/actionsIndex';

class WorkoutHistory extends Component {
  constructor () {
    super();
  }

  componentDidMount () {
    this.props.getWorkouts();
  }

  renderedWorkouts = () => {
    return this.props.workouts.map((workout) => {
      const exercises = workout.exercises.map((exercise) => {
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
            {exercises}
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