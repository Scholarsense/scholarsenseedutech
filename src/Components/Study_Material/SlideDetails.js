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
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSlideContent();
  }, [slideId]);

  // Function to update relative image paths to absolute paths
  const updateImagePaths = (htmlContent) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;

    const images = tempDiv.getElementsByTagName('img');
    for (let img of images) {
      const src = img.getAttribute('src');
      if (src.startsWith('/')) {
        img.src = `${API_BASE_URL}${src}`;
      }
    }
 
    return tempDiv.innerHTML;
  };

  if (loading) {
    return <p>Loading slide content...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {slideContent ? (
        <div className="slideContent">
          {/* Display the slide name */}
          <h3>{slideContent[0].display_name}</h3>

          {/* Display the HTML content with updated image paths */}
          {slideContent[0].html_content ? (
            <div dangerouslySetInnerHTML={{ __html: updateImagePaths(slideContent[0].html_content) }} />
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
