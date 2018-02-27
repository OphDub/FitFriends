/* eslint-disable */
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
    const mockExercise = {
      reps: 5,
      exercise: 'some exercise',
      id: 1519148514421
    };
    const expected =[mockExercise];
    const mockDateNow = () => {return 1519148514421}
    const originalDateNow = Date.now;
    Date.now = mockDateNow;

    renderedComponent.instance().setState({
      reps: mockExercise.reps,
      exercise: mockExercise.exercise
    });
    renderedComponent.update();
    renderedComponent.instance().addExercise(mockEvent);

    expect(renderedComponent.state().exercises).toEqual(expected);
  });

  it('should remove an exercise from the exercises array in state when removeExercise is called', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {
        id: '1519148514421'
      }
    };
    const mockExercises = [
      {
        reps: 5,
        exercise: 'some exercise',
        id: 1519148514421
      }
    ];
    const expected = [];

    renderedComponent.instance().setState({ exercises: mockExercises });
    renderedComponent.update();

    expect(renderedComponent.state().exercises).toEqual(mockExercises);

    renderedComponent.instance().removeExercise(mockEvent);
    renderedComponent.update();

    expect(renderedComponent.state().exercises).toEqual(expected);
  });

  it('should return jsx based on the exercises array when renderExercises is called', () => {
    const mockExercises = [
      {
        reps: 5,
        exercise: 'some exercise',
        id: 1519148514421
      }
    ];

    renderedComponent.instance().setState({ exercises: mockExercises });
    renderedComponent.update();

    expect(renderedComponent).toMatchSnapshot();
  });

  describe('mapDispatchToProps for Workout', () => {
    it('should call the dispatch fun when postWorkout is called', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);

      mapped.postWorkout();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
