/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Workout, mapDispatchToProps } from './Workout';

describe('WORKOUT', () => {
  let renderedComponent;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    renderedComponent = shallow(<Workout postWorkout={mockFn}/>);
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

  it('validateExercise should return false and update errorMsg in state if there are no exercises in state', () => {
    const expectedErrorMsg = 'Please add at least one exercise to your workout';
    const exerciseValidation = renderedComponent.instance().validateExercise();

    expect(exerciseValidation).toEqual(false);
    expect(renderedComponent.state().errorMsg).toEqual(expectedErrorMsg);
  });

  it('validateExercise should return true if there are exercises in state', () => {
    const mockExercises = [
      {reps: 1, exercise: 'pushup'}
    ];

    renderedComponent.setState({ exercises: mockExercises });

    const exerciseValidation = renderedComponent.instance().validateExercise();

    expect(exerciseValidation).toEqual(true);
  });

  it('validateWorkoutInfo should return false and update errorMsg in state if there is no workoutName or workoutDesc', () => {
    const expectedErrorMsg = 'Please give your workout a name and description';
    const workoutValidation = renderedComponent.instance().validateWorkoutInfo();

    expect(workoutValidation).toEqual(false);
    expect(renderedComponent.state().errorMsg).toEqual(expectedErrorMsg);
  });

  it('validateWorkoutInfo should return true if there is workoutName and workoutDesc in state', () => {
    const mockWorkoutName = 'some name';
    const mockWorkoutDesc = 'some desc';

    renderedComponent.setState({
      workoutName: mockWorkoutName,
      workoutDesc: mockWorkoutDesc
    });

    const workoutValidation = renderedComponent.instance().validateWorkoutInfo();

    expect(workoutValidation).toEqual(true);
  });

  it('validateExerciseInfo should return true if there is a rep amount and exercise name in state', () => {
    const mockRepCount = 10;
    const mockExerciseName = 'jumping jacks';

    renderedComponent.setState({
      reps: mockRepCount,
      exercise: mockExerciseName
    });

    const exerciseInfoValidation = renderedComponent.instance().validateExerciseInfo();

    expect(exerciseInfoValidation).toEqual(true);
  });

  it('validateExerciseInfo should return false and set an errorMsg in state if there is not a rep amount or exercise name in state', () => {
    const expectedErrorMsg = 'Please give your exercise a rep count and name';
    const exerciseInfoValidation = renderedComponent.instance().validateExerciseInfo();

    expect(exerciseInfoValidation).toEqual(false);
    expect(renderedComponent.state().errorMsg).toEqual(expectedErrorMsg);
  });

  it('should call postWorkout from props when postWorkout is called', () => {
    const mockEvent = { preventDefault: jest.fn() };
    const mockWorkoutName = 'some name';
    const mockWorkoutDesc = 'some desc';
    const mockExercises = [
      {reps: 1, exercise: 'pushup'}
    ];

    renderedComponent.setState({
      workoutName: mockWorkoutName,
      workoutDesc: mockWorkoutDesc,
      exercises: mockExercises
    });

    renderedComponent.instance().postWorkout(mockEvent);
    expect(mockFn).toHaveBeenCalled();
  });

  it('should clear state when postWorkout is called', () => {
    const mockWorkoutName = 'some name';
    const mockWorkoutDesc = 'some desc';
    const mockExercises = [
      {reps: 1, exercise: 'pushup'}
    ];
    const expected ='';
    const mockEvent = {preventDefault: jest.fn()};

    renderedComponent.setState({
      workoutName: mockWorkoutName,
      workoutDesc: mockWorkoutDesc,
      exercises: mockExercises
    });

    renderedComponent.instance().postWorkout(mockEvent);
    renderedComponent.update();

    expect(renderedComponent.state().workoutName).toEqual(expected);
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
