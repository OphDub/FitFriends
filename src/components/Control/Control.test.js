import React from 'react';
import { shallow } from 'enzyme';
import Control from './Control';

describe('CONTROL', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = shallow(<Control />);
  });

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should change state when handleChange is called', () => {
    const mockEvent = { target: { value: 'hello', name: 'username'}};
    const expected = 'hello';

    renderedComponent.instance().handleChange(mockEvent);

    expect(renderedComponent.state().username).toEqual(expected);
  });

  it('should clear state when handleLogin is called', () => {
    const mockEvent = { target: { value: 'hello', name: 'username'}};
    let expected = 'hello';

    renderedComponent.instance().handleChange(mockEvent);

    expect(renderedComponent.state().username).toEqual(expected);

    expected = '';
    renderedComponent.instance().handleLogin();

    expect(renderedComponent.state().username).toEqual(expected);
  });
})
