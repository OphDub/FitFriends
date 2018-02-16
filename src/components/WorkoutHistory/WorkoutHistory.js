import React from 'react';
// import { connect } from 'react-redux';

export const WorkoutHistory = ({workouts}) => {
  const renderedWorkouts = workouts.map((workout) => {
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

  return(
    <section className="WorkoutHistory">
      {renderedWorkouts}
    </section>
  )
}

const mapStateToProps = (state) => ({
  workouts: state.workouts,
});

// export default connect(mapStateToProps)(WorkoutHistory);