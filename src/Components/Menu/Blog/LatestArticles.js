import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API_BASE_URL from './../../../config/apiConfig'; 

const ensureBase64Padding = (base64) => {
  while (base64.length % 4 !== 0) {
    base64 += '=';
  }
  return base64;
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    month: 'long', 
    day: 'numeric', 
    year: 'numeric'
  });
};

const truncateString = (str, length) => {
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length) + '...';
};

const ArticleCard = ({ article }) => {
  const imageSrc = article.thumbnail_image
    ? `data:image/jpeg;base64,${ensureBase64Padding(article.thumbnail_image)}`
    : '/default-image.jpg';

  console.log('Thumbnail Image (truncated):', truncateString(imageSrc, 100));

  return (
    <li>
      <Link to={`/BlogDetails/${article.id}`} title={article.name}>
        <section className="blogs1_blognew_latart--card__mfT07">
          <img
            src={imageSrc}
            alt={article.name}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: 200, objectFit: 'cover' }}
          />
          <div className="blogs1_blognew_latart--cardtext__K3dB8">
            <h2>{article.name}</h2>
            <p>{article.teaser}</p>
          </div>
          <div className="blogs1_blognew_latart--cardstatus__WApUW">
            <Link to={`/BlogDetails/${article.id}`} aria-label={article.name} title={article.name}>
              Read more about {article.name}
            </Link>
            <span>{article.published_date ? formatDate(article.published_date) : 'Unknown date'}</span>
          </div>
        </section>
      </Link>
    </li>
  );
};

const LatestArticles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "frontend_lang=en_GB; session_id=3333");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`${API_BASE_URL}/get_blogs_list`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        setArticles(result.blogs); // Assuming the API returns an array of articles
        console.log("articles are ", result.blogs);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error loading articles: {error.message}</div>;
  }

  return (
    <div className="blogs1_blognew_latart__hTPx9 py4">
      <div className="blogs1_container__U74es container">
        <div className="blogs1_blognew_common-hed___Ge0D">
          <h2>Latest Articles</h2>
        </div>
        <div className="blogs1_blognew_latart--list__x5RtE">
          <ul>
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
