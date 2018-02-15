import React, { Component } from 'react';
import { postWorkout } from '../../actions/actionsIndex';
import { connect } from 'react-redux';

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
    const newExercise = Object.assign({ reps, exercise});
    const exercises = [...this.state.exercises, newExercise]
    this.setState({
      exercises,
      reps: '',
      exercise: '',
    });
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
      <section>
        <form action="submit">
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
          <div>
            <h4>Exercises</h4>
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
              <button onClick={this.addExercise}> + </button>
            </div>
          </div>
        </form>
        <button type="submit"
          onClick={this.postWorkout}>
            Post Workout
        </button>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  postWorkout: (workout) => dispatch(postWorkout(workout))
})

export default connect(null, mapDispatchToProps)(Workout);