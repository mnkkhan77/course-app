import React from 'react';
import './courseList.css'; // Import the CSS file for styling

const courses = [
  { id: 1, title: 'Introduction to React', category: 'Web Development', price: 10 },
  { id: 2, title: 'Python for Beginners', category: 'Programming', price: 20 },
  { id: 3, title: 'Data Science Fundamentals', category: 'Data Science', price: 15 },
];

const CourseList = () => {
  
  return (
    <div>
      <h2 className="course-list-heading">Course List</h2>
      <div className="course-list-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>Category: {course.category}</p>
            <p>Price: ${course.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
