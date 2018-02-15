import React from 'react';
import { Teammate }from '../Teammate/Teammate';

export const Team = (team) => {
  const renderedTeam = team.map(teammate => 
    <Teammate />
  )

  return(
    <section className="team">
      {renderedTeam}
    </section>
  )
}