import React from "react";
import HeaderAfterLogin from "../../HeaderAfterLogin";
import Setting_Sidebar from "../../SettingSidebar";

export default function Tests() {
  const handleClick = () => {
    // Navigate to a new page here
    window.open("http://localhost:3000/settingHome", "_blank");
  };

  return (
    <div>
      <HeaderAfterLogin />

      <div className="dash-container flex dash-main-layout video-dash-container">
        <Setting_Sidebar />
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
          <div className="appheader_section_header__9eqrR">
      <div className="flex mb2 justify-between items-center">
        <div className="appheader_section_header-breadcrumb__8xohk">
          <div className="flex">
            <div>
              <button className="appheader_no-skew__670Tu">
                <img
                  src="https://image.prepladder.com/content/Oues6YawqRn1RBZv9Y7p1709883508.svg"
                  className="darkIcon"
                  alt="img"
                />
              </button>
            </div>
            <div className="flex flex-wrap flex1">
              <a className="" href="/app">
                <div>home</div>
              </a>
            </div>
          </div>
        </div>
        <div className="langchng">
          <div className="langchng_left flex1">
            <div className="flex justify-between items-center">
              <div className="dash-heading flex items-center">Tests</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="appheader_section_header-subtitle__P93NQ">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="appheader_section_header-tab__FZ2TL">
          <ul className="flex">
            <li className="appheader_list-active__9yKUi disabled">Mock Tests</li>
            <li className="">Subject Test</li>
            <li className="">Past Exams</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="">
      <div className="TestListCard_TestListCard__I3Ap3 mob-dash-white-box">
        <div className="TestListCard_tile_hed__sSfjN">
          <h2 className="mb16">June 2024</h2>
        </div>
        <ul>
          <li>
            <div className="TestListCard_TestListCard_card__x1UnH">
              <div className="TestListCard_TestListCard_card-content__0jMcZ">
                <div className="TestListCard_TestListCard_card-content--quesCount__A__iu col-gap8">
                  <div className="free-tag">FREE</div>
                  <div className="live-tag">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        width="512"
                        height="512"
                        preserveAspectRatio="xMidYMid meet"
                        style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible' }}
                      >
                        <defs>
                          <clipPath id="__lottie_element_106">
                            <rect width="512" height="512" x="0" y="0"></rect>
                          </clipPath>
                        </defs>
                        <g clipPath="url(#__lottie_element_106)">
                          <g transform="matrix(0.95, 0, 0, 0.95, 12.8, 12.8)" opacity="1" style={{ display: 'block' }}>
                            <g opacity="1" transform="matrix(1, 0, 0, 1, 256, 256)">
                              <path fill="rgb(235,87,87)" fillOpacity="1" d="M66.225,-0.005 C66.225,36.575 36.575,66.225 0.005,66.225 C-36.575,66.225 -66.225,36.575 -66.225,-0.005 C-66.225,-36.575 -36.575,-66.225 0.005,-66.225 C36.575,-66.225 66.225,-36.575 66.225,-0.005z"></path>
                            </g>
                          </g>
                          {/* Other paths */}
                        </g>
                      </svg>
                    </div>
                    <span>Live</span>
                  </div>
                </div>
                <h3>Champions Exam NEET PG - 2</h3>
                <p>
                  <img src="https://image.prepladder.com/content/2FoSdBC8Ua7ceo2J5hoP1703140682.png" alt="icon" />
                  <span className="flex items-center"> 210 min<div className="TestListCard_dot"></div>200 ques </span>
                </p>
              </div>
              <div className="TestListCard_TestListCard_card-img__LjzgG">
                <img src="https://image.prepladder.com/content/lAc2A5LJJ8XnQqtmHVEp1646137852.png" alt="live test" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="mb24">
        <div className="TestListCard_TestListCard__I3Ap3 cards_card-year__qcmPf mob-dash-white-box">
          <div className="pb1 dash-heading">Year wise mock tests</div>
          <div>
            <ul>
              <li>
                <div className="dash-white-box">
                  <section className="cards_commonCard__Sl49z flex position-relative">
                    <button className="cards_card-1-new__3eqdd cards_card-1-book__TB9fg flex card-padding">
                      <div className="cards_card-1__left-book__DL_UC"></div>
                      <div className="cards_card-1__md__5l1k_ cards_card-1__md-book__kjTSv">
                        <div className="flex width-90"><h2 className="dash_title-head">Year 2024</h2></div>
                        <h3 className="dash_title-subhead flex items-center"><div className="flex-none">6 Tests</div></h3>
                      </div>
                      <div className="cards_commonCard-right__zAVS8">
                        <div className="cards_new-mcq__BB5Ny ml-auto">
                          <button type="button">
                            <img src="https://image.prepladder.com/content/ZAHLdBm1rdeTGSlkGUCq1709886107.svg" alt="arrow_blue" />
                          </button>
                        </div>
                      </div>
                    </button>
                  </section>
                </div>
              </li>
              <li>
                <div className="dash-white-box">
                  <section className="cards_commonCard__Sl49z flex position-relative">
                    <button className="cards_card-1-new__3eqdd cards_card-1-book__TB9fg flex card-padding">
                      <div className="cards_card-1__left-book__DL_UC"></div>
                      <div className="cards_card-1__md__5l1k_ cards_card-1__md-book__kjTSv">
                        <div className="flex width-90"><h2 className="dash_title-head">Year 2023</h2></div>
                        <h3 className="dash_title-subhead flex items-center"><div className="flex-none">16 Tests</div></h3>
                      </div>
                      <div className="cards_commonCard-right__zAVS8">
                        <div className="cards_new-mcq__BB5Ny ml-auto">
                          <button type="button">
                            <img src="https://image.prepladder.com/content/ZAHLdBm1rdeTGSlkGUCq1709886107.svg" alt="arrow_blue" />
                          </button>
                        </div>
                      </div>
                    </button>
                  </section>
                </div>
              </li>
              <li>
                <div className="dash-white-box">
                  <section className="cards_commonCard__Sl49z flex position-relative">
                    <button className="cards_card-1-new__3eqdd cards_card-1-book__TB9fg flex card-padding">
                      <div className="cards_card-1__left-book__DL_UC"></div>
                      <div className="cards_card-1__md__5l1k_ cards_card-1__md-book__kjTSv">
                        <div className="flex width-90"><h2 className="dash_title-head">Year 2022</h2></div>
                        <h3 className="dash_title-subhead flex items-center"><div className="flex-none">23 Tests</div></h3>
                      </div>
                      <div className="cards_commonCard-right__zAVS8">
                        <div className="cards_new-mcq__BB5Ny ml-auto">
                          <button type="button">
                            <img src="https://image.prepladder.com/content/ZAHLdBm1rdeTGSlkGUCq1709886107.svg" alt="arrow_blue" />
                          </button>
                        </div>
                      </div>
                    </button>
                  </section>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}