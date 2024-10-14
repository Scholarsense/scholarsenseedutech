import React from 'react'

export default function Coupon() {
  
    const handleCloseClick = () => {
        window.history.back();
      };
      return (
        <div className="main_sec">
      <div className="main_sec--content">
        <div className="container">
          <div className="close">
            <button onClick={handleCloseClick}>
              <img
                src="https://image.prepladder.com/content/Ae55qZAuPiK7HyfPCQcg1701431752.svg"
                alt="logo"
              />
            </button>
          </div>
          <div className="logo">
            <img
              src="asserts/images/scholar-bg.png"
              alt="logo"
            />
          </div>
          <div className="card">
            <div className="card_inner">
              <div className="card_top">
                <div className="card_vector"></div>
                <img
                  className="card_img"
                  src="https://image.prepladder.com/content/enxPEU75rX7WDuUdswyJ1701432837.svg"
                  alt="img"
                />
                <h2>Have a code?</h2>
                <p>
                  Dive into the mystery! Apply now and let the magic unfold
                  exclusively for you
                </p>
              </div>
              <div className="coupon_code">
                <h2>Your Coupon Code</h2>
                <div className="coupon_box">
                  <input
                    type="text"
                    placeholder="Enter your coupon code"
                    autoFocus={true}
                  />
                </div>
                <div className="errorMsg"></div>
                <button className="btn btn-theme">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      );
    };