import React from 'react';
import PropTypes from 'prop-types';
import './Leaderboard.css';
import { Teammate } from '../Teammate/Teammate';

export const Leaderboard = ({topThree}) => {
  const renderedLeaders = topThree.map(leader => 
    <Teammate {...leader} key={leader.UID}/>
  );

  return (
    <section className="Leaderboard">
      <h3>Leaderboard</h3>
      {renderedLeaders}
    </section>
  );
};

const teammate = PropTypes.shape({
  name: PropTypes.string.isRequired,
  workoutTally: PropTypes.number.isRequired,
  workoutsPosted: PropTypes.number.isRequired
});

Leaderboard.propTypes = {
  topThree: PropTypes.arrayOf(teammate)
};