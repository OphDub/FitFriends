import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('APP', () => {
  it.skip('should match snapshot', () => {
    const renderedComponent = shallow(<App />);

    expect(renderedComponent).toMatchSnapshot();
  })
})
