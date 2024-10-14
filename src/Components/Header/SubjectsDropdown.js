import React, { useState, useEffect } from "react";
import API_BASE_URL from '../../config/apiConfig';
import { useNavigate } from 'react-router-dom';

export default function SubjectsDropdown({ selectedCourseId }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [classId, setClassId] = useState(null); // Assuming classId is a single value
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedCourseId) {
      const myHeaders = new Headers();
      myHeaders.append("Cookie", "session_id=63afa8a057093a4e259db3e1660665c67d5fe90d");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      fetch(`${API_BASE_URL}/get_subjects_by_classid?tag_id=${selectedCourseId}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log("result is ", result);
          if (result.success && result.data) {
            setSubjects(result.data);
            setClassId(result.class_id);
          } else {
            console.log('Failed to fetch subjects:', result);
            setSubjects([]);
            setClassId(null);
          }
        })
        .catch((error) => console.error('Fetch error:', error));
    }
  }, [selectedCourseId]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSubjectClick = (subjectId) => {
    console.log("classId && subjectId ", classId, " ", subjectId)
    if (classId && subjectId) {
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };

      fetch(`${API_BASE_URL}/get_chapter_lists_by_subject_id?tag_id=${classId}&channel_id=${subjectId}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log("Chapter list result: ", result);
          // navigate('/SubjectChapterWise', { state: { chapters: result.data } });
          navigate(`/subject-handler/${classId}/${subjectId}`);
          // Handle the chapter list result here (e.g., store in state or navigate to a new page)
        })
        .catch((error) => console.error('Fetch error:', error));
    }
  };

  return (
    <li>
      <div className="header_header-subjectlink__D5Jw0">
        <div className="header_header-subjectMain__6U9nU" onClick={toggleDropdown} role="button" aria-haspopup="listbox">
          <span>
            <div id="subject-dropdown-selected">Subjects</div>
            <img
              alt="arrow"
              src="https://image.prepladder.com/content/moMeVWkrvdNHNDOvAHwu1683630892.png"
            />
          </span>
        </div>
        {dropdownOpen && (
          <div className="header_header-subject-dropInner__NGhmL" role="listbox">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className="header_header-subject-drop__Pbm6s"
                role="option"
                onClick={() => handleSubjectClick(subject.id)}
              >
                <div className="header_header-subject-dropList__vp8NR">
                  <div className="flex justify-between items-center width-100">
                    {subject.display_name}
                    {/* <div className="rotate-90">
                      <img src="https://image.prepladder.com/content/moMeVWkrvdNHNDOvAHwu1683630892.png" alt="icon" />
                    </div> */}
                  </div>
                  <div className="header_header-subject-dropSub__tQyWk">
                    {/* Add more subject details or links here if needed */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
