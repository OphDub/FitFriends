import React from 'react';
import { shallow } from 'enzyme';
import { Leaderboard } from './Leaderboard';

describe('LEADERBOARD', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<Leaderboard />);

    expect(renderedComponent).toMatchSnapshot();
  });
});