import React from 'react';
import PropTypes, { shape, string, arrayOf } from 'prop-types';
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

const teammate = shape({
  name: string.isRequired,
  workoutTally: string.isRequired,
  workoutsPosted: string.isRequired
});

Team.propTypes = {
  team: arrayOf(teammate)
};