/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Teammate } from './Teammate';

describe('TEAMMATE', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<Teammate/>);

    expect(renderedComponent).toMatchSnapshot();
  });
});