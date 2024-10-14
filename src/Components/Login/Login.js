import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import Edit_Pdetails from '../../Components/Dasboard_Side_Menu/Profile /Edit_Pdetails'; // Adjust path
import API_BASE_URL from '../../config/apiConfig';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [error, setError] = useState(""); // To handle login errors
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setIsButtonDisabled(value.length === 0 || password.length === 0);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsButtonDisabled(username.length === 0 || value.length === 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous errors
    setError("");

    // API request setup
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "frontend_lang=en_GB; session_id=57b8b4de467b539348e3ad612a3300bec993ffce");

    const raw = JSON.stringify({
      "jsonrpc": "2.0",
      "method": "call",
      "params": {
        "db": "scholarsense",
        "login": username, // use the username from input
        "password": password // use the password from input
      }
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`${API_BASE_URL}/auth/token?login=${username}&password=${password}&db=scholarsense`, requestOptions)
      .then((response) => response.json())  // Parse response as JSON
      .then((result) => {
        if (result.error) {
          setError('Invalid username or password');
          console.error('Login failed:', result.error.message);  // Handle error message
        } else {
          console.log('Login successful:', result);
          setIsLoggedIn(true); // Set login status to true
          navigate("/profile"); // Navigate to the dashboard page
        }
      })
      .catch((error) => {
        setError('An error occurred during login.');
        console.error('Fetch error:', error);
      });
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  // If logged in, show the Edit_Pdetails component
  if (isLoggedIn) {
    return <Edit_Pdetails />;
  }

  return (
    <div className="profileCourse-height">
      <div className="login_login__vuTed">
        <button className="width-100 self-baseline" style={{ background: "none" }}>
          <div className="container">
            <div className="flex justify-between items-center">
              <div className="login_login__logo__AT60Z text-left">
                <a href="/">
                  <img src="asserts/images/scholar-bg.png" width="100%" alt="logo" height="100%" />
                </a>
              </div>
            </div>
          </div>
        </button>
        <div className="login_logins_main__E0uYl container">
          <div className="login_login__right__KS8Fj">
            <div>
              <div className="login_login__right--inner__O40yr">
                <div className="login_login__right--slider__1xV4h dot-change">
                  <Slider {...sliderSettings}>
                    {/* Slider content */}
                    {/* Add your slider items here */}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div className="login_login__left__5HS3Z">
            <div className="login_login__left--outer__K3r6K">
              <div className="login_login__section__hxus_">
                <form onSubmit={handleSubmit}>
                  <div className="login_login__section-top__Z8Pnk">
                    <h4>Let’s get started</h4>
                    <div className="login_login__para__mwy8k">
                      Enter your username and password to Login to your Scholar Sense account
                    </div>
                    <div className="login_login__input__container">
                      <input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value={username}
                        onChange={handleUsernameChange}
                        className="countryCode_CountryCode01_form__vOC5g"
                        autoComplete="off"
                        style={{ marginTop: 20 }}
                      />
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="countryCode_CountryCode01_form__vOC5g"
                        autoComplete="off"
                        style={{ marginTop: 10 }}
                      />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message */}
                    <div className="login_login__confirm__OfI9w">
                      <button
                        id="button-1"
                        disabled={isButtonDisabled}
                        type="submit"
                        className="login-btn width-100"
                        style={{ marginTop: 20 }}
                      >
                        Continue
                      </button>
                    </div>
                    <div className="login_login__copywrite__J4lTn mt2 mob-display-none">
                      By signing up, you agree to
                      <span>
                        <a href="/termsConditions"> Terms &amp; Conditions </a> and <a href="/privacypolicy"> Privacy Policy </a>
                      </span>
                      of Scholar Sense
                      <a href="/signup"> Signup </a>
                    </div>
                  </div>
                </form>
                <div id="recaptcha-container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
