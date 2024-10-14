import React from "react";
import HeaderAfterLogin from "../../HeaderAfterLogin";
import SettingSidebar from "../../SettingSidebar";

export default function Video() {
    const handleClick = () => {
        // Navigate to a new page here
        window.open('http://localhost:3000/settingHome', '_blank'); 
      };

  const courses = [
    {
      imgSrc:
        "https://image.prepladder.com/content/IpqV9CFjMb6XJIdcLszq1709552338.png",
      title: "Anatomy",
      faculty: "Dr. Rajesh Kaushal",
    },
    {
      imgSrc:
        "https://image.prepladder.com/content/AC9m8rFjjUGsZncRf8TV1709552453.png",
      title: "Physiology",
      faculty: "Dr. Soumen Manna",
    },
    {
      imgSrc:
        "https://image.prepladder.com/content/mVfFJVqUGvpy9idsAXdg1709552513.png",
      title: "Biochemistry",
      faculty: "Dr. C Shanmugapriya",
    },
    {
      imgSrc:
        "https://image.prepladder.com/content/yYasnGN4L7GuZFGVrHzt1709613594.png",
      title: "Pathology",
      faculty: "Dr. Preeti Sharma",
    },
  ];

  const resources = [
    {
      imgSrc:
        "https://image.prepladder.com/content/vuU05whggFM5QQBS7rUI1717572956.png",
      title: "Rapid Revision",
      description: "A holistic solution for swift revision",
    },
    {
      imgSrc:
        "https://image.prepladder.com/content/SFoeqw2PGZTRuSRJy0my1717575222.png",
      title: "Last Resort Revision",
      description: "The Ultimate High-Speed Revision Series",
    },

    // Add more resources as needed
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
          <div className="appheader_section_header__9eqrR">
            <div className="flex mb2 justify-between items-center">
              <div className="appheader_section_header-breadcrumb__8xohk">
                <div className="flex">
                  <div>
                    <button className="appheader_no-skew__670Tu" onClick={handleClick}>
                      <img
                        src="https://image.prepladder.com/content/Oues6YawqRn1RBZv9Y7p1709883508.svg"
                        className="darkIcon"
                        alt="img"
                      />
                    </button>
                  </div>
                  <div className="flex flex-wrap flex1">
                    <a className="" href="/settingHome">
                      <div>home</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="langchng">
              <div className="langchng_left flex1">
                <div className="flex justify-between items-center">
                  <div className="dash-heading flex items-center">Videos</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="appheader_section_header-subtitle__P93NQ">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>

          <section className="dash-mob-space">
            <div className="">
              <div className="cards_feature__6wdu_">
                <div className="mb2">
                  <div className="dash-white-box p-16 mb24 dash-margin-mob">
                    <div className="rightbar_rightbar-quiz-main__y_FPq  flex justify-between ">
                      <div className="rightbar_rightbar-quiz__0XqdC">
                        <h2 className="mb1">
                          <span style={{ fontFamily: "Averta Std" }}>
                            Scholar Sense 6.0 Prices Rising Soon
                          </span>
                        </h2>
                        <p>
                          <span style={{ fontFamily: "Averta Std" }}>
                            Only 200 slots left. But, we’re saving one for
                            you!&nbsp;
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
                </div>
                <div>
                  <h4 className="mb24">Version 6.0</h4>
                  <div className="cards_feature-mains__E9U7b">
                    <ul>
                      {courses.map((course, index) => (
                        <li key={index}>
                          <div className="dash-white-box">
                            <button className="cards_card-1-new__3eqdd flex card-padding mb16 items-center cursor-pointer ">
                              <div className="cards_card-1__left__HDlPB">
                                <img
                                  src={course.imgSrc}
                                  className="cards_card-1__img__uuiuX"
                                  alt="img_tag"
                                />
                              </div>
                              <div className="cards_card-1__md__5l1k_ cards_card-1__md-border__XleHT">
                                <div className="flex items-center max-width-95">
                                  <h2 className="dash_title-head">
                                    {course.title}
                                  </h2>
                                </div>
                                <h3 className="dash_title-subhead">
                                  {course.faculty}
                                </h3>
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
                <div>
                  <h4 className="mb12">Value added resources</h4>
                  <div className="cards_feature-mains__E9U7b">
                    <ul>
                      {resources.map((resource, index) => (
                        <li key={index}>
                          <div className="dash-white-box">
                            <button className="cards_card-1-new__3eqdd flex card-padding mb16 items-center cursor-pointer ">
                              <div className="cards_card-1__left__HDlPB">
                                <img
                                  src={resource.imgSrc}
                                  className="cards_card-1__img__uuiuX"
                                  alt="img_tag"
                                />
                              </div>
                              <div className="cards_card-1__md__5l1k_ cards_card-1__md-border__XleHT">
                                <div className="flex items-center max-width-95">
                                  <h2 className="dash_title-head">
                                    {resource.title}
                                  </h2>
                                </div>
                                <h3 className="dash_title-subhead">
                                  {resource.description}
                                </h3>
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
  }