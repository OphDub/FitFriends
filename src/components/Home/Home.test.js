import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';

describe('HOME', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });
});