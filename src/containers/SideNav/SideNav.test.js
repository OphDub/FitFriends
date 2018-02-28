/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { SideNav, mapStateToProps, mapDispatchToProps } from './SideNav';

describe('SIDENAV', () => {
  it('should match the snapshot', () => {
    const mockImgUrl = 'www.someimage.com';
    const mockUserName = 'Batman';
    const mockUserEmail = 'batman@gotham.com'
    const mockUser = {
      image: mockImgUrl,
      name: mockUserName,
      email: mockUserEmail
    }
    const renderedComponent = shallow(<SideNav user={mockUser}/>, { disableLifecycleMethods: true });

    expect(renderedComponent).toMatchSnapshot();
  });

  describe('mapStateToProps and mapDispatchToProps for SideNav', () => {
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
});
