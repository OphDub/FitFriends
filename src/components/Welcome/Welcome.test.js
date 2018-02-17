import React from 'react';
import { shallow } from 'enzyme';
import SignIn from './SignIn';

describe('SIGNIN', () => {
  it.skip('should match snapshot', () => {
    const renderedComponent = shallow(<SignIn />);

    expect(renderedComponent).toMatchSnapshot();
  })
})
