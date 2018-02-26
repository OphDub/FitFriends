/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { SignUp, mapDispatchToProps } from './SignUp';

describe('SIGNUP', () => {
  let renderedComponent;
  let mockSignUp;

  beforeEach(() => {
    mockSignUp = jest.fn();
    renderedComponent = shallow(<SignUp signup={mockSignUp}/>);
  });

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should change state when handleChange is called', () => {
    const mockEvent = { target: { value: 'Big-O', name: 'userName'}};
    const expected = 'Big-O';

    renderedComponent.instance().handleChange(mockEvent);
    renderedComponent.update();

    expect(renderedComponent.state().userName).toEqual(expected);
  });

  it('should return false and set an error message in state if all user items in state are not complete', () => {
    renderedComponent.instance().setState({
      userEmail: 'will@me.com',
      userPass1: 'password',
      userPass2: '',
    });
    const expected = false;
    const expectedErrorMsg = 'Please fill out all fields.';

    expect(renderedComponent.instance().signUpValidation()).toEqual(expected);
    expect(renderedComponent.state().errorMsg).toEqual(expectedErrorMsg)
  });

  it('should return false and set an error message in state if passwords do not match', () => {
    renderedComponent.instance().setState({
      userEmail: 'will@me.com',
      userPass1: 'password',
      userPass2: 'different',
    });

    const expected = false;
    const expectedErrorMsg = 'Please make sure passwords match.';

    expect(renderedComponent.instance().signUpValidation()).toEqual(expected);
    expect(renderedComponent.state().errorMsg).toEqual(expectedErrorMsg)
  });

  it('should return true if all user elements in state are ok', () => {
    renderedComponent.instance().setState({
      userEmail: 'will@iambest.com',
      userPass1: 'password',
      userPass2: 'password',
    });
    const expected = true;

    expect(renderedComponent.instance().signUpValidation()).toEqual(expected);
  });

  it('should call signup when handleSignUp is called', () => {
    const mockEvent = { preventDefault: jest.fn() };

    renderedComponent.setState({
      userEmail: 'will@whodat.com',
      userPass1: 'password',
      userPass2: 'password',
    });
    renderedComponent.instance().handleSignUp(mockEvent);

    expect(mockSignUp).toHaveBeenCalled();
  });

  it('should clear state when handleSignUp is called', async () => {
    const mockEvent = { preventDefault: jest.fn() };
    const expected = {
      userEmail: '',
      userPass1: '',
      userPass2: '',
      errorMsg: '',
    };

    renderedComponent.setState({
      userEmail: 'will@me.com',
      userPass1: 'password',
      userPass2: 'password',
    });

    await renderedComponent.instance().handleSignUp(mockEvent);

    expect(renderedComponent.state()).toEqual(expected);
  });

  it('should call the dispatch fun when the signup func is called', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.signup();

    expect(mockDispatch).toHaveBeenCalled();
  });
})
