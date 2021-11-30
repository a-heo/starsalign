import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import styled from 'styled-components';

const List = styled.ul`
  text-decoration: none;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
  padding: 0;
  background: #c5e5e3;
  font-size: min(calc(1rem + 2vw), 62px);
  justify-content: flex-end;
  gap: min(1vw, 10px);
`;

const NavLink = styled(Link)`
  color:  #a3a7e4;
  padding: 0px 10px 0px;
  text-decoration: none;
  &:hover {
    font-weight: 700;
    font-style: italic;
    background: #a3a7e4;
    color: #c5e5e3;
    border: 1px solid #c5e5e3;
  }
`;

const LogoutButton = styled.button`
  padding: 0;
  border: 0;
  background: none;
  font-family: 'Zilla SLab', serif;
  font-size: min(calc(1rem + 2vw), 62px);
  justify-content: flex-end;
  color:  #a3a7e4;
  padding: 0px 10px 0px;
  &:hover {
    font-weight: 700;
    font-style: italic;
    background: #a3a7e4;
    color: #c5e5e3;
    border: 1px solid #c5e5e3;
  }
`;

const Navigate = ({ login, handleLogout }) => (
  <div>
    <nav>
      <List>
        <li>
          <NavLink to="/">Main</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        {login ? (
          <>
            <li>
              <NavLink to="/info">My Info</NavLink>
            </li>
            <li>
              <NavLink to="/journal">My Journal</NavLink>
            </li>
            <li>
              <LogoutButton type="button" onClick={handleLogout}>Logout</LogoutButton>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </>
        )}
      </List>
    </nav>
    <h1>Stars Align</h1>
  </div>
);

export default Navigate;
