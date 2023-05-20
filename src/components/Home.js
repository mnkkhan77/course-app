import React from 'react';
import CourseList from './CourseList';
import styled from 'styled-components';

const StyledHome = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <div>
    <StyledHome>
      <h2>Welcome to the Course Website!</h2>
      {/* Add other content as needed */}
    </StyledHome>
    <CourseList/>
    </div>
  );
};

export default Home;
