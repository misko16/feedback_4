import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  return (
    <NavContainer>
      <StyledLink to="/">Contacts</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/register">Register</StyledLink>
    </NavContainer>
  );
};

export default Navigation;
