import React, { Component } from 'react';

class Workout extends Component {
  constructor () {
    super();
    this.state={
      workoutName: '',
      workoutDesc: '',
      reps: 0,
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
      reps: 0,
      exercise: '',
    });
  }

  postWorkout = (e) => {
    e.preventDefault();
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

export default Workout;