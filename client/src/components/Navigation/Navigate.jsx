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
  font-size: min(calc(1rem + 2vw), 62px);
  justify-content: flex-end;
  gap: max(2vw, 40px);
`;

const IndivLink = styled.li`
  color: blue;
  &:hover {
    font-weight: 700;
    font-style: italic;
  }
`;

const LogoutButton = styled.button`
  padding: 0;
  border: 0;
  background: none;
  &:hover {
    font-weight: 700;
    font-style: italic;
  }
`;

const Navigate = ({ login, handleLogout }) => (
  <div>
    <nav>
      <List>
        <IndivLink>
          <Link to="/">Main</Link>
        </IndivLink>
        <IndivLink>
          <Link to="/about">About</Link>
        </IndivLink>
        {login ? (
          <>
            <IndivLink>
              <Link to="/info">My Info</Link>
            </IndivLink>
            <IndivLink>
              <Link to="/journal">My Journal</Link>
            </IndivLink>
            <IndivLink>
              <LogoutButton type="button" onClick={handleLogout}>Logout</LogoutButton>
            </IndivLink>
          </>
        ) : (
          <>
            <IndivLink>
              <Link to="/login">Login</Link>
            </IndivLink>
            <IndivLink>
              <Link to="/signup">Signup</Link>
            </IndivLink>
          </>
        )}
      </List>
    </nav>
    <h1>Stars Align</h1>
  </div>
);

export default Navigate;
