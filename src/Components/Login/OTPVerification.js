import React, { useState, useEffect, useRef } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../../firebase'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';
import Edit_Pdetails from '../../Components/Dasboard_Side_Menu/Profile /Edit_Pdetails'; // Adjust the path as necessary

const OTPVerification = ({ phoneNumber, onClose }) => {
  const [otp, setOtp] = useState('');
  const [phone, setPhone] = useState(phoneNumber);
  const [isEditing, setIsEditing] = useState(false);
  const [timer, setTimer] = useState(93);
  const [showResendOptions, setShowResendOptions] = useState(false);
  const [error, setError] = useState('');
  const [showEditDetailsModal, setShowEditDetailsModal] = useState(false);
  const recaptchaContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (recaptchaContainerRef.current && !window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, recaptchaContainerRef.current, {
        size: 'invisible',
        callback: handleResendClick,
        'expired-callback': () => console.log('reCAPTCHA expired.')
      });

      window.recaptchaVerifier.render().then(widgetId => {
        window.recaptchaWidgetId = widgetId;
      });
    }

    const countdown = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(countdown);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleOtpChange = e => setOtp(e.target.value);

  const handlePhoneChange = e => setPhone(e.target.value);

  const toggleEditPhone = () => setIsEditing(!isEditing);

  const handleSubmit = async e => {
    e.preventDefault();
    const confirmationResult = window.confirmationResult;

    try {
      const credential = PhoneAuthProvider.credential(confirmationResult.verificationId, otp);
      await signInWithCredential(auth, credential);
      // Proceed after successful OTP verification
      setShowEditDetailsModal(true);
      setError('');
      
    } catch (error) {
      console.error("OTP verification failed", error);
      setError("Incorrect OTP. Please try again.");
    }
  };

  const handleResendClick = async () => {
    if (timer === 0) { // Only resend OTP if the timer has reached zero
      setShowResendOptions(true);
      const appVerifier = window.recaptchaVerifier;
  
      try {
        const confirmationResult = await signInWithPhoneNumber(auth, `+91${phone}`, appVerifier);
        window.confirmationResult = confirmationResult;
        setTimer(93); // Reset the timer to 93 seconds
        setError('');
      } catch (error) {
        console.error("Failed to resend OTP", error);
        setError("Failed to resend OTP. Please try again.");
      }
    } else {
      setError("Please wait until the timer runs out before resending OTP.");
    }
  };

  const closeModal = () => onClose();

  const handleContactUsClick = () => navigate('/contact');

  if (showEditDetailsModal) {
    return <Edit_Pdetails onClose={() => setShowEditDetailsModal(false)} />;
  }

  return (
    <div className="login_logins_modal__XJidY">
      <div className="login_logins_modal-inner__cn_vk overflow-auto darkLoginChange" style={{ transition: 'right 400ms ease 0s', right: '0%', position: 'relative' }}>
        <div className="login-heights">
          <form onSubmit={handleSubmit}>
            <div>
              <img
                src="https://image.prepladder.com/content/pr6inOx38XCa0J65vmig1640166633.svg"
                alt="icon"
                className="login_logins_cross__UDtuQ"
                onClick={closeModal}
                style={{ cursor: 'pointer' }}
              />
              <div className="login_login__para__mwy8k">
                <h4>Verify your mobile number</h4>
                <div className="mb3">
                  <p>An OTP has been sent to your mobile number</p>
                </div>
                <div>
                  <div className="countryCode_CountryCode01__poc7N">
                    <div className="countryCode_CountryCode01_inner__Tmkwa">
                      <div className="countryCode_formdis__wbAJV countryCode_CountryCode01_form__vOC5g marketing-bg" method="post">
                        <div className="countryCode_codeLabel__d1w4a flex items-center">
                          <div className="countryCode_countryFlags__StAQb">
                            <img src="https://image.prepladder.com/content/Pkkswnm7xW5auWwyhDIX1617863781.png" alt="" />
                          </div>
                          <span>+91</span>
                          <img className="footernew_codeLabel_img__PQ1xX" src="https://image.prepladder.com/content/iIIogvP6IqhIeimkMrzK1655805750.svg" alt="icon" style={{ maxWidth: '1.7rem', marginLeft: '0.6rem' }} />
                        </div>
                        <div className="countryCode_codeInput__p44pH">
                          <input
                            maxLength="10"
                            type="text"
                            name="phone"
                            placeholder="Enter Phone Number"
                            autoComplete="off"
                            value={phone}
                            onChange={handlePhoneChange}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="countryCode_no_edit__V40Bl" onClick={toggleEditPhone}>
                          {isEditing ? 'Save' : 'Edit'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="login_logins_input__V084Y login_logins_focus__6Lrcm">
                  <input
                    type="tel"
                    name="otp_mob"
                    placeholder="One time password"
                    value={otp}
                    onChange={handleOtpChange}
                  />
                </div>
                {error && <p className="errMsg" style={{ textAlign: 'left', color: 'red' }}>{error}</p>}
                <div className="login_login__copywrite__J4lTn mt2 mb2 mob-display-none">
                  Having trouble? <span style={{ marginLeft: '10px' }}><button className="" type="button" onClick={handleContactUsClick}>Contact Us</button></span>
                </div>
              </div>
              <div className="flex justify-between mb2 width-100">
                <div className="login_login__confirm-btn__azGjj login_logins_btn-time__tM8YM" onClick={handleResendClick}>
                  Resend OTP in {formatTime(timer)}
                </div>
              </div>
              {showResendOptions && (
                <div className="flex justify-between mb2 width-100">
                  <div className="login_login__receive__1vlQV">
                    <h4>Didn't receive OTP? Receive via</h4>
                    <div className="flex">
                      <button type="button" className="btn width-100 mr16 btn-white-borderGreyDesk flex items-center justify-center">
                        <img src="https://image.prepladder.com/content/SFcvB74pDaPbgrWSYZ4t1660046745.svg" alt="img" />
                        <div style={{ paddingLeft: '1.5rem' }}> SMS </div>
                      </button>
                      <button type="button" className="btn width-100 btn-white-borderGreyDesk flex items-center justify-center">
                        <img src="https://image.prepladder.com/content/qOxisRUIuhqx1ixkSPbA1660046807.svg" alt="img" />
                        <div style={{ paddingLeft: '1.5rem' }}> Whatsapp </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex justify-between mb2">
                <button disabled={otp.length !== 6} type="submit" className="login-btn login-btn">Verify</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div ref={recaptchaContainerRef} id="recaptcha-container"></div>
      <div className="login_logins-bg__k5jEO"></div>
    </div>
  );
};

export default OTPVerification;
