import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectAuthAuthenticated } from 'redux/auth.selectors';
import UserMenu from './UserMenu';


const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <header>
      <nav className="navigation-container">
        <div className="nav-links">
          {authenticated ? (
            <>
              <NavLink to="/contacts" className="nav-link" activeClassName="active-nav-link">
                Contacts
              </NavLink>
              <UserMenu />
            </>
          ) : (
            <>
              <NavLink to="/" className="nav-link" activeClassName="active-nav-link">
                Home
              </NavLink>
              <NavLink to="/login" className="nav-link" activeClassName="active-nav-link">
                Login
              </NavLink>
              <NavLink to="/register" className="nav-link" activeClassName="active-nav-link">
                Register
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

