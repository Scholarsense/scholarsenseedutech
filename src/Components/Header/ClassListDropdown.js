import React, { useState, useEffect } from "react";
import API_BASE_URL from '../../config/apiConfig';

export default function ClassListDropdown({ onCourseSelect }) {
  const [selectedCourse, setSelectedCourse] = useState('All Courses');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "session_id=63afa8a057093a4e259db3e1660665c67d5fe90d");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`${API_BASE_URL}/get_all_classes_list`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success && result.blogs.length > 0) {
          const courseNames = result.blogs[0].tag_ids.map(tag => ({
            id: tag.id,
            name: tag.name
          }));
          setCourses(courseNames);
        }
      })
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectCourse = (course) => {
    setSelectedCourse(course.name);
    setDropdownOpen(false);
    if (onCourseSelect) {
      onCourseSelect(course.id); // Pass selected course ID to parent component
    } else {
      console.error('onCourseSelect is not a function');
    }
  };

  return (
    <div className="class-list-dropdown">
      <div 
        className={`dropdown-header ${dropdownOpen ? 'open' : ''}`} 
        onClick={toggleDropdown} 
        role="button" 
        aria-haspopup="listbox"
      >
        <div id="course-dropdown-selected">{selectedCourse}</div>
        <img
          alt="arrow"
          src="https://image.prepladder.com/content/iIIogvP6IqhIeimkMrzK1655805750.svg"
        />
      </div>
      {dropdownOpen && (
        <div className="dropdown-list" role="listbox">
          {courses.map((course) => (
            <div
              key={course.id}
              role="option"
              aria-selected={selectedCourse === course.name}
              className={`dropdown-item ${selectedCourse === course.name ? 'highlighted' : ''}`}
              onClick={() => selectCourse(course)}
            >
              {course.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
