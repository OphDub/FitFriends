import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('MAIN', () => {
  it.skip('should match snapshot', () => {
    const renderedComponent = shallow(<Main />);

    expect(renderedComponent).toMatchSnapshot();
  })
})
