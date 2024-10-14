import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import ClassListDropdown from "./ClassListDropdown";
import SubjectsDropdown from "./SubjectsDropdown";

export default function Header() {
  // State to manage the selected course ID
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  // State to manage login status and OTP verification
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  // Hook for navigation
  const navigate = useNavigate();

  // Check login status and OTP verification on component mount
  useEffect(() => {
    const savedLoginState = localStorage.getItem('isLoggedIn') === 'true';
    const savedOtpVerified = localStorage.getItem('isOtpVerified') === 'true';
    setIsLoggedIn(savedLoginState);
    setIsOtpVerified(savedOtpVerified);
  }, []);

  // Function to handle course selection
  const handleCourseSelect = (courseId) => {
    setSelectedCourseId(courseId); // Update the selected course ID
  };

  // Function to handle logout
  const handleLogout = () => {
    console.log("Logging out...");
    setIsLoggedIn(false);
    setIsOtpVerified(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isOtpVerified');
    navigate('/'); // Redirect to homepage after logout
  };

  // Debugging output
  console.log(`isLoggedIn: ${isLoggedIn}, isOtpVerified: ${isOtpVerified}`);

  return (
    <header id="header" className="header_header__tL1lM">
      <nav className="header_header-container__3ajcC">
        <div className="header_header-nav__0eIrF">
          {/* Left section */}
          <div className="header_header--left__aLGtb flex items-center">
            <div className="header_newHeader-menu__xrgdF">
              <img
                src="https://image.prepladder.com/content/YAhbUN2z7In1RPfT5wT11710307259.svg"
                alt="icon"
              />
            </div>
            <div className="header_logo__JcD_j">
              <a aria-label="logo" href="/">
                <picture>
                  <source
                    media="(min-width: 901px)"
                    src="asserts/images/scholar-bg.png"
                  />
                  <source
                    media="(max-width: 900px)"
                    src="asserts/images/scholar-bg.png"
                  />
                  <img
                    src="asserts/images/scholar-bg.png"
                    width="100%"
                    alt="logo"
                    height="100%"
                  />
                </picture>
              </a>
            </div>
            {/* Dropdown for selecting courses */}
            <ClassListDropdown onCourseSelect={handleCourseSelect} />
          </div>
          {/* Right section */}
          <div className="header_header--right__YQi_b">
            <div className="header_header__menu-desk__38uIL">
              <ul className="header_list-icon__e3du5">
                {/* List items for various links */}
                <li>
                  <SubjectsDropdown selectedCourseId={selectedCourseId} />
                </li>
                <li className="header_newHeader-icon__mrX27 flex items-center">
                  <a href="/Faculty">Faculty</a>
                </li>
                <li className="header_newHeader-icon__mrX27 flex items-center">
                  <a target="blank" href="/Blog">Blog</a>
                </li>
                <li className="header_newHeader-icon__mrX27 flex items-center">
                  <a target="blank" href="/Plan">Plans</a>
                </li>
                <li className="header_header-contactMain__X3NoI">
                  <a
                    target="blank"
                    icon="https://image.prepladder.com/content/GFH3I2o28drXjfM4a9PZ1678689840.png"
                    href="/Contact"
                  >
                    Contact us
                  </a>
                  <div className="header_header-contactInner__Lh3wa">
                    <div className="header_header-contact__jcMMe">
                      <div className="header_header-contactList__7_6ts">
                        <span>For sales</span>
                        <a href="tel:+91-7026233333">+91-7026233333</a>
                      </div>
                      <div className="header_header-contactList__7_6ts">
                        <span>For support</span>
                        <a href="tel:+91-9062566666">+91-9062566666</a>
                      </div>
                    </div>
                  </div>
                </li>
                {/* Conditionally render based on login status and OTP verification */}
                <li>
                  {!isLoggedIn || !isOtpVerified ? (
                    <Link className="header_headerBtn__WRwZ9 btn-1 button-default" to="/signup">
                      Apply Now
                    </Link>
                  ) : (
                    <div className="header_list-user__FRW_L">
                      <div>
                        <img
                          src="https://image.prepladder.com/content/orlrjqwD41EK7qwA01R21604491348.jpg"
                          loading="lazy"
                          decoding="async"
                          alt="User profile"
                          className="header_profile-image"
                        />
                      </div>
                      <div className="header_list-user-dropdown__eGJSL">
                        <div className="flex items-center pb-1">
                          <a href="/profile">
                            <div>
                              <img
                                src="https://image.prepladder.com/content/orlrjqwD41EK7qwA01R21604491348.jpg"
                                loading="lazy"
                                decoding="async"
                                alt="User profile"
                              />
                            </div>
                            <div className="header_list-user-content__pbXhF">
                              <h4>ranu</h4>
                              <p>8527866123</p>
                            </div>
                          </a>
                        </div>
                        <ul id="list-user-dropdown-main">
                          <li><a href="/profile">Profile</a></li>
                          <li><a href="/settingHome">Prepare</a></li>
                          <li><a href="/settings">Settings</a></li>
                          <li className="header_log-out__RfsQ4">
                            <div onClick={handleLogout}>Log out</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
