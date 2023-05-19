import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from './AuthContext';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
`;

const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Perform login API call using email and password
      // On successful login, call the login function from the AuthContext
      const userData = { email, password }; // Replace with your actual user data
      login(userData);
      setEmail('');
      setPassword('');
    };
  

  return (
    <StyledForm onSubmit={handleLogin}>
      <StyledInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <StyledInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <StyledButton type="submit">Login</StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
