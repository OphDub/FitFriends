import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Workout.css';
import { postWorkout } from '../../actions/actionsIndex';
export class Workout extends Component {
  constructor () {
    super();
    this.state={
      workoutName: '',
      workoutDesc: '',
      reps: '',
      exercise: '',
      exercises: []
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({[name]:value});
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

  renderExercises = () => {
    return this.state.exercises.map( (exercise) =>
      <li className="rendered-exercise"
        key={exercise.id}>
        <h5 className="rendered-ex-info">{exercise.reps}</h5>
        <h5 className="rendered-ex-info">{exercise.exercise}</h5>
        <button className="rendered-ex-btn"
          id={exercise.id}
          onClick={this.removeExercise}>
<<<<<<< HEAD
            -
=======
            Remove
>>>>>>> a1452d3196c34a0d95e63c2903b37a6ab051f770
        </button>
      </li>
    );
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
      exercises: []
    });
  }

  render () {
    return (
      <section className="Workout">
<<<<<<< HEAD
=======
        <div className="Workout-header">
          <h3>Post Your Workout:</h3>
          <p>Give it a name and any details for your teammates:</p>
        </div>
>>>>>>> a1452d3196c34a0d95e63c2903b37a6ab051f770
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
            <p>Add or remove exercises for your workout:</p>
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
                Add
              </button>
            </div>
          </div>
          <button className="Workout-post-btn"
            onClick={this.postWorkout}>
            <h3>Post Workout</h3>
          </button>
        </form>
      </section>
    );
  }
}

Workout.propTypes = {
  postWorkout: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  postWorkout: (workout) => dispatch(postWorkout(workout))
});

export default connect(null, mapDispatchToProps)(Workout);