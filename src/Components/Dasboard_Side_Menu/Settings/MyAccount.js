import React from "react";
import HeaderAfterLogin from "../../HeaderAfterLogin";
import SettingSidebar from "../../SettingSidebar";

export default function MyAccount() {
    const handleButtonClick = () => {
        window.location.href = '/profile'; // Replace with the actual URL or path you want to navigate to
      };

      const handleItemClick = () => {
        window.location.href = '/contact'; // Replace with the actual URL or path you want to navigate to
      };
      const handleApplyCouponClick = () => {
        // Replace the URL with the desired location to open
        window.location.href = '/Coupon';
      };
    
 
  const trophies = [
    {
      imgSrc:
        "https://image.prepladder.com/content/NqyfWe4TA4JEuB7q28BQ1636709518.png",
      title: "Anatomy",
      description: "Unlock 90% of QBank",
    },
    {
      imgSrc:
        "https://image.prepladder.com/content/j33GjwqmoIAlLzbExIjn1636709625.png",
      title: "Physiology",
      description: "Unlock 90% of QBank",
    },
    {
      imgSrc:
        "https://image.prepladder.com/content/b5IqnD8DqCZrII4BiWIO1636709870.png",
      title: "Biochemistry",
      description: "Unlock 90% of QBank",
    },
  ];

  const stars = [
    {
      imgSrc:
        "https://image.prepladder.com/content/L2Q6EVs2sFU0cIAO4Y5T1636977528.png",
      title: "Blue",
      description: "Unlock 10% QBank",
    },
    {
      imgSrc:
        "https://image.prepladder.com/content/L2Q6EVs2sFU0cIAO4Y5T1636977528.png",
      title: "Purple",
      description: "Unlock 20% QBank",
    },
    {
      imgSrc:
        "https://image.prepladder.com/content/L2Q6EVs2sFU0cIAO4Y5T1636977528.png",
      title: "Pink",
      description: "Unlock 35% QBank",
    },
  ];

  return (
    <div>
      <HeaderAfterLogin />

      <div className="dash-container flex dash-main-layout video-dash-container">
        <SettingSidebar />
        <div
          id="right_section"
          class=" applayout_section__right__5EPWR  video-section false"
        >
          <div class="ExperienceSticky items-center justify-between">
            <h4>For better experience switch to the app.</h4>
            <div className="flex items-center flex-none">
              <button
                className="btn-custom flex-none"
                style={{ padding: "8px 16px" }}
              >
                Download
              </button>
              <div className="ExperienceSticky-cross">
                <img
                  src="https://image.prepladder.com/content/wd5SX8TSh6x03lCU5FQW1683285998.png"
                  alt="cross icon"
                />
              </div>
            </div>
          </div>
          <div className="dash-white-box flex p-24 items-center">
            <div className="my-profile_myProfile-sub-icon__KTwvd mr-16">
              <img
                src="https://image.prepladder.com/content/HK3GL5AVodzVXcN8JLfN1637146517.png"
                alt="img"
                className="width-40"
              />
            </div>
            <div className="my-profile_myProfile-sub-detail__YAZpx">
              <h3>Medical PG</h3>
              <p>Free Plan</p>
            </div>
            <div className="my-profile_myProfile-sub-btn__wbRSm mL-auto">
              <button type="submit" className="btn btn-border" onClick={handleButtonClick}>
                Profile
              </button>
            </div>
          </div>
          <div className="my-profile_myProfile-profile__71dlP mt-24 p-24 dash-margin-mob-top flex cursor-pointer">
            <div className="my-profile_myProfile-profile-left__fP_c8">
              <h4>Complete your profile</h4>
              <p>
                To give you personalised learning experience we recommend you to
                complete your profile.
              </p>
              <div className="my-profile_myProfile-profileBar__ucHL4 flex items-center">
                <div className="my-profile_myProfile-profile-bar__HXWhK">
                  <span style={{ width: "67%" }}></span>
                </div>
                <div className="my-profile_myProfile-profileContent__xTtqV">
                  67%
                </div>
              </div>
            </div>
            <div className="my-profile_myProfile-profile-img__3gqCI">
              <img
                src="https://image.prepladder.com/content/e4Ersxkgm1qTTmeZKU8r1659427529.svg"
                alt="img"
              />
            </div>
          </div>
          <div className="cards_feature__6wdu_ mt24 mb3">
            <h4>Quick Prepare</h4>
            <div className="flex justify-between">
              <div className="cards_feature-main__by47G">
                <ul>
                  <li>
                    <div className="cards_featureCard__lR6M3 dash-white-box cursor-pointer p-24 mt-2 dash-margin-mob-top"
                    onClick={handleApplyCouponClick}>
                      <div className="flex items-center">
                        <img
                          src="https://image.prepladder.com/content/1ccuNypJgvwk51N1KmjW1701859118.png"
                          alt="icon"
                        />
                        <div className="cards_featureCard-head___vmJW">
                          Apply Coupon
                          <div className="dash_title-subhead p-0"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cards_featureCard__lR6M3 dash-white-box cursor-pointer p-24 mt-2 dash-margin-mob-top">
                      <div className="flex items-center">
                        <img
                          src="https://image.prepladder.com/content/ptRoHNN9VecWXXf9mmyW1637558282.png"
                          alt="icon"
                        />
                        <div className="cards_featureCard-head___vmJW">
                          View plans
                          <div className="dash_title-subhead p-0"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cards_featureCard__lR6M3 dash-white-box cursor-pointer p-24 mt-2 dash-margin-mob-top">
                      <div className="flex items-center">
                        <img
                          src="https://image.prepladder.com/content/jbqxxWABKdrjFaI4cuIO1718373505.png"
                          alt="icon"
                        />
                        <div className="cards_featureCard-head___vmJW">
                          Marathon pass
                          <div className="dash_title-subhead p-0"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cards_featureCard__lR6M3 dash-white-box cursor-pointer p-24 mt-2 dash-margin-mob-top">
                      <div className="flex items-center">
                        <img
                          src="https://image.prepladder.com/content/tZQtzH2l8TY8LRgaXq1y1703055327.png"
                          alt="icon"
                        />
                        <div className="cards_featureCard-head___vmJW">
                          ScholarSenseAI
                          <div className="dash_title-subhead p-0"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cards_featureCard__lR6M3 dash-white-box cursor-pointer p-24 mt-2 dash-margin-mob-top">
                      <div className="flex items-center">
                        <img
                          src="https://image.prepladder.com/content/4vnxEdzcHleXOVb2AbCt1652787747.png"
                          alt="icon"
                        />
                        <div className="cards_featureCard-head___vmJW">
                          My Transcripts
                          <div className="dash_title-subhead p-0"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li onClick={handleItemClick}>
        <div className="cards_featureCard__lR6M3 dash-white-box cursor-pointer p-24 mt-2 dash-margin-mob-top">
          <div className="flex items-center">
            <img
              src="https://image.prepladder.com/content/yFrMy7MhrcGNEJPoA3o01637556244.png"
              alt="icon"
            />
            <div className="cards_featureCard-head___vmJW">
              Contact Us
              <div className="dash_title-subhead p-0"></div>
            </div>
          </div>
        </div>
      </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="dash-white-box p-16 mb24 dash-margin-mob">
            <div className="rightbar_rightbar-quiz-main__y_FPq flex justify-between">
              <div className="rightbar_rightbar-quiz__0XqdC">
                <h2 className="mb1">
                  <span style={{ fontFamily: "Averta Std" }}>
                    <span>
                      <span>
                        <span>
                          <span style={{ color: "#000000" }}>
                            <strong>
                              <span>Scholar Sense 6.0 Prices Rising Soon</span>
                            </strong>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </h2>
                <p>
                  <span style={{ fontFamily: "Averta Std" }}>
                    <span>
                      <span>
                        <span>
                          <span style={{ color: "#000000" }}>
                            <span>
                              Only 200 slots left. But, we’re saving one for
                              you!&nbsp;
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <button className="btn-dash">Enrol Now</button>
              </div>
              <img
                src="https://image.prepladder.com/content/3Zi5sPVPLvquBokm2N4Z1706247750.png"
                alt="img"
              />
            </div>
          </div>
          <div>
            <div className="my-profile_myProfile-head__Ewxqj flex justify-between items-center">
              <h2>Streaks</h2>
              <button type="button">
                <img
                  src="https://image.prepladder.com/content/ZEBZt949z1TLAxjYfE8K1709890428.svg"
                  alt="img"
                  className="darkIcon"
                />
              </button>
            </div>
            <div>
              <div className="streaksSec mt-24">
                <ul className="flex">
                  <li>
                    <div className="streaksSec-box dash-white-box">
                      <h3>CURRENT</h3>
                      <div className="streaksSec-value">0 day</div>
                    </div>
                  </li>
                  <li>
                    <div className="streaksSec-box dash-white-box">
                      <h3>LONGEST</h3>
                      <div className="streaksSec-value color-yellow">0 day</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex d-sm-block">
            <div className="dash-white-box p-24 mt-24">
              <div className="calender_calendar__KVRly mt2">
                <div className="calender_calendar-head__I78M_ flex justify-between items-center">
                  <button title="PREV">
                    <img
                      src="https://image.prepladder.com/content/XnDKc5sYUEsjGJKONp9l1639374848.svg"
                      alt="img"
                      className="darkIcon"
                    />
                  </button>
                  <div className="calender_calender-time__ePkE6">
                    26 May - 22 Jun
                  </div>
                </div>
                <div className="calender_calendar-body__u79jl">
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>S</th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Repeat these rows as needed */}
                      <tr>
                        <td>
                          <span>26 - 1 Jun</span>
                        </td>
                        {[...Array(7)].map((_, index) => (
                          <td key={index} className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-1 -1 34 34"
                            >
                              <circle
                                cx="16"
                                cy="16"
                                r="15.9155"
                                className="calender_progress-bar__background__2AozS"
                                stroke="#e5effe"
                              ></circle>
                              <circle
                                cx="16"
                                cy="16"
                                r="15.9155"
                                className="calender_progress-bar__progress__dgmmr"
                                stroke="#EB5757"
                                style={{ strokeDashoffset: "100px" }}
                              ></circle>
                            </svg>
                          </td>
                        ))}
                      </tr>
                      {/* Repeat the row structure above for each week */}
                      <tr>
                        <td>
                          <strong>This Week</strong>
                        </td>
                        {[...Array(7)].map((_, index) => (
                          <td key={index} className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-1 -1 34 34"
                            >
                              <circle
                                cx="16"
                                cy="16"
                                r="15.9155"
                                className="calender_progress-bar__background__2AozS"
                                stroke="#e5effe"
                              ></circle>
                              <circle
                                cx="16"
                                cy="16"
                                r="15.9155"
                                className="calender_progress-bar__progress__dgmmr"
                                stroke="#FFAD3B"
                                style={{ strokeDashoffset: "100px" }}
                              ></circle>
                            </svg>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="calender_calendar-foot__dAEvd flex items-center justify-center">
                  <img
                    src="https://image.prepladder.com/content/9YBnjerOrwwz334iAr5w1662025182.png"
                    alt="img"
                    className="darkIcon width-24"
                  />
                  View learning timeline
                </div>
              </div>
            </div>
            <div className="my-profile_myProfile-progress__KQxYp dash-white-box p-24 mt-24 dash-margin-mob-top flex1 ml3 ml-sm-none">
              <div className="my-profile_myProfile-head__Ewxqj flex justify-between items-center">
                <h2>Learning progress</h2>
                <p>Today</p>
              </div>
              <div>
                <ul>
                  <li>
                    <div className="my-profile_moduleCompleted__if0pC">
                      <h3>MODULE COMPLETED</h3>
                      <div className="my-profile_myProfile-progress-value__lDo8y">
                        0
                      </div>
                      <div className="my-profile_myProfile-progress-icon__4jepQ">
                        <img
                          src="https://image.prepladder.com/content/0mh9g7z4c4bvjh6rOYut1662631453.png"
                          alt="img"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="my-profile_myProfile-progress-list__D4ouh">
                      <div className="my-profile_myProfile-progress-icon__4jepQ">
                        <img
                          src="https://image.prepladder.com/content/s8ey7FYLyrMYiwsTrLPw1662631962.png"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h3>VIDEO WATCH TIME</h3>
                        <div className="my-profile_myProfile-progress-value__lDo8y">
                          0 hr
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="my-profile_myProfile-progress-list__D4ouh">
                      <div className="my-profile_myProfile-progress-icon__4jepQ">
                        <img
                          src="https://image.prepladder.com/content/495XULlBSm82vno0YCSz1662632124.png"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h3>QUES ATTEMPTED</h3>
                        <div className="my-profile_myProfile-progress-value__lDo8y">
                          0
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="my-profile_myProfile-progress-list__D4ouh">
                      <div className="my-profile_myProfile-progress-icon__4jepQ">
                        <img
                          src="https://image.prepladder.com/content/sJCtTrDtPmXc3YoM9oIK1662632038.png"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h3>TESTS ATTEMPTED</h3>
                        <div className="my-profile_myProfile-progress-value__lDo8y">
                          0
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="dash-white-box p-24 mt-24 dash-margin-mob-top"
            id="stats"
          >
            <div className="my-profile_myProfile-head__Ewxqj flex justify-between items-center">
              <h2>Stats overview</h2>
              <button type="button">
                <img
                  src="https://image.prepladder.com/content/ZEBZt949z1TLAxjYfE8K1709890428.svg"
                  alt="img"
                  className="darkIcon"
                />
              </button>
            </div>
            <ul className="commanPageLayout_section-listing__zkKiI mt-24">
              {[
                "Overall",
                "Anatomy",
                "Physiology",
                "Biochemistry",
                "Pathology",
                "Pharmacology",
                "Microbiology",
                "Forensic Medicine",
                "PSM",
                "ENT",
                "Ophthalmology",
                "Gynaecology & Obstetrics",
                "Pediatrics",
                "Surgery",
                "Medicine",
                "Radiology",
                "Anaesthesia",
                "Orthopaedics",
                "Psychiatry",
                "Dermatology",
              ].map((item, index) => (
                <li
                  key={index}
                  id={`statsListCour${index}`}
                  className={
                    index === 0 ? "commanPageLayout_listing_active__VYYy_" : ""
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
            <div>
              <div className="statsList flex items-center justify-between mt24 flex1 d-sm-block">
                <div className="statsList-content">
                  <ul className="flex items-center">
                    <li>
                      <div className="statsList-value">0</div>
                      <div className="statsList-title">Video completed</div>
                    </li>
                    <li>
                      <div className="statsList-value">0</div>
                      <div className="statsList-title">Test completed</div>
                    </li>
                  </ul>
                </div>
                <div className="statsList-progressBar center">
                  <div className="percent">
                    <svg
                      viewBox="0 0 100 100"
                      data-test-id="CircularProgressbar"
                    >
                      <path
                        d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
                        strokeWidth="9"
                        fillOpacity="0"
                        stroke="rgb(238, 238, 238)"
                        strokeDasharray="330px, 330px"
                        strokeDashoffset="100"
                      ></path>
                      <path
                        d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
                        strokeWidth="9"
                        fillOpacity="0"
                        stroke="#2D81F7"
                        strokeDasharray="330px, 330px"
                        strokeDashoffset="330"
                      ></path>
                    </svg>
                    <div className="num">
                      <strong>0</strong>
                      <br /> of 879
                    </div>
                  </div>
                  <div className="statsList-progressBar-title">
                    QBANK &nbsp;COMPLETED
                  </div>
                </div>
              </div>
              <ul className="my-profile_myProfile-stats-list__gpIER mt16">
                <li className="my-profile_myProfile-stats-list-item__Rf4lo">
                  <div className="flex items-center">
                    <div className="mr-16">
                      <img
                        src="https://image.prepladder.com/content/neVRJnbqWEnnuKuh8VXB1709890907.svg"
                        alt="img"
                        className="width-40"
                      />
                    </div>
                    <div>
                      <h3>VIDEOS WATCH TIME</h3>
                      <div className="my-profile_statsValue___quOf">0 hr</div>
                    </div>
                    <div className="ml-auto">
                      <img
                        src="https://image.prepladder.com/content/lJvjKisH08Rh6TpgYUjy1709883463.svg"
                        alt="img"
                        className="width-24 darkIcon"
                      />
                    </div>
                  </div>
                </li>
                <li className="my-profile_myProfile-stats-list-item__Rf4lo">
                  <div className="flex items-center flex-sm-wrap">
                    <div className="mr-16 width-40">
                      <img
                        src="https://image.prepladder.com/content/O6m3KWX5KEFzHUEoIvfm1637565471.png"
                        alt="img"
                        className="width-40"
                      />
                    </div>
                    <div>
                      <h3>QUESTIONS ATTEMPTED</h3>
                      <div className="my-profile_statsValue___quOf">0</div>
                    </div>
                    <div className="my-profile_myProfile-stats-arrow__TQc8n ml3 ml-sm-auto">
                      <img
                        src="https://image.prepladder.com/content/lJvjKisH08Rh6TpgYUjy1709883463.svg"
                        alt="img"
                        className="darkIcon width-24"
                      />
                    </div>
                    <div className="my-profile_attempStatus__6MZ9w">
                      <ul className="flex items-center center">
                        <li>
                          <h3>CORRECT</h3>
                          <p>0</p>
                        </li>
                        <li>
                          <h3>INCORRECT</h3>
                          <p>0</p>
                        </li>
                        <li>
                          <h3>AVG. TIME</h3>
                          <p>0 sec / ques</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="my-profile_myProfile-stats-list-item__Rf4lo">
                  <div className="flex items-center flex-sm-wrap">
                    <div className="mr-16">
                      <img
                        src="https://image.prepladder.com/content/uPJohbYg6UfQKSQCsy621637565691.png"
                        alt="img"
                        className="width-40"
                      />
                    </div>
                    <div>
                      <h3>OVERALL TEST PERFORMANCE</h3>
                      <div className="my-profile_statsValue___quOf">0 %</div>
                    </div>
                    <div className="my-profile_myProfile-stats-arrow__TQc8n ml3 ml-sm-auto">
                      <img
                        src="https://image.prepladder.com/content/lJvjKisH08Rh6TpgYUjy1709883463.svg"
                        alt="img"
                        className="darkIcon width-24"
                      />
                    </div>
                    <div className="my-profile_attempStatus__6MZ9w">
                      <ul className="flex items-center center">
                        <li>
                          <h3>Mock Tests</h3>
                          <p>0</p>
                        </li>
                        <li>
                          <h3>Discussion</h3>
                          <p>0</p>
                        </li>
                        <li>
                          <h3>Past Exams</h3>
                          <p>0</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="dash-white-box p-24 mt-24 overflow-hidden dash-margin-mob-top">
            <div className="my-profile_myProfile-head__Ewxqj flex justify-between items-center">
              <h2>Trophies earned</h2>
            </div>
            <ul className="my-profile_myProfile-trophies-list__QFjID mt-24 flex center">
              {trophies.map((trophy, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="my-profile_myProfile-trophies-img__o2oCC my-profile_trophies-date__hVli0">
                    <img src={trophy.imgSrc} alt="img" />
                    <div className="my-profile_trophies-date-text__gw_hk"></div>
                  </div>
                  <h3>{trophy.title}</h3>
                  <p>{trophy.description}</p>
                </li>
              ))}
            </ul>
            <div className="my-profile_myProfile-bottom__v8bQO flex items-center justify-center">
              See All
              <img
                src="https://image.prepladder.com/content/FPon2prYM1KvKek6HoCE1639120574.svg"
                alt="img"
                className="darkIcon"
              />
            </div>
          </div>
          <div className="dash-white-box p-24 mt-24 overflow-hidden dash-margin-mob-top">
            <div className="my-profile_myProfile-head__Ewxqj flex justify-between items-center">
              <h2>Stars unlocked</h2>
            </div>
            <ul className="my-profile_myProfile-trophies-list__QFjID mt-24 flex center">
              {stars.map((star, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="my-profile_myProfile-trophies-img__o2oCC my-profile_trophies-date__hVli0">
                    <img src={star.imgSrc} alt="img" />
                    <div className="my-profile_trophies-date-text__gw_hk"></div>
                  </div>
                  <h3>{star.title}</h3>
                  <p>{star.description}</p>
                </li>
              ))}
            </ul>
            <div className="my-profile_myProfile-bottom__v8bQO flex items-center justify-center">
              See All
              <img
                src="https://image.prepladder.com/content/FPon2prYM1KvKek6HoCE1639120574.svg"
                alt="img"
                className="darkIcon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
