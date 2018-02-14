import React from 'react';
import { shallow } from 'enzyme';
import SideNav from './SideNav';

describe('SIDENAV', () => {
  it.skip('should match snapshot', () => {
    const renderedComponent = shallow(<SideNav />);

    expect(renderedComponent).toMatchSnapshot();
  })
})
