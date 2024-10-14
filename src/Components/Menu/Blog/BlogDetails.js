import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogDropdownMenu from './BlogDropdownMenu';
import API_BASE_URL from './../../../config/apiConfig'; 
import '../../blog.css'; // Ensure this path is correct

export default function BlogDetails() {
  const { blogId } = useParams();
  const [blogDetails, setBlogDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "session_id=63afa8a057093a4e259db3e1660665c67d5fe90d");

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`${API_BASE_URL}/get_blog_by_id/${blogId}`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(result => {
        if (result.error) {
          throw new Error(`API error: ${result.error.message}`);
        }
        setBlogDetails(result.blog);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error.message);
        setError(error);
        setLoading(false);
      });
  }, [blogId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <BlogDropdownMenu />
      <div className="blogs1_blogLevelThree__5ZsiM blogs1_threeLevel__Eus7K">
        <div className="appheader_section_header-breadcrumb__8xohk appheader_video-breadcrumb__SrgaE flex justify-between">
          <div className="blogs1_container__U74es container">
            <div className="appheader_BreadcrumbSection__gv6e6 BreadcrumbSectionList">
              <div className="flex">
                <div className="appheader_section_header-breadcrumb__8xohk">
                  <a href="/examPattern">
                    <div>NEET PG Preparation</div>
                  </a>
                </div>
                <div className="flex flex-wrap flex1">
                  <a href="/">
                    <div>NEET PG Study Material</div>
                  </a>
                  <a href="/neet-pg-study-material/social-and-preventive-medicine/">
                    <div>Social and preventive medicine</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container blognew_detail">
          <div style={{marginTop: '15px'}}>
          <h1>{blogDetails.name}</h1>
          </div>
          <div className="blogs1_blognew_detail--date__x32v_">
            <p>{blogDetails.published_date || 'Unknown date'}</p>
          </div>
          <div className="blogs1_threeLevel-card__36ym_ py4 flex justify-between">
            <div className="blogs1_threeLevel-card-left___Iq1I">
              <div id="scrollDivEl" className="blogs1_threeLevel-tab__PJUd_">
                <h3>Navigate Quickly</h3>
                <div>
                  {/* Add navigation links if needed */}
                </div>
              </div>
            </div>
            <div className="blogs1_threeLevel-card-right__QZzMm">
              <div className="postdecription-login">
                <div className="blogs1_threeLevelContent__bdjkC">
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: blogDetails.content }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
