import React from 'react';
import { shallow } from 'enzyme';
import WorkoutHistory from './WorkoutHistory';

describe('WORKOUT HISTORY', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<WorkoutHistory />);
  });

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});