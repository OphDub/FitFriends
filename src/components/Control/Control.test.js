import React from 'react';
import { shallow } from 'enzyme';
import { Control, mapStateToProps, mapDispatchToProps } from './Control';

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
    renderedComponent.update();

    expect(renderedComponent.state().username).toEqual(expected);
  });

  it('should clear state when handleLogin is called', () => {
    const exampleString = 'hello';
    const exampleEvent = { target: { value: 'hello', name: 'username'}};
    const mockFn = jest.fn();
    const wrapper = shallow(<Control loginUser={mockFn} handleReroute={mockFn}/>);

    wrapper.instance().handleChange(exampleEvent);
    wrapper.update();

    expect(wrapper.state().username).toEqual(exampleString);

    const expected = '';
    const mockEvent = {preventDefault: jest.fn()};

    wrapper.instance().handleLogin(mockEvent);
    wrapper.update();

    expect(wrapper.state().username).toEqual(expected);
  });

  it('calls loginUser and handleReroute when handleLogin is called', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Control loginUser={mockFn} handleReroute={mockFn}/>);
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.instance().handleLogin(mockEvent);
    expect(mockFn).toHaveBeenCalled();
  });

  it('should call the dispatch func when using a func from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.loginUser();

    expect(mockDispatch).toHaveBeenCalled();
  })
});
