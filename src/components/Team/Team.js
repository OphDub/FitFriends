import React from 'react';
import './Team.css';
import { Teammate }from '../Teammate/Teammate';

export const Team = ({team}) => {
    const renderedTeam = team.map(teammate =>
    <Teammate {...teammate}/>
  )

  return(
    <section className="Team">
      {renderedTeam}
    </section>
  )
}