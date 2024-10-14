import React from 'react';

const TrialEndBanner = () => (
  <div className="video-version-change">
    <div className="video-version">
      <div className="banner">
        <div className="banner-v6">
          <h2>For you, From us!</h2>
          <img src="https://image.prepladder.com/content/APpm8aTknRmVvJ2pFLL31710235288.png" alt="img" className="banner-v6-text" />
          <img src="https://image.prepladder.com/content/pRpfI9e2ABR0gtAUWc4q1710235020.svg" alt="img" className="banner-v6-bg deskimg" />
          <img src="https://image.prepladder.com/content/fC8PyJc89pjZEf8G2pru1710236359.svg" alt="img" className="banner-v6-bg mobimg" />
        </div>
        <div className="container">
          <div className="banner_content">
            <h2>Congratulations!</h2>
            <p>You can now experience premium PrepLadder 6.0 content for FREE for the next 24 hours.</p>
          </div>
        </div>
      </div>
      <div className="trialend_timer">
        <h2><span>Your free trial ends in</span> 23h 59m 02s</h2>
      </div>
      <div className="video-version_listing">
      <div className="container">
        <div className="expired_hed">
          <h2>Here’s an exclusive offer!</h2>
          <p>Enrol in the Medical PG Plan within 24 hours and claim an extra discount!</p>
          <p>Here’s what the FREE trial entails:</p>
        </div>
        <ul>
          <li>
            <div className="card">
              <div className="card_left">
                <img src="https://image.prepladder.com/content/WLQdqmYw9STrsXVThOxH1710231292.svg" alt="Videos Lectures" />
              </div>
              <div className="card_right">
                <h2>Videos Lectures</h2>
                <p>Learn from in-depth video lectures by India’s top medical faculty.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="card_left">
                <img src="https://image.prepladder.com/content/QwTdiqDQEQW2bBrOtwDO1710231344.svg" alt="QBank 6.0" />
              </div>
              <div className="card_right">
                <h2>QBank 6.0</h2>
                <p>Access India’s only Clinical QBank with high-yield questions.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="card_left">
                <img src="https://image.prepladder.com/content/QRpK3Cs6bG6K1spYOQsP1710231387.svg" alt="Notes 6.0" />
              </div>
              <div className="card_right">
                <h2>Notes 6.0</h2>
                <p>Concise and well-structured notes with high-quality medical illustrations.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="card_left">
                <img src="https://image.prepladder.com/content/K1FyJzbd46Eyde9Rkoon1710231404.svg" alt="Test Series and much more" />
              </div>
              <div className="card_right">
                <h2>Test Series and much more</h2>
                <p>Real exam pattern-based test series, treasures, and more.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </div>
    <footer className="footer">
      <div className="container">
        <div className="footer_btn">
          <button className="btn">Start learning</button>
        </div>
      </div>
    </footer>
  </div>
);

export default TrialEndBanner;
