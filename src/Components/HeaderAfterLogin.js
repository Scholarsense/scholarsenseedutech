import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

export default function HeaderAfterLogin() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDrawerOpen1, setIsDrawerOpen1] = useState(false);
    const [currentComponent, setCurrentComponent] = useState('Profile');

    const navigate = useNavigate(); // Initialize useNavigate hook

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const toggleDrawer1 = () => {
        setIsDrawerOpen1(!isDrawerOpen1);
    };

    const handleComponentChange = (component) => {
        switch (component) {
          case 'Profile':
            navigate('/profile');
            break;
          case 'Settings':
            navigate('/settings');
            break;
          default:
            console.log('Unknown component');
        }
      };

    // Function to handle logout
    const handleLogout = () => {
        console.log("Logging out...");
        // Clear user session or any relevant data
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('isOtpVerified');
        // Redirect to homepage
        navigate('/Login');
    };

    return (
        <div>
            <header id="dash-header" className="appheader_top-nav__N_jWT flex dash-mob-space">
                <div className="dash-container flex flex-wrap justify-between">
                    <div className="flex items-center">
                        <div className="appheader_dash-header-logo__Xmkjg cursor-pointer">
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
                        </div>
                        <div
                            className="appheader_dash-header-course__d_rg0 flex items-center cursor-pointer"
                            onClick={toggleDrawer1}
                        >
                            <div>
                                <span>Medical PG <img src="https://image.prepladder.com/content/eQflvSrC5xINWOOEHmt91709884028.svg" alt="icon" className="darkIcon" /></span>
                                <div className="appheader_validTill__u_lmH"> Free Plan</div>
                            </div>
                        </div>
                    </div>
                    {isDrawerOpen1 && (
                        <div className="appheader_headDrawer__l9tkA">
                            <div className="appheader_myGoals__J_7PD">
                                <div className="appheader_myGoals-head__jqAbU flex justify-between">
                                    <h2>My goals</h2>
                                </div>
                                <ul className="appheader_manageSub__BvMsy">
                                    <li className="">
                                        <div className="appheader_manageSub-icon__dSGEe">
                                            <img
                                                src="https://image.prepladder.com/content/HK3GL5AVodzVXcN8JLfN1637146517.png"
                                                className="width-40"
                                                alt="icon"
                                            />
                                        </div>
                                        <div className="appheader_manageSub-text__ioVqC">
                                            Medical PG
                                            <div className="appheader_manageSub-free__WP_l1">Free Plan</div>
                                        </div>
                                        <div className="appheader_manageSub-btn__ein5a">
                                            <img
                                                src="https://image.prepladder.com/content/ThZjcE2TCqa6HQHJLOyb1649059332.png"
                                                alt="icon"
                                            />
                                        </div>
                                    </li>
                                </ul>
                                <button className="width-100">
                                    <div className="appheader_addGoal__W8eOE flex items-center">
                                        <img
                                            src="https://image.prepladder.com/content/OW9wNLFG6VvHX1gblrTK1709884618.svg"
                                            alt="Add goal icon"
                                            className="mr1 darkIcon"
                                        />
                                        Add another goal
                                    </div>
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="appheader_top-nav__right__UarG6 flex items-center ">
                        <div className="appheader_top_search-position__mhGRF">
                            <button className="search-icon flex"> <img src="https://image.prepladder.com/content/KTGkz47N1hjcNQF0PIJk1681280680.png" alt="icon" className="darkIcon width-40" /></button>
                        </div>
                        <div className="rightDrawer_notification__ogZ0X flex">
                            <img src="https://image.prepladder.com/content/mnKtMn0AdFPGn6KGf3VP1681286436.png" alt="icon" className="darkIcon width-40" />
                            <span className=""></span>
                        </div>
                        <div className="appheader_top-nav__user__BE1KE">
                            <img
                                src="https://image.prepladder.com/content/orlrjqwD41EK7qwA01R21604491348.jpg"
                                alt="User Icon"
                                className="appheader_userIcon__CL4in"
                                onClick={toggleDrawer}
                            />
                            {isDrawerOpen && (
                                <div className="appheader_headDrawer__l9tkA">
                                    <div className="appheader_profile-drawer____cuR">
                                        <ul className="appheader_profile-drawer-list__N0lQX">
                                            <li onClick={() => handleComponentChange('Profile')}>
                                                <img
                                                    src="https://image.prepladder.com/content/1veTaXtZNhNcjwLg5vlG1640255311.svg"
                                                    alt="Profile"
                                                />
                                                Profile
                                            </li>
                                            <li onClick={() => handleComponentChange('Settings')}>
                                                <img
                                                    src="https://image.prepladder.com/content/gv54526vjjFGfNiubmdC1640354090.svg"
                                                    alt="Settings"
                                                />
                                                Settings
                                            </li>
                                            <li>
                                                <img
                                                    src="https://image.prepladder.com/content/RLXITQPzgYVjcrvPpNaa1640255432.svg"
                                                    alt="Dark mode"
                                                />
                                                Dark mode
                                                <div className="toggle mL-auto flex">
                                                    <input type="checkbox" id="toggle" />
                                                    <label htmlFor="toggle" className="toggle_btn"></label>
                                                </div>
                                            </li>
                                            <li onClick={handleLogout}>
                                                <img
                                                    src="https://image.prepladder.com/content/7TXO0Y8EU7u4twkDUQiG1640255865.svg"
                                                    alt="Sign out"
                                                />
                                                Log out
                                            </li>
                                        </ul>
                                        <div className="appheader_usefulLink__g81Iz">
                                            <ul>
                                                <li>
                                                    <a target="_blank" rel="noopener noreferrer" href="/terms">
                                                        Terms & Conditions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="/privacypolicy"
                                                    >
                                                        Privacy Policy
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank" rel="noopener noreferrer" href="/aboutus">
                                                        About
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="/neet-pg-study-material"
                                                    >
                                                        Blog
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="appheader_socialIcons__c6jB4">
                                            <ul className="flex">
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://www.facebook.com/medical.pg.entrance.prepladder/"
                                                    >
                                                        <img
                                                            src="https://image.prepladder.com/content/L1TE42Pa1v5TdfTJG0aJ1640353157.svg"
                                                            alt="Facebook"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://www.youtube.com/channel/UCdbMxSVAgPENqhYVeYkAA2w/featured"
                                                    >
                                                        <img
                                                            src="https://image.prepladder.com/content/jG9WKH3EwBdBtWp9oWYv1640353203.svg"
                                                            alt="YouTube"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://www.instagram.com/prepladder_med/"
                                                    >
                                                        <img
                                                            src="https://image.prepladder.com/content/NNcfOoEIxiZQZJYziohy1640353233.svg"
                                                            alt="Instagram"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://in.linkedin.com/company/prepladder"
                                                    >
                                                        <img
                                                            src="https://image.prepladder.com/content/hwb3ENzX1pgdamW7Beo31640353258.svg"
                                                            alt="LinkedIn"
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            <div className="dash-description flex justify-center flex-wrap items-center">
                <p>Give your learning an extra edge with our premium content, curated exclusively for you!</p>
                <a className="enroll-link" href="/ViewPlan">Enrol now</a>
            </div>
        </div>
    );
}
