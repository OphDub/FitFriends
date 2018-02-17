import React from 'react';
import './Teammate.css';

export const Teammate = ({ name, workoutTally, workoutsPosted }) => {
  return(
    <article className="Teammate">
      <h4 className="teammate-name">{name}</h4>
      <ul>
        <li className="teammate-tally">
          <h6>Workout Tally:</h6>
          <p>{workoutTally}</p>
        </li>
        <li className="teammate-posted">
          <h6>Workouts Posted:</h6>
          <p>{workoutsPosted}</p>
        </li>
      </ul>
    </article>
  )
}