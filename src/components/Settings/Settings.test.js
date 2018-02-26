/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Settings } from './Settings';

describe('SETTINGS', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<Settings />);

    expect(renderedComponent).toMatchSnapshot();
  });
});
