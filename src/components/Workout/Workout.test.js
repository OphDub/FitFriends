import React from 'react';
import { shallow } from 'enzyme';
import Workout from './Workout';

describe('CONTROL', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<Workout />);
  });

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should change state when handleChange is called', () => {
    const mockEvent = { target: { value: 'hello', name: 'workoutName'}};
    const expected = 'hello';

    renderedComponent.instance().handleChange(mockEvent);
    renderedComponent.update();

    expect(renderedComponent.state().workoutName).toEqual(expected);
  });

  it.skip('should clear state when handleLogin is called', () => {
    const exampleString = 'hello';
    const exampleEvent = { target: { value: 'hello', name: 'username'}};

    renderedComponent.instance().handleChange(exampleEvent);
    renderedComponent.update();

    expect(renderedComponent.state().username).toEqual(exampleString);

    const expected = '';
    const mockEvent = {preventDefault: jest.fn()};

    renderedComponent.instance().handleLogin(mockEvent);
    renderedComponent.update();

    expect(renderedComponent.state().username).toEqual(expected);
  });
})
