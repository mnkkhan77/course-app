import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #f2f2f2;
  padding: 20px;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
`;

const StyledNavItem = styled.li`
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const StyledSearchInput = styled.input`
  padding: 5px;
`;

const StyledSelect = styled.select`
  padding: 5px;
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
`;

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <StyledHeader>
      <StyledNav>
        <h1>Course Adda</h1>
        <StyledNavList>
          <StyledNavItem>
            <Link to="/">Home</Link>
          </StyledNavItem>
          <StyledNavItem>
            <Link to="/courses">Courses</Link>
          </StyledNavItem>
          {user ? (
            <>
              <StyledNavItem>Welcome, {user.name}</StyledNavItem>
              <StyledNavItem onClick={handleLogout}>Logout</StyledNavItem>
            </>
          ) : (
            <StyledNavItem>
              <Link to="/login">Login</Link>
            </StyledNavItem>
          )}
          <StyledNavItem>
            <StyledSearchInput type="text" placeholder="Search courses" />
          </StyledNavItem>
          <StyledNavItem>
            <StyledSelect>
              <option value="">All Categories</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
            </StyledSelect>
          </StyledNavItem>
          <StyledNavItem>
            <StyledButton>Search</StyledButton>
          </StyledNavItem>
        </StyledNavList>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
