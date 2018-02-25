import React from 'react';
import './Team.css';
import { Teammate } from '../Teammate/Teammate';

export const Team = ({team}) => {
    const renderedTeam = team.map(teammate =>
    <Teammate {...teammate}/>
  )

  return(
    <section className="Team">
      <h3 className="Team-header">Team Members</h3>
      {renderedTeam}
    </section>
  )
}