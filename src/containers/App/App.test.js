/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import App, { mapStateToProps, mapDispatchToProps } from './App';

describe('APP', () => {
  it('should match the snapshot', () => {
    const mockEmail = 'user@user.com';
    const mockProps = {
      user: { email: mockEmail }
    }
    const renderedComponent = shallow(<App props={mockProps}/>, { disableLifecycleMethods: true });

    expect(renderedComponent).toMatchSnapshot();
  });

  it('should be able to map the store correctly', () => {
    const mockUser = { loggedIn: true, email: 'will@will.com' }
    const mockStore = {
      user: mockUser
    };

    const mapped = mapStateToProps(mockStore);

    expect(mapped.user).toEqual(mockStore.user);
  });

  it('should call the dispatch func when using a func getUser', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.getUserFromFirebase();

    expect(mockDispatch).toHaveBeenCalled();
  });
});
