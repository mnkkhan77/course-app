import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <StyledHome>
      <h2>Welcome to the Course Website!</h2>
      {/* Add other content as needed */}
    </StyledHome>
  );
};

export default Home;
