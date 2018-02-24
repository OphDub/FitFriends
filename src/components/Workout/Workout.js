import React, { Component } from 'react';
import { postWorkout } from '../../actions/actionsIndex';
import { connect } from 'react-redux';
import './Workout.css';
import { workouts } from '../../base';
// import FontAwesomeIcon from '@fortawesome/fontawesome';
// import faMinusSquare from '@fortawesome/fontawesome-free-solid/faMinusSquare';
// import faPlusSquare from '@fortawesome/fontawesome-free-solid/faPlusSquare';

export class Workout extends Component {
  constructor () {
    super();
    this.state={
      workoutName: '',
      workoutDesc: '',
      reps: '',
      exercise: '',
      exercises: []
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({[name]:value});
  }

  addExercise = (e) => {
    e.preventDefault();
    const { reps, exercise } = this.state;
    const id = Date.now()
    const newExercise = Object.assign({ id, reps, exercise});
    const exercises = [...this.state.exercises, newExercise];

    this.setState({
      exercises,
      reps: '',
      exercise: '',
    });
  }

  removeExercise = (e) => {
    e.preventDefault();
    const { id } = e.target

    const filtered = this.state.exercises.filter(exercise =>
      exercise.id !== parseInt(id))

    this.setState({ exercises: filtered });
  }

  renderExercises = () => {
    return this.state.exercises.map( (exercise,index) =>
      <li className="rendered-exercise"
        key={exercise.id}>
          <h5 className="rendered-ex-info">{exercise.reps}</h5>
          <h5 className="rendered-ex-info">{exercise.exercise}</h5>
        <button className="rendered-ex-btn"
          id={exercise.id}
          onClick={this.removeExercise}>
            -
        </button>
      </li>
    )
  }

  postWorkout = (e) => {
    e.preventDefault();
    const { workoutName, workoutDesc, exercises } = this.state;
    this.props.postWorkout({ workoutName, workoutDesc, exercises });

    this.setState({
      workoutName: '',
      workoutDesc: '',
      reps: '',
      exercise: '',
      exercises: [],
    })
  }

  render () {
    return(
      <section className="Workout">
        <form className="Workout-form">
          <div className="Workout-info">
            <input  type="text"
              className="workout-info-inputs workout-name"
              placeholder="Workout Name"
              name="workoutName"
              value={this.state.workoutName}
              onChange={this.handleChange}
            />
            <input  type="text"
              className="workout-info-inputs workout-description"
              placeholder="Workout Description (Optional)"
              name="workoutDesc"
              value={this.state.workoutDesc}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <h4 className="exercise-header">Exercises</h4>
            <ul className="rendered-exercises">
              {this.renderExercises()}
            </ul>
            <div className="create-exercises">
              <input  type="number"
                className="exercise-inputs exercise-number"
                placeholder="Reps"
                name="reps"
                value={this.state.reps}
                onChange={this.handleChange}
              />
              <input  type="text"
                className="exercise-inputs exercise-name"
                placeholder="Exercise"
                name="exercise"
                value={this.state.exercise}
                onChange={this.handleChange}
              />
              <button className="exercise-button"
                onClick={this.addExercise}>
                +
              </button>
            </div>
          </div>
          <button className="Workout-post-btn"
            onClick={this.postWorkout}>
              <h3>Post Workout</h3>
          </button>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  postWorkout: (workout) => dispatch(postWorkout(workout))
})

export default connect(null, mapDispatchToProps)(Workout);