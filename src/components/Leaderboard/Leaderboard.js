import React from 'react';
import './Leaderboard.css';
import { Teammate } from '../Teammate/Teammate';

export const Leaderboard = ({topThree}) => {
  const renderedLeaders = topThree.map(leader => 
    <Teammate {...leader}/>
  )

  return (
    <section className="Leaderboard">
      <h3>Leaderboard</h3>
      {renderedLeaders}
    </section>
  )
};