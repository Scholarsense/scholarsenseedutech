import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import OTPVerification from "./OTPVerification";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../../config/apiConfig';

export default function SignUp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [mobileNumber, setMobileNumber] = useState('');
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOTPRequested, setIsOTPRequested] = useState(false);
  const [error, setError] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const recaptchaVerifierRef = useRef(null);
  const navigate = useNavigate();
 
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setIsButtonDisabled(value.length === 0 || password.length === 0);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsButtonDisabled(value.length === 0 || Email.length === 0);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsButtonDisabled(name.length === 0 || value.length === 0);
  };

  // Initialize RecaptchaVerifier only once
  useEffect(() => {
    if (!recaptchaVerifierRef.current) {
      recaptchaVerifierRef.current = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {
          console.log('reCAPTCHA resolved.');
        },
        'expired-callback': () => {
          console.log('reCAPTCHA expired.');
        }
      });
    }
  
    // Clean up RecaptchaVerifier on component unmount
    return () => {
      if (recaptchaVerifierRef.current) {
        recaptchaVerifierRef.current.clear();
        recaptchaVerifierRef.current = null;
      }
    };
  }, []);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (mobileNumber.length === 10) {
      const phoneNumber = `+91${mobileNumber}`;
      const appVerifier = recaptchaVerifierRef.current;

      try {
        // First check if the user already exists
        const userExists = await checkIfUserExists();
        // console.error("user existence Check",userExists);
        if (userExists=="error") {
          setError("User already exists. Please log in.");
          // console.error("user already exit");
          return; // Stop further execution
        }
        else{

        

        // If the user doesn't exist, proceed to send OTP
        console.log(phoneNumber);
        const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
        window.confirmationResult = confirmationResult;
        setIsOTPRequested(true);
        
        // Call the API to register the user
        await registerUser();
        }
      } catch (error) {
        // console.error("Error during OTP sending:", error);
        if (error.code === 'auth/too-many-requests') {
          setError("You have sent too many requests. Please wait a while before trying again.");
        } else {
          setError("Failed to send OTP. Please check your number and try again.");
        }
      }
    } else {
      setError("Please enter a valid 10-digit mobile number.");
    }
  };

  // Function to check if user already exists
  const checkIfUserExists = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: Email, // Use email or phone number to check user existence
      phone: mobileNumber
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    try {
      const response = await fetch(`${API_BASE_URL}/check_user`, requestOptions);
      const result = await response.json();
      // console.log("user exist result",result.result.status);
      return result.result.status; // Assuming API returns `{ exists: true/false }`
    } catch (error) {
      // console.error("Error checking user existence:", error);
      return false; // Default to false in case of an error
    }
  }

  const registerUser = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "frontend_lang=en_GB; session_id=bc2f7084c484a79bcea16a018cfb9a20d0107faf");
  
    const raw = JSON.stringify({
      name,
      email: Email,
      password,
      phone: mobileNumber,
      "params": {
        "db": "scholarsense",
      }
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
  
    try {
      const response = await fetch(`${API_BASE_URL}/register`, requestOptions);
      const result = await response.json(); // Parse as JSON
  
      console.log("result registration", result);
      
      // Check for success in the registration result
      if (result && result.success) {
        // navigate('/OTPVerification'); 
      } else if (result && result.error === 'User already exists') {
        // User already exists, set error message
        setError("User already exists. Please log in instead.");
      } else {
        // Handle registration error
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setError("Registration failed. Please try again.");
    }
  };

  const handleOTPClose = () => {
    setIsOTPRequested(false);
  };
  
  return (
    <div>
      <div className="profileCourse-height"></div>
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
                  <Slider {...settings}>
                    <div data-index="-1" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '448px' }}>
                      <div className="login_logins_slider__5x6jy">
                        <div>
                          <div className="flex flex-wrap justify-center">
                            <img src="https://image.prepladder.com/content/6aUkek8XLgtWoriDZr1l1680519384.png" alt="carousel" />
                            <div>
                              <h1 className="login_login__right--slider-head__7CO1l">Welcome to Scholar Sence</h1>
                              <div className="login_login__right--slider-subhead__mMVEh">Your one-stop destination to crack competitive exams like Medical PG, FMGE, NEET SS and INI CET. Own your Dream!</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-index="0" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{ outline: 'none', width: '448px' }}>
                      <div className="login_logins_slider__5x6jy">
                        <div>
                          <div className="flex flex-wrap justify-center">
                            <img src="https://image.prepladder.com/content/8bc4sf51QkbvG0Y7JsH61639716695.svg" alt="carousel" />
                            <div>
                              <h1 className="login_login__right--slider-head__7CO1l">Video Lectures</h1>
                              <div className="login_login__right--slider-subhead__mMVEh">Engaging, conceptual videos to build lasting knowledge that can be revised easily anytime anywhere.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Add more slides as needed */}
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
                      Enter your mobile number to Sign up/Sign in to your Scholar Sense account
                    </div>
                    <div className="login_login__input__container">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
                        className="countryCode_CountryCode01_form__vOC5g"
                        autoComplete="off"
                        style={{ marginTop: 20 }}
                      />
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={Email}
                        onChange={handleEmailChange}
                        className="countryCode_CountryCode01_form__vOC5g"
                        autoComplete="off"
                        style={{ marginTop: 20 }}
                      />
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="countryCode_CountryCode01_form__vOC5g"
                        autoComplete="off"
                        style={{ marginTop: 20 }}
                      />
                      
                      <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
                        <input
                          type="text"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          placeholder="Mobile Number"
                          maxLength={10}
                          className="countryCode_CountryCode01_form__vOC5g"
                        />
                      </div>
                      
                      {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
                    </div>
                    <div className="login_login__confirm__OfI9w">
                      <p className="errMsg center mt1 mb1"></p>
                      <button
                        id="button-1"
                        disabled={isButtonDisabled}
                        type="submit"
                        className="login-btn width-100"
                      >
                        Continue
                      </button>
                    </div>
                    <div className="login_login__copywrite__J4lTn mt2 mob-display-none">
                      By signing up, you agree to
                      <span>
                        <a href="/termsConditions"> Terms & Conditions </a> and{' '}
                        <a href="/privacypolicy"> Privacy Policy </a>
                      </span>
                      of Scholar Sense  <a href="/Login"> Login </a>
                    </div>
                   
                  </div>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="recaptcha-container"></div>
      {isOTPRequested && (
          <OTPVerification
            onClose={handleOTPClose}
            phoneNumber={`+91${mobileNumber}`} 
            name={name} 
            email={Email}
          />
        )}
    </div>
  );
}
