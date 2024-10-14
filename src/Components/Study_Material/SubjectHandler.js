import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API_BASE_URL from '../../config/apiConfig';

export default function SubjectHandler() {
  const { subjectId, classId } = useParams(); // Get subjectId and classId from URL parameters
  const navigate = useNavigate();

  useEffect(() => {
    if (classId && subjectId) {
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };

      fetch(`${API_BASE_URL}/get_chapter_lists_by_subject_id?tag_id=${classId}&channel_id=${subjectId}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.success && result.data) {
            // Navigate to the SubjectChapterWise component and pass chapters as state
            navigate('/SubjectChapterWise', { state: { chapters: result.data } });
          } else {
            console.error('Failed to fetch chapters:', result);
          }
        })
        .catch((error) => console.error('Fetch error:', error));
    }
  }, [classId, subjectId, navigate]);

  return (
    <div>Loading chapters...</div> // You can add a loading spinner here
  );
}
