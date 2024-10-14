import React from 'react';

const articles = [
  {
    title: 'Muscles of The Hand',
    description: 'There are 20 muscles in the hand. As junior doctor we must know the names of these muscles. They can be asked directly or indirectly in any competitiv',
    link: '/neet-pg-study-material/anatomy/muscles-of-the-hand',
    date: 'Aug 09 2024'
  },
  {
    title: 'Muscles of the Gluteal Region',
    description: 'Posterior View and Lateral View of the Gluteus MusclesAll the gluteus muscles take their origin from the dorsal aspect of the hip bone, and&nbsp; insert in',
    link: '/neet-pg-study-material/anatomy/muscles-of-the-gluteal-region',
    date: 'Aug 05 2024'
  },
  {
    title: 'Development of Genito-Urinary System',
    description: 'Development of Genital SystemThe Intermediate mesoderm is the Germ layer that contributes to the Genito-urinary system. External genitalia are fully d',
    link: '/neet-pg-study-material/anatomy/development-of-genito-urinary-system',
    date: 'Jul 31 2024'
  }
];

const RecentArticleSubjectWise = () => {
  return (
    <div className="article_article__lVDBF">
      <div className="container">
        <div className="qbankNext-head">Recent NEET PG Anatomy Articles</div>
        <div className="qbankNext-subhead mb4">Stay updated on everything related to NEET PG Anatomy preparation</div>
        <div className="article_article-main__zTniO row flex flex-wrap">
          {articles.map((article, index) => (
            <div key={index} className="col col-4 md-col-12">
              <div className="article_article-section__Z5nkn">
                <div>
                  <div className="article_article-head__vxRUL">{article.title}</div>
                  <div className="article_article-subhead__BB3VB">{article.description}</div>
                </div>
                <div className="article_article-content__sQHSI flex justify-between">
                  <a className="" href={article.link}>Read More</a>
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentArticleSubjectWise;
