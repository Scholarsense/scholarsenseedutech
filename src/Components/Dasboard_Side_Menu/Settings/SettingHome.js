import React from "react";
import HeaderAfterLogin from "../../HeaderAfterLogin";
import SettingSidebar from "../../SettingSidebar";
import { Link } from 'react-router-dom';

export default function SettingHome() {
  const handleClick = () => {
    window.location.href = '/PlanDetails';; 
  };
  
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
          <div class="newHome-mains ">
            <div className="dash-mob-space">
              <div className="homepage_newHome-banner__FztR7 homepage_newHome-banner-evening__eMGlv mb32 dashnew-margin-mob">
                <h4>Good evening, ranu</h4>
                <p>Let’s guide you through your learning process</p>
              </div>
            </div>
            <div>
              <div className="dash-white-box newHome-feature slider-change feature-slider slider-changess p32 mb62 newHome-featured-img dashnew-margin-mob" onClick={handleClick}>
                <div className="dash-heading pb32">Featured</div>
                <div className="slick-slider slick-initialized">
                  <div className="slick-list">
                    <div
                      className="slick-track"
                      style={{
                        width: "689px",
                        opacity: 1,
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <div
                        data-index="0"
                        className="slick-slide slick-active slick-current"
                        tabIndex="-1"
                        aria-hidden="false"
                        style={{ outline: "none", width: "689px" }}
                      >
                        <div>
                          <div
                            tabIndex="-1"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              src="https://image.prepladder.com/content/QobsTeSIWKY9jxEjiIuX1716217032.png"
                              alt="icon"
                            />
                            <h4>Become a premium user now!</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="dash-mob-space">
                <div className="homepage_newHome-achieve__USRH2 cursor-pointer mb32 dashnew-margin-mob">
                  <h4>Pharmacology Marathon by Dr. Ankit Kumar</h4>
                  <button className="btn-book-seat">Book Your Seat</button>
                </div>
              </div>
            </div>
            <div>
            <div className="dash-white-box newHome-feature feature-slider dashnew-margin-mob slider-changess p32 mb32 newHome-module">
      <div className="dash-heading pb32">Live Test</div>
      <div className="slick-slider slick-initialized">
        <div className="slick-list">
          <div
            className="slick-track"
            style={{
              width: '622px',
              opacity: 1,
              transform: 'translate3d(0px, 0px, 0px)',
            }}
          >
            <div
              data-index="0"
              className="slick-slide slick-active slick-current"
              tabIndex="-1"
              aria-hidden="false"
              style={{
                outline: 'none',
                width: '622px',
              }}
            >
              <div>
                <div
                  tabIndex="-1"
                  style={{
                    width: '100%',
                    display: 'inline-block',
                  }}
                >
                  <div className="homepage_newHome-live__G_QSt cursor-pointer">
                    <div className="homepage_newHome-Section__i8DwV newExam-Section">
                      <div className="flex justify-between width-100 items-center">
                        <div>
                          <div>
                            <div className="liveIcon">
                              <div className="flex items-center liveIcon-img">
                                <div path="https://image.prepladder.com/content/liveIcon.json">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512 512"
                                    width="512"
                                    height="512"
                                    preserveAspectRatio="xMidYMid meet"
                                    style={{
                                      width: '100%',
                                      height: '100%',
                                      transform: 'translate3d(0px, 0px, 0px)',
                                      contentVisibility: 'visible',
                                    }}
                                  >
                                    <defs>
                                      <clipPath id="__lottie_element_54">
                                        <rect width="512" height="512" x="0" y="0" />
                                      </clipPath>
                                    </defs>
                                    <g clipPath="url(#__lottie_element_54)">
                                      <g
                                        transform="matrix(0.949999988079071,0,0,0.949999988079071,12.800003051757812,12.800003051757812)"
                                        opacity="1"
                                        style={{ display: 'block' }}
                                      >
                                        <g
                                          opacity="1"
                                          transform="matrix(1,0,0,1,255.9949951171875,256.0050048828125)"
                                        >
                                          <path
                                            fill="rgb(235,87,87)"
                                            fillOpacity="1"
                                            d="M66.2249984741211,-0.004999999888241291 C66.2249984741211,36.57500076293945 36.57500076293945,66.2249984741211 0.004999999888241291,66.2249984741211 C-36.57500076293945,66.2249984741211 -66.2249984741211,36.57500076293945 -66.2249984741211,-0.004999999888241291 C-66.2249984741211,-36.57500076293945 -36.57500076293945,-66.2249984741211 0.004999999888241291,-66.2249984741211 C36.57500076293945,-66.2249984741211 66.2249984741211,-36.57500076293945 66.2249984741211,-0.004999999888241291z"
                                          />
                                        </g>
                                      </g>
                                      <g style={{ display: 'none' }}>
                                        <g>
                                          <path />
                                        </g>
                                      </g>
                                      <g style={{ display: 'none' }}>
                                        <g>
                                          <path />
                                        </g>
                                      </g>
                                      <g style={{ display: 'none' }}>
                                        <g>
                                          <path />
                                        </g>
                                      </g>
                                      <g style={{ display: 'none' }}>
                                        <g>
                                          <path />
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                                <span>Live For 01 days 15 hr 25 min</span>
                              </div>
                            </div>
                          </div>
                          <h2 className="dash_title-head mt1">Champions Exam NEET PG - 2</h2>
                        </div>
                        <img
                          className="homepage_newHome-live-img__wHjfp"
                          src="https://image.prepladder.com/content/lAc2A5LJJ8XnQqtmHVEp1646137852.png"
                          alt="img"
                        />
                      </div>
                      <div className="homepage_newHome-live-syl__inutv"></div>
                    </div>
                    <div className="homepage_newHome-live-bottom__RPXBF flex justify-between">
                      <span className="homepage_ques__JEw_P">
                        200 Ques
                        <div className="homepage_ques-dot__9_54k"></div> 210 Mins
                      </span>
                      <button
                        className="align-self btn-custom"
                        style={{ padding: '1.1rem 4rem', fontSize: '1.4rem' }}
                      >
                        Start test
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
            <div>
              <div className="dash-white-box p32 mb32">
                <div className="homepage_prepdash_hed__y1Wva">
                  <div className="homepage_prepdash_hed-left__K6CEl">
                    <h2>Good evening ranu!</h2>
                    <p>Today, let’s discuss an important topic</p>
                  </div>
                  <div className="homepage_prepdash_hed-right__qVFMc">
                    <button>
                      <span>Physiology</span>
                      <img
                        src="https://image.prepladder.com/content/PSjpRMc2on6ypAMDAdoR1691403099.svg"
                        alt="img"
                        className="darkIcon"
                      />
                    </button>
                  </div>
                </div>
                <div className="newHome-changes">
                  <ul className="homepage_GJ-steps__Eg7Qn">
                    <li className="homepage_GJS_current__9BXcF">
                      <div className="homepage_GJS_left__3bsfh">
                        <span>
                          <div className="homepage_REcircle__k2jkE homepage_REcircle1__jdx_v"></div>
                          <div className="homepage_REcircle__k2jkE homepage_REcircle2__xakh2"></div>
                          <div className="homepage_REcircle__k2jkE homepage_REcircle3__i0omo"></div>
                          <div className="relative">1</div>
                          <img
                            src="https://image.prepladder.com/content/iksM4crcNW5HMckkli7o1701157333.svg"
                            alt="success"
                          />
                        </span>
                      </div>
                      <div className="homepage_GJS_right__lmRXI">
                        <div className="homepage_GJS_right-text__dX9AE">
                          <h5>Solve a QBank</h5>
                          <p>
                            To strengthen your concepts by practising Functional
                            Anatomy &amp; Lung Mechanics questions.
                          </p>
                        </div>
                        <div className="homepage_GJS_right-status__hqjO4">
                          <img
                            src="https://image.prepladder.com/content/y2ACZI33WqJAv04IcNst1701766030.png"
                            alt="icon"
                          />
                          <div>
                            <strong>0/39</strong> questions
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="homepage_GJS_left__3bsfh">
                        <span>
                          <div className="homepage_REcircle__k2jkE homepage_REcircle1__jdx_v"></div>
                          <div className="homepage_REcircle__k2jkE homepage_REcircle2__xakh2"></div>
                          <div className="homepage_REcircle__k2jkE homepage_REcircle3__i0omo"></div>
                          <div className="relative">2</div>
                          <img
                            src="https://image.prepladder.com/content/iksM4crcNW5HMckkli7o1701157333.svg"
                            alt="success"
                          />
                        </span>
                      </div>
                      <div className="homepage_GJS_right__lmRXI">
                        <div className="homepage_GJS_right-text__dX9AE">
                          <h5>Watch a Video</h5>
                          <p>
                            For a deeper understanding of Hypoxia by Dr. Soumen
                            Manna.
                          </p>
                        </div>
                        <div className="homepage_GJS_right-status__hqjO4">
                          <img
                            src="https://image.prepladder.com/content/Kr9CY23lUZgxsDkE2EUb1701755094.png"
                            alt="icon"
                          />
                          <div>
                            <strong>0/45</strong> minutes
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="homepage_newHome-streak__mW6wC dash-white-box mb32 dashnew-margin-mob">
              <div className="homepage_newHome-streakMain__OrTLt flex items-center">
                <div className="homepage_newHome-streak-left__QL4WI">
                  <p>You're on a</p>
                  <h5>
                    0 day streak
                    <img
                      src="https://image.prepladder.com/content/VYsWTckrvMvHVWLZD2L41665418150.png"
                      alt="img"
                    />
                  </h5>
                  <div>
                    <ul>
                      {/* Render each day's circle */}
                      {["W", "T", "F", "S", "S", "M", "T"].map((day, index) => (
                        <li key={index} className="">
                          <div>
                            {/* Inline style for each SVG circle */}
                            <style>
                              {`
                        #ring-svg-${index} {
                          stroke-dashoffset: 75.36px;
                          transition: stroke-dashoffset 1s ease;
                        }
                      `}
                            </style>
                            <div className="homepage_streakImg__GJhGt">
                              <div className="homepage_newHome-streakMainBar__hwsK1"></div>
                              <svg>
                                <circle
                                  cx="50%"
                                  cy="50%"
                                  r="12"
                                  className="calender_progress-bar__background__2AozS"
                                  stroke="#E9EEF2"
                                  strokeWidth="3"
                                  fill="var(--dash-white)"
                                ></circle>
                                <circle
                                  cx="50%"
                                  cy="50%"
                                  r="12"
                                  className="calender_progress-bar__progress__dgmmr"
                                  fill="var(--dash-white)"
                                  stroke="#E9EEF2"
                                  strokeDashoffset="75.36"
                                  id={`ring-svg-${index}`}
                                  strokeDasharray="75.36"
                                  style={{
                                    transform: "rotate(-90deg)",
                                    transformOrigin: "center center",
                                  }}
                                ></circle>
                              </svg>
                            </div>
                            <span>{day}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="homepage_newHome-streak-right__c8JXL">
                  <div className="homepage_streakDay__eKM2n">
                    <div className="homepage_streakDayImg__G_hro">
                      {/* Placeholder for flame animation */}
                      <div path="https://image.prepladder.com/content/flame.json">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 512 512"
                          width="512"
                          height="512"
                          preserveAspectRatio="xMidYMid meet"
                          style={{
                            width: "100%",
                            height: "100%",
                            transform: "translate3d(0px, 0px, 0px)",
                            contentVisibility: "visible",
                          }}
                        >
                          {/* Flame SVG content */}
                        </svg>
                      </div>
                    </div>
                    <div className="homepage_streakDay-day__K_4wZ">
                      <div className="homepage_streakDay-day-count__esBm6">
                        {" "}
                        0
                      </div>
                      <p> Day</p>
                    </div>
                  </div>
                  <h6>LONGEST STREAK</h6>
                </div>
              </div>
              <div className="homepage_newHome-streakLine__BtMju"></div>
            </div>
            <div>
              <div class="dash-mob-space">
                <div class="homepage_recentUpdate__lXZpo mb32 dashnew-margin-mob flex items-center justify-between">
                  <div class="flex col-gap16 items-center">
                    <div>
                      <img
                        src="https://image.prepladder.com/content/8cJ0wsFBtW1FRIrqXst01692345062.png"
                        alt="Recent Updates Image"
                      />
                    </div>
                    <div>
                      <p>Recent updates</p>
                      <span>Updated on 12 February 2024</span>
                    </div>
                  </div>
                  <div class="homepage_recentUpdate-lottie__I8riN">
                    <div path="https://image.prepladder.com/content/arrow.json">
                      <svg
                        // xmlns="http://www.w3.org/2000/svg"
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 300 300"
                        width="300"
                        height="300"
                        preserveAspectRatio="xMidYMid meet"
                        style={{
                          width: "100%",
                          height: "100%",
                          transform: "translate3d(0px, 0px, 0px)",
                          contentVisibility: "visible",
                        }}
                      >
                        <defs>
                          <clipPath id="__lottie_element_25">
                            <rect width="300" height="300" x="0" y="0"></rect>
                          </clipPath>
                          <clipPath id="__lottie_element_27">
                            <path d="M0,0 L500,0 L500,500 L0,500z"></path>
                          </clipPath>
                        </defs>
                        <g clip-path="url(#__lottie_element_25)">
                          <g
                            clip-path="url(#__lottie_element_27)"
                            transform="matrix(0,1,-1,0,399,-100)"
                            opacity="1"
                            style={{ display: "block" }}
                          >
                            <g style={{ display: "none" }}>
                              <g>
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  fill-opacity="0"
                                ></path>
                              </g>
                            </g>
                            <g style={{ display: "none" }}>
                              <g>
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  fill-opacity="0"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="dash-mob-space">
                <div className="homepage_QuestionOfTheDayTile__RNZQx p32 mb32 dashnew-margin-mob">
                  <div className="homepage_QuestionOfTheDayTile-head__ptBpG mb1">
                    Question of the Day<span>CLINICAL</span>
                  </div>
                  <p>
                    <span>
                      A 66-year-old male presents with complaints of
                      increasing&nbsp;
                      <span className="marker">dyspnea on exertion</span>. On
                      examination, heaving apex beat and carotid thrill were
                      present. Auscultatory findings showed{" "}
                      <span className="marker">
                        ejection systolic murmur with single S2
                      </span>
                      . Which of the following is an incorrect{" "}
                      <span className="marker">
                        transthoracic echocardiographic finding in this
                        condition
                      </span>
                      ?
                    </span>
                  </p>
                  <button
                    className="btn btn-custom mt2"
                    style={{ padding: "1.1rem 4.2rem", fontSize: "1.4rem" }}
                  >
                    Answer now
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="homepage_newHome-quick__6vc6_ mb32 dashnew-margin-mob">
                <div className="dash-heading pb24">Quick links</div>
                <div className="newHome-mainz">
                  <ul>
                    <li>
                    <Link to="/Treasures">
        <div className="dash-white-box1">
          <img
            src="https://image.prepladder.com/content/hm3zJ8yLtUVnz3MqSVpV1636964386.png"
            alt="img"
            className="dash-white-box-img"
          />
          <p className="dash-white-box-text">Treasures</p>
        </div>
      </Link>
                    </li>
                    <li>
                    <Link to="/CustomModule">
        <div className="dash-white-box1">
          <img
            src="https://image.prepladder.com/content/tp0hgRRRVodIDDNVkykK1710483754.png"
            alt="img"
            className="dash-white-box-img"
          />
          <p className="dash-white-box-text">Custom Module</p>
        </div>
      </Link>
                    </li>
                    <li>
                      <div className="dash-white-box">
                        <img
                          src="https://image.prepladder.com/content/dbX95LHH21MVI9uivJCn1636719293.png"
                          alt="img"
                        />
                        <p>Bookmarks</p>
                      </div>
                    </li>
                    <li>
                      <div className="dash-white-box">
                        <img
                          src="https://image.prepladder.com/content/Kxirnn5iFwBl4uzY2E4d1636719258.png"
                          alt="img"
                        />
                        <p>Past Year Ques</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="dash-white-box newHome-feature feature-slider dashnew-margin-mob slider-changess p32 mb32 newHome-module">
                <div className="dash-heading pb32">Video of the day</div>
                <div className="slick-slider slick-initialized">
                  <div className="slick-list">
                    <div
                      className="slick-track"
                      style={{
                        width: "804px",
                        opacity: "1",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <div
                        data-index="0"
                        className="slick-slide slick-active slick-current"
                        tabIndex="-1"
                        aria-hidden="false"
                        style={{ outline: "none", width: "804px" }}
                      >
                        <div>
                          <div
                            tabIndex="-1"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="homepage_newHome-video__bbM4s homepage_newHome-videoSingle__86JpH cursor-pointer">
                              <div className="homepage_newHome-videoLeft__tAdRJ">
                                <img
                                  src="https://image.prepladder.com/content/X6SQJ7AzzX6NbFiCm1ax1711623817.png"
                                  alt="img"
                                />
                                <div className="homepage_newHome-videoIcon__or9Ux">
                                  <img
                                    src="https://image.prepladder.com/content/2eBl92bR4QBgrSeD7oP41665468907.png"
                                    alt="img"
                                  />
                                </div>
                              </div>
                              <div className="homepage_newHome-videoRight__6rnRU">
                                <h5>Intersex</h5>
                                <p>Dr. Prassan Vij</p>
                                <button
                                  className="btn-custom mt2"
                                  style={{
                                    padding: "1.1rem 4.2rem",
                                    fontSize: "1.4rem",
                                  }}
                                >
                                  Watch now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
