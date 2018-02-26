/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Leaderboard } from './Leaderboard';
import { mockTeam } from '../../initialData';

describe('LEADERBOARD', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<Leaderboard topThree={mockTeam}/>);

    expect(renderedComponent).toMatchSnapshot();
  });
});