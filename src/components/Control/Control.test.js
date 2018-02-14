import React from 'react';
import { shallow } from 'enzyme';
import Control from './Control';

describe('CONTROL', () => {
  it.skip('should match snapshot', () => {
    const renderedComponent = shallow(<Control />);

    expect(renderedComponent).toMatchSnapshot();
  })
})
