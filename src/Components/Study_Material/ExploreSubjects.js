import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../../config/apiConfig';

const ExploreSubjects = () => {
  const [expanded, setExpanded] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();
  const [classId, setClassId] = useState(4); // Set this value appropriately

  const subjectImageMapping = {
    'physics': 'https://image.prepladder.com/content/nME92SwP8sJoh0gvq45e1677066841.svg',
    'chemistry': 'https://image.prepladder.com/content/vxLRx3FZNiEwIRZyi1em1677066861.svg',
    'biology': 'https://image.prepladder.com/content/LRVebRvYpg6UHcNWTo7j1677066902.svg',
    'maths': 'https://image.prepladder.com/content/q7rNEc1qSr6wWbvBuSLT1677066942.svg',
    'english': 'https://image.prepladder.com/content/1bZagA95R58V1kbwoFwi1677066818.svg'
  };

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
        const response = await fetch(`${API_BASE_URL}/get_subjects_by_classid?tag_id=4`, requestOptions);
        const result = await response.json();

        const formattedSubjects = result.data.map(subject => {
          console.log('Subject Name:', subject.display_name); // Debugging output
          return {
            id: subject.id,
            name: subject.display_name,
            description: subject.description || 'Description not available',
            imgSrc: subjectImageMapping[subject.display_name.trim().toLowerCase()] || 'https://via.placeholder.com/150'
          };
        });
        setSubjects(formattedSubjects);
      } catch (error) {
        console.error('Error fetching subjects:', error);
      }
    };

    fetchSubjects();
  }, []);

  const handleSubjectClick = (subjectId) => {
    if (classId && subjectId) {
      navigate(`/SubjectTopics/${classId}/${subjectId }`);
    }
  };

  const visibleSubjects = expanded ? subjects : subjects.slice(0, 6);

  return (
    <div className="exploreSubject_exploreSubject__esY2K">
      <div className="container">
        <div className="qbankNext-head">Explore other NEET PG Subjects</div>
        <div className="qbankNext-subhead mb5">Get the Best Study Material for all the 19 subjects</div>
        <div className="exploreSubject_exploreSubject-list__H1FNS flex flex-wrap">
          {visibleSubjects.map((subject) => (
            <button 
              key={subject.id}
              className="exploreSubject_exploreSubject-listMain__Wkvej flex items-center"
              onClick={() => handleSubjectClick(subject.id)} // Pass subject.id
            >
              <img src={subject.imgSrc} onError={(e) => e.target.src = 'https://via.placeholder.com/150'} alt={subject.name} />
              <div>
                {subject.name}
                <span>{subject.description}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="exploreSubject_exploreSubject-btn__JfdaF">
          <button 
            className="show-more-less" 
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                Show Less <span className="arrow-up"></span>
              </>
            ) : (
              <>
                View all subjects <span className="arrow-down"></span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreSubjects;
