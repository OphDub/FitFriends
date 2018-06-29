/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { SideNav, mapStateToProps, mapDispatchToProps } from './SideNav';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';

describe('SIDENAV', () => {
  let mockImgUrl;
  let mockUserName;
  let mockUserEmail;
  let mockUser;
  let renderedComponent;

  beforeEach(() => {
    mockUserName = 'Batman';
    mockUserEmail = 'batman@gotham.com';
    mockImgUrl = 'www.someimage.com';

    mockUser = {
      image: mockImgUrl,
      name: mockUserName,
      email: mockUserEmail
    }

    renderedComponent = shallow(<SideNav user={mockUser}/>, { disableLifecycleMethods: true });
  });

  it('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('renderUserProfile should return an img tag if the user image is valid', () => {
    const expected = (<img src="www.someimage.com" alt="User profile" className="user-pic"/>);

    const userProfile = renderedComponent.instance().renderUserProfile()

    expect(userProfile).toEqual(expected);
  });

  it('renderUserProfile should return a div with a FontAwesomeIcon if the user image is invalid', () => {
    mockUser = {
      image: null,
      name: 'The Flash',
      email: 'flash@centralcity.com'
    }

    renderedComponent = shallow(<SideNav user={mockUser}/>);

    const expected = (<div className="user-pic"><FontAwesomeIcon icon={faUser} size="sm"/></div>);
    const userProfile = renderedComponent.instance().renderUserProfile();

    expect(userProfile).toEqual(expected);
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
