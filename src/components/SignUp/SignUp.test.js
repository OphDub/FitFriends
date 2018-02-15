import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './SignUp';

describe('CONTROL', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<SignUp />);
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

  it('should clear state when handleSignUp is called', () => {
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
