/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { WorkoutHistory, mapStateToProps, mapDispatchToProps } from './WorkoutHistory';
import { mockWorkouts } from '../../initialData';

describe('WORKOUT HISTORY', () => {
  let renderedComponent;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    renderedComponent = shallow(
      <WorkoutHistory getWorkouts={mockFn}
        workouts={mockWorkouts}
        deleteWorkoutFromFirebase={mockFn}
      />
    );
  });

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it.skip('deleteWorkout method should call the deleteWorkoutFromFirebase', () => {
    const mockWorkoutId = 'someKey1';

    renderedComponent.instance().deleteWorkout(mockWorkoutId);

    expect(deleteWorkoutFromFirebase).toHaveBeenCalled();
  });

  describe('mapStateToProps and mapDispatchToProps for WorkoutHistory', () => {
    it('should map the store correctly', () => {
      const mockStore = {
        workouts: mockWorkouts
      };

      const mapped = mapStateToProps(mockStore);

      expect(mapped.workouts).toEqual(mockStore.workouts);
    });

    it('should call dispatch when using a function from mapDispatchToProps', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);

      mapped.getWorkouts();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});