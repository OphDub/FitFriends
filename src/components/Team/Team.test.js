/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Team } from './Team';
import { mockTeam } from '../../initialData';

describe('TEAM', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<Team team={mockTeam}/>, { disableLifecycleMethods: true });

    expect(renderedComponent).toMatchSnapshot();
  });
});