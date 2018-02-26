/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { TopNav } from './TopNav';

describe('TOPNAV', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<TopNav />);

    expect(renderedComponent).toMatchSnapshot();
  })
})
