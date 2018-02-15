import React from 'react';

export const Teammate = ({ name, workoutTally, workoutsPosted }) => {
  return(
    <article className="teammate">
      <h4>{name}</h4>
      <ul>
        <li>
          <h6>Workout Tally:</h6>
          <p>{workoutTally}</p>
        </li>
        <li>
          <h6>Workouts Posted:</h6>
          <p>{workoutsPosted}</p>
        </li>
      </ul>
    </article>
  )
}