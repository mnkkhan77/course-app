import React from 'react';
import styled from 'styled-components';

const StyledCourseList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const StyledCourseItem = styled.li`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const CourseList = () => {
  const courses = [
    { id: 1, title: 'Course 1' },
    { id: 2, title: 'Course 2' },
    // Add more course data as needed
  ];

  return (
    <StyledCourseList>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <StyledCourseItem key={course.id}>{course.title}</StyledCourseItem>
        ))}
      </ul>
    </StyledCourseList>
  );
};

export default CourseList;
