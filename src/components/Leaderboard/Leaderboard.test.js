import React from 'react';
import { shallow } from 'enzyme';
import LeaderBoard from './LeaderBoard';

describe('LEADERBOARD', () => {
  it.skip('should match snapshot', () => {
    const renderedComponent = shallow(<LeaderBoard />);

    expect(renderedComponent).toMatchSnapshot();
  })
})
