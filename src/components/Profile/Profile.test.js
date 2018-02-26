/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Profile } from './Profile';

describe('PROFILE', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<Profile />);

    expect(renderedComponent).toMatchSnapshot();
  })
})
