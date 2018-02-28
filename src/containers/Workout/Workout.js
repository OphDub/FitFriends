import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Workout.css';
import { postWorkout } from '../../thunks/thunks';

export class Workout extends Component {
  constructor () {
    super();
    this.state={
      workoutName: '',
      workoutDesc: '',
      reps: '',
      exercise: '',
      exercises: [],
      errorMsg: ''
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({[name]:value});
  }

  validateExercise = () => {
    const { exercises } = this.state;
    const message = 'Please add at least one exercise to your workout';
    let errorMsg;

    const validated = exercises.length <= 0 ?
      (errorMsg = message) && false : true;

    this.setState({ errorMsg });
    return validated;
  }

  validateWorkoutInfo = () => {
    const { workoutName, workoutDesc } = this.state;

    if (workoutName === '' || workoutDesc === '') {
      const errorMsg = 'Please give your workout a name and description';

      this.setState({ errorMsg });
      return false;
    }

    return true
  }

  addExercise = (e) => {
    e.preventDefault();
    const { reps, exercise } = this.state;
    const id = Date.now();
    const newExercise = Object.assign({ id, reps, exercise});
    const exercises = [...this.state.exercises, newExercise];

    this.setState({
      exercises,
      reps: '',
      exercise: ''
    });
  }

  removeExercise = (e) => {
    e.preventDefault();
    const { id } = e.target;
    const filtered = this.state.exercises.filter(exercise =>
      exercise.id !== parseInt(id));

    this.setState({ exercises: filtered });
  }

  postWorkout = (e) => {
    e.preventDefault();
    const { workoutName, workoutDesc, exercises } = this.state;

    if (!this.validateWorkoutInfo()) {
      return;
    }

    if (!this.validateExercise()) {
      return;
    }

    this.props.postWorkout({ workoutName, workoutDesc, exercises });

    this.setState({
      workoutName: '',
      workoutDesc: '',
      reps: '',
      exercise: '',
      exercises: []
    });
  }

  renderWorkoutForm = () => {
    return (
    <form className="Workout-form">
      <div className="Workout-info">
        <label className="workout-info-labels"htmlFor="workoutName">
          <p>Workout Name: </p>
          <input  type="text"
            className="workout-info-inputs workout-name"
            placeholder="Workout Name"
            name="workoutName"
            value={this.state.workoutName}
            onChange={this.handleChange}
          />
        </label>
        <label className="workout-info-labels"htmlFor="workoutDesc">
          <p>Description: </p>
          <input  type="text"
            className="workout-info-inputs workout-description"
            placeholder="Workout Description"
            name="workoutDesc"
            value={this.state.workoutDesc}
            onChange={this.handleChange}
          />
        </label>
      </div>
      <div>
        <h4 className="exercise-header">Exercises</h4>
        <p>Add or remove exercises for your workout:</p>
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
            Add
          </button>
        </div>
        <ul className="rendered-exercises">
          {this.renderExercises()}
        </ul>
      </div>
      {this.renderError()}
      <button className="Workout-post-btn"
        onClick={this.postWorkout}>
        <h3>Post Workout</h3>
      </button>
    </form>
    )
  }

  renderExercises = () => {
    return this.state.exercises.map( (exercise) =>
      <li className="rendered-exercise"
        key={exercise.id}>
        <h5 className="rendered-ex-info">{exercise.reps}</h5>
        <h5 className="rendered-ex-info">{exercise.exercise}</h5>
        <button className="rendered-ex-btn"
          id={exercise.id}
          onClick={this.removeExercise}>
            Remove
        </button>
      </li>
    );
  }

  renderError = () => {
    return (
      <div className="workout-error">
        <h5 className="workout-error-msg">{this.state.errorMsg}</h5>
      </div>
    )
  }

  render () {
    return (
      <section className="Workout">
        <div className="Workout-header">
          <h3>Post Your Workout</h3>
          <p>Give it a name and any details for your teammates</p>
        </div>
        {this.renderWorkoutForm()}
      </section>
    );
  }
}

Workout.propTypes = {
  postWorkout: PropTypes.func
};

export const mapDispatchToProps = (dispatch) => ({
  postWorkout: (workout) => dispatch(postWorkout(workout))
});

export default connect(null, mapDispatchToProps)(Workout);