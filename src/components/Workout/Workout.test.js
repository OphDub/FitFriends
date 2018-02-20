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
    const mockFn = jest.fn();
    const wrapper = shallow(<Workout postWorkout={mockFn}/>);
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.instance().postWorkout(mockEvent);
    expect(mockFn).toHaveBeenCalled();
  });

  it('should clear state when postWorkout is called', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Workout postWorkout={mockFn}/>);

    const exampleEvent = {target: {value: 'some workout',name: 'workoutName'}};
    const exampleString = 'some workout';

    wrapper.instance().handleChange(exampleEvent);
    wrapper.update();

    expect(wrapper.state().workoutName).toEqual(exampleString);

    const expected ='';
    const mockEvent = {preventDefault: jest.fn()};

    wrapper.instance().postWorkout(mockEvent);
    wrapper.update();

    expect(wrapper.state().workoutName).toEqual(expected);
  });

  it('should add an exercise to the exercises array in state when addExercise is called', () => {
    const mockEvent = {preventDefault: jest.fn()};
    const mockExercise = {reps: 5, exercise: 'some exercise'};

    renderedComponent.instance().setState({
      reps: mockExercise.reps,
      exercise: mockExercise.exercise
    });
    renderedComponent.update();
    renderedComponent.instance().addExercise(mockEvent);
  });

  it('should remove an exercise from the exercises array in state when removeExercise is called', () => {

  });

  it('should return jsx based on the exercises array when renderExercises is called', () => {

  })
})
