import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '../../config/apiConfig';

const SlideDetails = () => {
  const { slideId } = useParams(); // Extract slideId from URL params
  const [slideContent, setSlideContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSlideContent = async () => {
      try {
        // Set the session cookie (if necessary)
        document.cookie = "session_id=7208944ef97c33aa66d98a3aeb44564db03fe537; Expires=Tue, 30 Sep 2025 15:38:33 GMT; Max-Age=604800; HttpOnly; Path=/";

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        // Fetch the slide details using GET request
        const response = await fetch(`${API_BASE_URL}/slide/slides/?slide_id=${slideId}`, {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch slide content');
        }

        const result = await response.json(); // Parse JSON response
        setSlideContent(result); // Set the result in the state
        console.error("RESULT",result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSlideContent();
  }, [slideId]);

  if (loading) {
    return <p>Loading slide content...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div >
      {slideContent ? (
        <div className="slideContent" >
          {/* Display the slide name */}
          <h3>{slideContent[0].display_name}</h3>

          {/* Display the HTML content if available */}
          {slideContent[0].html_content ? (
            <div dangerouslySetInnerHTML={{ __html: slideContent[0].html_content }} />
          ) : (
            <p>No detailed content available.</p>
          )}
        </div>
      ) : (
        <p>No content found.</p>
      )}
    </div>
  );
};

export default SlideDetails;
