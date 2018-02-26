import React from 'react';
import './Teammate.css';
import PropTypes from 'prop-types';

export const Teammate = ({ name, workoutTally, workoutsPosted }) => {
  return (
    <article className="Teammate">
      <h4 className="teammate-name">{name}</h4>
      <ul>
        <li className="teammate-tally">
          <h5>Workout Tally:</h5>
          <p>{workoutTally}</p>
        </li>
        <li className="teammate-posted">
          <h5>Workouts Posted:</h5>
          <p>{workoutsPosted}</p>
        </li>
      </ul>
    </article>
  );
};

Teammate.propTypes = {
  name: PropTypes.string,
  workoutTally: PropTypes.number,
  workoutsPosted: PropTypes.number
};

