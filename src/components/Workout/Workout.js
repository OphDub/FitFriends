import React, { Component } from 'react';
import { postWorkout } from '../../actions/actionsIndex';
import { connect } from 'react-redux';
import './Workout.css';
// import FontAwesomeIcon from '@fortawesome/fontawesome';
// import faMinusSquare from '@fortawesome/fontawesome-free-solid/faMinusSquare';
// import faPlusSquare from '@fortawesome/fontawesome-free-solid/faPlusSquare';

class Workout extends Component {
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
    const exercises = [...this.state.exercises, newExercise]
    this.setState({
      exercises,
      reps: '',
      exercise: '',
    });
  }

  removeExercise = (e) => {
    e.preventDefault();
    const { id } = e.target

    const filtered = this.state.exercises.filter(exercise => exercise.id !== id)
    console.log(filtered);

    this.setState({ exercises: filtered });
  }

  renderExercises = () => {
    return this.state.exercises.map( (exercise,index) =>
      <li className="rendered-exercise"
        key={exercise.id}>
          <h6>{exercise.reps}</h6>
          <h6>{exercise.exercise}</h6>
        <button id={exercise.id}
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
            <input type="text"
              placeholder="Workout Name"
              name="workoutName"
              value={this.state.workoutName}
              onChange={this.handleChange}/>
            <input type="text"
              placeholder="Workout Description (Optional)"
              name="workoutDesc"
              value={this.state.workoutDesc}
              onChange={this.handleChange}/>
          </div>
          <div>
            <h4>Exercises</h4>
            <ul>
              {this.renderExercises()}
            </ul>
            <div>
              <input  type="number"
                placeholder="Reps"
                name="reps"
                value={this.state.reps}
                onChange={this.handleChange}/>
              <input  type="text"
                placeholder="Exercise"
                name="exercise"
                value={this.state.exercise}
                onChange={this.handleChange}/>
              <button onClick={this.addExercise}>
                +
              </button>
            </div>
          </div>
          <button className="Workout-post-btn"
            onClick={this.postWorkout}>
              Post Workout
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