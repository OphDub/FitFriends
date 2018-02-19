import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from './SignUp';

describe('SIGNUP', () => {
  let renderedComponent;
  let mockFn

  beforeEach(() => {
    mockFn = jest.fn()
    renderedComponent = shallow(<SignUp signUpUser={mockFn} loginUser={mockFn}/>);
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

  it('should set userId when handleSignUp is called', () => {
    const mockEvent = { preventDefault: jest.fn() };
    const mockDateNow = () => {
      return 1518981869196;
    }
    const originalDateNow = Date.now;
    Date.now = mockDateNow;
    const mockUserId = '1518981869196';

    renderedComponent.instance().handleSignUp(mockEvent);

    expect(renderedComponent.state().userId).toEqual(mockUserId);

    Date.now = originalDateNow
  })

  it('should call SignUpUser and loginUser when handleSignUp is called', () => {
    const mockEvent = { preventDefault: jest.fn() };

    renderedComponent.instance().handleSignUp(mockEvent);

    expect(mockFn).toHaveBeenCalled();
  });

  it('should clear state when handleSignUp is called', () => {
    const mockEvent = { preventDefault: jest.fn() };
    const expected = {
      firstName: '',
      lastName: '',
      userName: '',
      userEmail: '',
      userPass: '',
      userId: '',
    }

    renderedComponent.instance().setState({
      firstName: 'Chuck',
      lastName: 'Norris',
      userName: 'chuck',
      userEmail: 'chuck@norris.com',
      userPass: 'defeatbruce',
      userId: '123456789',
    });

    renderedComponent.instance().handleSignUp(mockEvent);

    expect(renderedComponent.state()).toEqual(expected);
  })
})
