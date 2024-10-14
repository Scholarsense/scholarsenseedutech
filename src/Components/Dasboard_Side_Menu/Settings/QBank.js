import React from "react";
import HeaderAfterLogin from "../../HeaderAfterLogin";
import SettingSidebar from "../../SettingSidebar";

export default function QBank() {
  const handleClick = () => {
    // Navigate to a new page here
    window.open("http://localhost:3000/settingHome", "blank");
  };
  const subjectsData = [
    {
      name: "Anatomy",
      image:
        "https://image.prepladder.com/content/cNNTo6avPgesivBUV24E1710332177.png",
      totalQuestions: 56,
      completed: 0,
    },
    {
      name: "Physiology",
      image:
        "https://image.prepladder.com/content/ujzBrytcq1ctRgKeGreT1710332487.png",
      totalQuestions: 43,
      completed: 0,
    },
    // Add more subjects as needed
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
          <div class="appheader_section_header__9eqrR">
            <div class="flex mb2 justify-between items-center">
              <div class="appheader_section_header-breadcrumb__8xohk">
                <div class="flex">
                  <div>
                    <button
                      class="appheader_no-skew__670Tu"
                      onClick={handleClick}
                    >
                      <img
                        src="https://image.prepladder.com/content/Oues6YawqRn1RBZv9Y7p1709883508.svg"
                        class="darkIcon"
                        alt="img"
                      />
                    </button>
                  </div>
                  <div class="flex flex-wrap flex1">
                    <a class="" href="/settingHome">
                      <div>home</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="langchng">
              <div class="langchng_left flex1">
                <div class="flex justify-between items-center">
                  <div class="dash-heading flex items-center">QBank</div>
                </div>
                <div class="flex justify-between items-center">
                  <div class="appheader_section_header-subtitle__P93NQ">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <section className="dash-mob-space">
            {/* Main Feature Card */}
            <div className="cards_feature__6wdu_ mb2">
              <div className="dash-white-box p-16 mb24 dash-margin-mob">
                <div className="rightbar_rightbar-quiz-main__y_FPq flex justify-between">
                  <div className="rightbar_rightbar-quiz__0XqdC">
                    <h2 className="mb1">
                      Scholar Sense 6.0 Prices Rising Soon
                    </h2>
                    <p>Only 200 slots left. But, we’re saving one for you!</p>
                    <button className="btn-dash">Enrol Now</button>
                  </div>
                  <img
                    src="https://image.prepladder.com/content/3Zi5sPVPLvquBokm2N4Z1706247750.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>

            {/* QBank Touchpoint */}
            <div className="cards_qbank-touchpoint__jR0OW dash-white-box flex items-center justify-between mb2">
              <div className="cards_qbank-touchpoint-left__uIRlv">
                <p>
                  <strong
                    style={{
                      fontStyle: "italic",
                      fontSize: "1.6rem",
                      lineHeight: "2rem",
                      display: "block",
                      color: "#3A5DF5",
                    }}
                  >
                    Introducing QBank 6.0
                  </strong>
                  <br />
                  The only matter that matters!
                </p>
              </div>
              <div className="cards_qbank-touchpoint-right__DhaLV">
                <button>
                  <span>Know more</span>
                  <img
                    src="https://image.prepladder.com/content/mLz96IcOaqaq65GipVTn1710160460.png"
                    alt="img"
                  />
                </button>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="flex justify-between">
              <div className="cards_feature-main__by47G mb24">
                <ul>
                  {/* Example Card */}
                  <li>
                    <div className="cards_featureCard__lR6M3 dash-white-box cursor-pointer">
                      <div className="flex items-center">
                        <img
                          src="https://image.prepladder.com/content/vE5j9HpQRhkG3qNhmkCO1710401103.png"
                          alt="img"
                        />
                        <div className="cards_featureCard-head___vmJW">
                          Past Year Ques
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cards_featureCard__lR6M3 dash-white-box cursor-pointer">
                      <div className="flex items-center">
                        <img
                          src="https://image.prepladder.com/content/pHuYABlhijhtddUkhiAH1710400892.png"
                          alt="img"
                        />
                        <div className="cards_featureCard-head___vmJW">
                          Custom Module
                        </div>
                      </div>
                    </div>
                  </li>
                </ul> 
              </div>
            </div>

            {/* Version 6.0 Section */}
            <div>
              <h2 className="mb24">Version 6.0</h2>
              <div className="cards_feature-mains__E9U7b">
                <ul>
                  {subjectsData.map((subject, index) => (
                    <li key={index}>
                      <div className="dash-white-box">
                        <button className="cards_card-1-new__3eqdd flex card-padding mb16 items-center cursor-pointer">
                          <div className="cards_card-1__left__HDlPB">
                            <img
                              src={subject.image}
                              className="cards_card-1__img__uuiuX"
                              alt="img_tag"
                            />
                          </div>
                          <div className="cards_card-1__md__5l1k_ cards_card-1__md-border__XleHT">
                            <div className="flex items-center max-width-95">
                              <h2 className="dash_title-head">
                                {subject.name}
                              </h2>
                            </div>
                            <div className="cards_card-1__progress__0y7b_">
                              <div className="cards_card-1__progress-line__2wkV_">
                                <div
                                  className="cards_card-1__progress--bottom__Wjqp1"
                                  style={{
                                    width: `${
                                      (subject.completed /
                                        subject.totalQuestions) *
                                      100
                                    }%`,
                                  }}
                                ></div>
                              </div>
                              <p className="cards_card-1__progress-complete__C_uFE">
                                <span>
                                  {subject.completed}/{subject.totalQuestions}{" "}
                                  completed
                                </span>
                              </p>
                            </div>
                            <div className="cards_new-mcq__BB5Ny cards_new-mcq-qbank__s1aGh ml-auto">
                              <div>
                                <img
                                  src="https://image.prepladder.com/content/ZAHLdBm1rdeTGSlkGUCq1709886107.svg"
                                  alt="arrow_blue"
                                />
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
