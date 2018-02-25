import React from 'react';
import { shallow } from 'enzyme';
import { SideNav, mapStateToProps, mapDispatchToProps } from './SideNav';

describe('SIDENAV', () => {
  it('should match the snapshot', () => {
    const renderedComponent = shallow(<SideNav />);

    expect(renderedComponent).toMatchSnapshot();
  });

  it('should map the store correctly', () => {
    const mockUser = { loggedIn: true, name: 'Someuser@me.com'};
    const mockStore = {
      user: mockUser
    };

    const mapped = mapStateToProps(mockStore);

    expect(mapped.user).toEqual(mockStore.user);
  });

  it('should call the dispatch func when the logout func is called', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.logout();

    expect(mockDispatch).toHaveBeenCalled();
  });
});
