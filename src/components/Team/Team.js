import React from 'react';
import PropTypes from 'prop-types';
import './Team.css';
import { Teammate } from '../Teammate/Teammate';

export const Team = ({team}) => {
  const renderedTeam = team.map(teammate =>
    <Teammate {...teammate} key={teammate.UID}/>
  );

  return (
    <section className="Team">
      <h3 className="Team-header">Team Members</h3>
      {renderedTeam}
    </section>
  );
};

const teammate = PropTypes.shape({
  name: PropTypes.string.isRequired,
  workoutTally: PropTypes.string.isRequired,
  workoutsPosted: PropTypes.string.isRequired
});

Team.propTypes = {
  team: PropTypes.arrayOf(teammate)
};