import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API_BASE_URL from '../../config/apiConfig';
import BlogDropdownMenu from "../Menu/Blog/BlogDropdownMenu";

const SubjectTopics = () => {
  const { classId } = useParams(); // Extract classId from URL params
  const [subjects, setSubjects] = useState([]); // State to store subjects
  const [chapters, setChapters] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null); // State to store selected subject
  const navigate = useNavigate(); // To navigate to a new page

  // Fetch subjects
  useEffect(() => {
    const fetchSubjects = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Cookie", "session_id=3c3faa9d77ea7f5944915815e157d6a0d3a28242");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      try {
        const response = await fetch(`${API_BASE_URL}/get_subjects_by_classid?tag_id=${classId}`, requestOptions);
        const result = await response.json();
        console.log('Subjects API Response:', result);

        if (result.data && result.data.length > 0) {
          setSubjects(result.data);
          setSelectedSubject(result.data[0].id); // Set the first subject as selected by default
        } else {
          console.warn('No subjects found in the API response.');
        }
      } catch (error) {
        console.error('Error fetching subjects:', error);
      }
    };

    fetchSubjects();
  }, [classId]);

  // Fetch chapters for the selected subject
  useEffect(() => {
    const fetchChapters = async () => {
      if (selectedSubject) {
        const myHeaders = new Headers();
        myHeaders.append("Cookie", "session_id=3c3faa9d77ea7f5944915815e157d6a0d3a28242");

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow"
        };

        try {
          const response = await fetch(`${API_BASE_URL}/get_chapter_lists_by_subject_id?tag_id=${classId}&channel_id=${selectedSubject}`, requestOptions);
          const result = await response.json();
          console.log('Chapters API Response:', result);

          if (result.data && result.data.length > 0) {
            setChapters(result.data);
          } else {
            console.warn('No chapters found in the API response.');
          }
        } catch (error) {
          console.error('Error fetching chapters:', error);
        }
      }
    };

    fetchChapters();
  }, [selectedSubject, classId]);

  // Function to handle slide click
  const handleSlideClick = (slideId) => {
    navigate(`/slide/${slideId}`); // Navigate to the slide details page with slideId
  };

  if (!subjects.length) {
    return <div>Loading subjects...</div>;
  }

  if (!chapters.length) {
    return <div>No chapters available</div>;
  }

  // Sort chapters by sequence (ascending)
  const sortedChapters = [...chapters].sort((a, b) => a.sequence - b.sequence);

  // Extract slides from sorted chapters
  const slides = sortedChapters.flatMap(chapter => chapter.slides || []);

  return (
    <div className="blogs1_blognew__VPYrm blogs1_blogDetail__EeAzN">
      <BlogDropdownMenu />
      <div className="blogs1_blogLevelThree__5ZsiM blogs1_threeLevel__Eus7K">
        <div className="container blognew_detail">
          <div className="blogs1_threeLevel-card__36ym_ py4 flex">
            <div className="blogs1_threeLevel-card-left___Iq1I">
              <div id="scrollDivEl" className="blogs1_threeLevel-tab__PJUd_">
                <h3>Navigate Quickly</h3>
                <div>
                  {subjects.map((subject, index) => (
                    <div
                      key={subject.id}
                      id={`titleContainer${index}`}
                      className={`blogs1_threeLevel-tab-item__bHK6M ${
                        selectedSubject === subject.id ? 'blogs1_activeItem__VtHwT' : ''
                      }`}
                      onClick={() => setSelectedSubject(subject.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div id={`description-unique-id=${index}`} style={{ cursor: 'pointer' }}>
                        <h4>
                          <h2 className="wp-block-heading">{subject.display_name}</h2>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="blogs1_threeLevel-card-right__QZzMm">
              <div className="postdecription-login">
                <div>
                  <div className="blogs1_threeLevelContent__bdjkC">
                    <h2 className="wp-block-heading">{`${subjects.find(sub => sub.id === selectedSubject)?.display_name || ''}`}</h2>
                    <p>
                      The {`${subjects.find(sub => sub.id === selectedSubject)?.display_name || ''}`} subject consists of a total of 25 questions that will be asked from Class 11. Chapter-wise {`${subjects.find(sub => sub.id === selectedSubject)?.display_name || ''}`} Subject is mentioned in the table below:
                    </p>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <tbody>
                        {slides.length > 0 ? (
                          slides.map(slide => (
                            <tr key={slide.id} onClick={() => handleSlideClick(slide.id)} style={{ cursor: 'pointer' }}>
                              <td style={{ border: '1px solid #ddd', padding: '8px', fontWeight:'bold' }}>{slide.name}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td
                              colSpan="1"
                              style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}
                            >
                              No slides available
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectTopics;
