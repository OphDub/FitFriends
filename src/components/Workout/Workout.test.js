import React from 'react';
import { shallow } from 'enzyme';
import { Workout, mapDispatchToProps } from './Workout';

describe('WORKOUT', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<Workout />);
  });

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should change state when handleChange is called', () => {
    const mockEvent = { target: { value: 'some workout', name: 'workoutName'}};
    const expected = 'some workout';

    renderedComponent.instance().handleChange(mockEvent);
    renderedComponent.update();

    expect(renderedComponent.state().workoutName).toEqual(expected);
  });

  it('should call postWorkout from props when postWorkout is called', () => {

  });

  it('should clear state when postWorkout is called', () => {

  });
})
