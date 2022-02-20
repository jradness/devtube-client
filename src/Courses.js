import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses ] = useState([]);

  useEffect(() => {
    axios.get('http://devtube.codes/api/v1/courses?select=title,description')
    .then(res => setCourses(res.data.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {courses.length ? courses.map(course => (
        <div key={course._id} style={{ border: '2px solid red', maxWidth: '600px', padding: '5px'}}>
          <h4>{course.title}</h4>
          <small>{course.description}</small>
        </div>
      )): null}
    </div>
  )
}

export default Courses;