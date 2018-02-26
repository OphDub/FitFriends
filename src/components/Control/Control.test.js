/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Control, mapDispatchToProps } from './Control';

describe('CONTROL', () => {
  let renderedComponent;
  let mockLogin;
  let mockHistory;

  beforeEach(() => {
    mockLogin=jest.fn();
    mockHistory={ push: jest.fn() }

    renderedComponent = shallow(<Control login={mockLogin} history={mockHistory}/>, { disableLifecycleMethods: true });
  });

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should change state when handleChange is called', () => {
    const mockEvent = { target: { value: 'hello', name: 'username'}};
    const expected = 'hello';

    renderedComponent.instance().handleChange(mockEvent);
    renderedComponent.update();

    expect(renderedComponent.state().username).toEqual(expected);
  });

  it('validateLogin should return false and set an error message in state if all fields are not complete', () => {
    renderedComponent.setState({
      email: 'me@me.com',
      password: ''
    });
    const expected = false;
    const expectedErrorMsg = 'Please provide an email and password.';

    expect(renderedComponent.instance().validateLogin()).toEqual(expected);
    expect(renderedComponent.state().errorMsg).toEqual(expectedErrorMsg);
  });

  it('validateLogin should return true if all fields are complete', () => {
    renderedComponent.setState({
      email: 'me@me.com',
      password: 'password'
    });
    const expected = true;

    expect(renderedComponent.instance().validateLogin()).toEqual(expected);
  });

  it('should call login when handleLogin is called', () => {
    const expectedState = {
      email: '',
      password: '',
      errorMsg: '',
    }
    const mockEvent = { preventDefault: jest.fn() };

    renderedComponent.setState({
      email: 'will@me.com',
      password: 'password',
    });
    renderedComponent.instance().handleLogin(mockEvent);

    expect(mockLogin).toHaveBeenCalled();
  });

  it('should clear state when handleLogin is called', async () => {
    const mockEvent = { preventDefault: jest.fn() };
    const expectedState = {
      email: '',
      password: '',
      errorMsg: '',
    };

    renderedComponent.setState({
      email: 'me@me.com',
      password: 'password',
    });

    await renderedComponent.instance().handleLogin(mockEvent);

    expect(renderedComponent.state()).toEqual(expectedState);
  });

  it('should call the dispatch func when using a func from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.login();

    expect(mockDispatch).toHaveBeenCalled();
  });
});
