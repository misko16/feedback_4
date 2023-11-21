import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { selectAuthAuthenticated } from "redux/auth.selectors";
import { logOutThunk } from "redux/authReduser";

const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px 20px;
  margin: 0 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: all 0.3s ease;
  background-color: green;
  color: white;

  &:hover {
    background-color: #2ecc71;
  }

  &.active {
    background-color: #2ecc71;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  margin-right: 20px;
`;


const Navigation = () => {
  const authunticated = useSelector(selectAuthAuthenticated);
  console.log(`authunticated`, authunticated);
  
  const dispatch = useDispatch();
  const onLogOut = () => {dispatch(logOutThunk())};
  return (
        <header>
            <nav>
    <NavContainer>
      {authunticated ? (
      <>      
      <StyledLink to="/contacts">Contacts</StyledLink>
      <button onClick={onLogOut}>Log out</button>
      </>) : ( <>
      <StyledLink to='/'>Home</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/register">Register</StyledLink>
      </>)}
    </NavContainer>
            </nav>
        </header>
  );
};

export default Navigation;
