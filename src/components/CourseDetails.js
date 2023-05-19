import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledCourseDetails = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CourseDetails = ({ courseId }) => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Simulating API call to fetch course details
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`/api/courses/${courseId}`);
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <StyledCourseDetails>
      <h2>Course Details</h2>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <p>Category: {course.category}</p>
      <p>Price: ${course.price}</p>
      {/* Additional course details */}
    </StyledCourseDetails>
  );
};

export default CourseDetails;
