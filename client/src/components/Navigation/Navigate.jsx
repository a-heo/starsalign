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
  background: #f0f1b3;
  font-size: 1.75vmax;
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
    color: #f0f1b3;
    border: 1px solid #f0f1b3;
  }
`;

const LogoutButton = styled.button`
  padding: 0;
  border: 0;
  background: none;
  font-family: 'Red Hat Display', serif;
  font-size: 1.75vmax;
  justify-content: flex-end;
  color:  #a3a7e4;
  padding: 0px 10px 0px;
  &:hover {
    font-weight: 700;
    font-style: italic;
    background: #a3a7e4;
    color: #f0f1b3;
    border: 1px solid #f0f1b3;
  }
`;

const Title = styled.h1`
  &.beforeLogin {
    font-size: 15vmin;
    margin: 15vmin 1vmin 0.5vmin;
    color: #a3a7e4;
    letter-spacing: 3vw;
    display: inline-block;
    font-weight: bold;
  }
  &.afterLogin {
    color: #934662;
    font-weight: normal;
    margin: 5vmin;
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
    <Title className={login ? 'afterLogin' : 'beforeLogin'}>STARS ALIGN</Title>
  </div>
);

export default Navigate;
