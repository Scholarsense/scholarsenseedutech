import React, { useRef, useState } from "react";
import BlogDropdownMenu from "./BlogDropdownMenu";
import LatestArticles from "./LatestArticles";

export default function Blog() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 300; // Adjust as needed
    if (direction === "left") {
      scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else {
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenExam, setIsOpenExam] = useState(false);
  const [isOpenExamPattern, setIsOpenExamPattern] = useState(false);

  const toggleDropdown = (dropdown) => {
    // Close all dropdowns first
    setIsOpen(false);
    setIsOpenExam(false);
    setIsOpenExamPattern(false);

    // Then open the selected dropdown
    switch (dropdown) {
      case "studyMaterial":
        setIsOpen(!isOpen);
        break;
      case "examGuide":
        setIsOpenExam(!isOpenExam);
        break;
      case "freeResources":
        setIsOpenExamPattern(!isOpenExamPattern);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <BlogDropdownMenu />
      <div className="  flex justify-between mt3">
        <div class="container">
          <div className="flex">
            <div className=" appheader_section_header-breadcrumb__8xohk">
              <a className=" " href="/">
                <div>NEET PG Preparation</div>
              </a>
            </div>
            <div className="flex  flex-wrap flex1"></div>
          </div>
        </div>
      </div>
      <div className="blogs1_blognew_faculties__s10hd">
        <div className="blogs1_container_sm__ItpuU container">
          <div className="blogs1_blognew_faculties--inner__CUsBS">
            <div className="blogs1_z-index-1__eZjrS relative">
              <div className="blogs1_blognew_faculties--hed__nkwFl">
                <h2>Meet our Top NEET-PG Faculty</h2>
                <p>
                  Learn from the Dream Team with over 100+ years of cumulative
                  experience
                </p>
              </div>
              <div className="blogs1_blognew_faculties--scroll__5_kXH">
                <div className="blogs1_blognew_faculties--slider__TDoB2">
                  <div className="blogs1_fac_card__NgVR_">
                    <div className="blogs1_fac_card--inner__DHxgL">
                      <div className="blogs1_fac_card_top__hdAmh">
                        <img
                          src="https://image.prepladder.com/content/Deepak%20Marwah..webp"
                          alt="img"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="blogs1_fac_card_bottom__5sIeb">
                        <h2>Dr. Deepak Marwah</h2>
                        <p>17+ Years of Exp</p>
                        <h3>Medicine</h3>
                      </div>
                    </div>
                  </div>
                  <div className="blogs1_fac_card__NgVR_">
                    <div className="blogs1_fac_card--inner__DHxgL">
                      <div className="blogs1_fac_card_top__hdAmh">
                        <img
                          src="https://image.prepladder.com/content/Pritesh-Singh.webp"
                          alt="img"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="blogs1_fac_card_bottom__5sIeb">
                        <h2>Dr. Pritesh Singh</h2>
                        <p>17+ Years of Exp</p>
                        <h3>Surgery</h3>
                      </div>
                    </div>
                  </div>
                  <div className="blogs1_fac_card--inner__DHxgL">
                    <div className="blogs1_fac_card_top__hdAmh">
                      <img
                        src="https://image.prepladder.com/content/Rajesh-Kaushal.webp"
                        alt="img"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="blogs1_fac_card_bottom__5sIeb">
                      <h2>Dr. Rajesh Kaushal</h2>
                      <p>Director, Humen Anat Academy</p>
                      <h3>Anatomy</h3>
                    </div>
                  </div>
                  <div className="blogs1_fac_card__NgVR_">
                    <div className="blogs1_fac_card--inner__DHxgL">
                      <div className="blogs1_fac_card_top__hdAmh">
                        <img
                          src="https://image.prepladder.com/content/Prassan-Vij.webp"
                          alt="img"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="blogs1_fac_card_bottom__5sIeb">
                        <h2>Dr. Prassan Vij</h2>
                        <h3>Gynaecology & Obstetrics</h3>
                      </div>
                    </div>
                  </div>
                  <div className="blogs1_fac_card__NgVR_">
                    <div className="blogs1_fac_card--inner__DHxgL">
                      <div className="blogs1_fac_card_top__hdAmh">
                        <img
                          src="https://image.prepladder.com/content/QVBt5h8Xkkih5wrdvvdW1673529181.png"
                          alt="img"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="blogs1_fac_card_bottom__5sIeb">
                        <h2>Dr. Meenakshi Bothra</h2>
                        <h3>Pediatrics</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blogs1_fac_viewall__2TEoQ center">
                <a
                  className=""
                  title="View all"
                  href="/"
                >
                  VIEW ALL
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home_web__four__Nv_EP pt5 pb5 home-section bg-gray">
        <div className="weblayout_container__0W9V9">
          <div className="weblayout_row__VBgkR">
            <div className="weblayout_col-xl-8__rgTJ_ weblayout_col-lg-8__hkbk6 weblayout_col-md-12__j0tLe weblayout_col-sm-12__bJVbl center m-auto float-none">
              <div className="home_web__heading__hj0NB">
                <h2>Proven Effective Content</h2>
                <p className="mt1">
                  Concise, high yield, highly effective content that yields
                  result. The strike rate proves it.
                </p>
              </div>
            </div>
          </div>
          <div className="weblayout_row__VBgkR mt5 mb3 flex items-center flex-wrap justify-center">
            <div className="weblayout_col-xl-4__GZjdt weblayout_col-lg-4__spHcU weblayout_col-md-6__yL2Gz weblayout_col-sm-12__bJVbl mobile-margin">
              <div className="home_web__four--inner__BY56u center">
                <div className="center">
                  <div className="home_web__four--top__eL4Kh">
                    <span>NEET PG March 2023</span>
                  </div>
                  <h2 className="mt2 mb1">96%</h2>
                  <p>Strike Rate</p>
                </div>
                <div className="home_para__bK__u mt2">
                  A direct repeat from ScholarSense's high yield content
                </div>
              </div>
            </div>
            <div className="weblayout_col-xl-4__GZjdt weblayout_col-lg-4__spHcU weblayout_col-md-6__yL2Gz weblayout_col-sm-12__bJVbl mobile-margin">
              <div className="home_web__four--inner__BY56u center">
                <div className="center">
                  <div className="home_web__four--top__eL4Kh">
                    <span>NEET PG May 2022</span>
                  </div>
                  <h2 className="mt2 mb1">92.5%</h2>
                  <p>Strike Rate</p>
                </div>
                <div className="home_para__bK__u mt2">
                  A direct repeat from ScholarSense's concise content
                </div>
              </div>
            </div>
            <div className="weblayout_col-xl-4__GZjdt weblayout_col-lg-4__spHcU weblayout_col-md-6__yL2Gz weblayout_col-sm-12__bJVbl mobile-margin">
              <div className="home_web__four--inner__BY56u center">
                <div className="center">
                  <div className="home_web__four--top__eL4Kh">
                    <span>NEET PG May 2021</span>
                  </div>
                  <h2 className="mt2 mb1">89.0%</h2>
                  <p>Strike Rate</p>
                </div>
                <div className="home_para__bK__u mt2">
                  A direct repeat of ScholarSense's high quality content
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="blogs1_blognew_freeacc__4fXgB bg-gray">
        <div className="container">
          <a className="" target="blank" title="" href="/">
            <div className="blogs1_blognew_freeacc_banner__9L58X">
              <img
                src="https://image.prepladder.com/content/Mock-test-neet-pg-web.webp"
                alt="PrepLadder 6.0"
                className="blogs1_blogdesk__stEBn"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://image.prepladder.com/content/mock-test-NEET PG.webp"
                alt="PrepLadder 6.0"
                className="blogs1_blogmob__saSVZ"
                loading="lazy"
                decoding="async"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="blogs1_blognew_stdmtr__s7YC3">
        <div className="container">
          <div className="blogs1_blognew_common-hed___Ge0D">
            <h2>Subject Wise High Yield Topics for NEET-PG</h2>
            <p>Stay up to date on what’s happening in the NEET-PG Exam</p>
          </div>
          <div className="blogs1_blognew_stdmtr--list__uwrQQ">
            <ul>
              <li>
                <a
                  className=""
                  title="Anatomy"
                  href="/anatomy"
                >
                  <div className="blogs1_blognew_stdmtr--card__MgQ0N">
                    <div className="blogs1_blognew_stdmtr--card--img__zX3QI">
                      <img
                        src="https://image.prepladder.com/content/X7Jd54Mz6p8jdwGGntl71670321500.png"
                        alt="Anatomy"
                        style={{ width: "4.8rem", height: "4.8rem" }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="blogs1_blognew_stdmtr--card--text__VDEh4">
                      <h2>Anatomy</h2>
                      <p>
                        Master Anatomy with simple, highly-effective, and
                        engaging lectures.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className=""
                  title="PHYSIOLOGY"
                  href="/"
                >
                  <div className="blogs1_blognew_stdmtr--card__MgQ0N">
                    <div className="blogs1_blognew_stdmtr--card--img__zX3QI">
                      <img
                        src="https://image.prepladder.com/content/NM5DwMGJn7kiSsmSiVD11670321527.png"
                        alt="PHYSIOLOGY"
                        style={{ width: "4.8rem", height: "4.8rem" }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="blogs1_blognew_stdmtr--card--text__VDEh4">
                      <h2>PHYSIOLOGY</h2>
                      <p>
                        Learn from Dr. Soumen Manna, author of the Review of
                        Physiology.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className=""
                  title="Anatomy"
                  href="/"
                >
                  <div className="blogs1_blognew_stdmtr--card__MgQ0N">
                    <div className="blogs1_blognew_stdmtr--card--img__zX3QI">
                      <img
                        src="https://image.prepladder.com/content/X7Jd54Mz6p8jdwGGntl71670321500.png"
                        alt="Anatomy"
                        style={{ width: "4.8rem", height: "4.8rem" }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="blogs1_blognew_stdmtr--card--text__VDEh4">
                      <h2>Anatomy</h2>
                      <p>
                        Master Anatomy with simple, highly-effective, and
                        engaging lectures.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className=""
                  title="PHYSIOLOGY"
                  href="/"
                >
                  <div className="blogs1_blognew_stdmtr--card__MgQ0N">
                    <div className="blogs1_blognew_stdmtr--card--img__zX3QI">
                      <img
                        src="https://image.prepladder.com/content/NM5DwMGJn7kiSsmSiVD11670321527.png"
                        alt="PHYSIOLOGY"
                        style={{ width: "4.8rem", height: "4.8rem" }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="blogs1_blognew_stdmtr--card--text__VDEh4">
                      <h2>PHYSIOLOGY</h2>
                      <p>
                        Learn from Dr. Soumen Manna, author of the Review of
                        Physiology.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className=""
                  title="Anatomy"
                  href="/"
                >
                  <div className="blogs1_blognew_stdmtr--card__MgQ0N">
                    <div className="blogs1_blognew_stdmtr--card--img__zX3QI">
                      <img
                        src="https://image.prepladder.com/content/X7Jd54Mz6p8jdwGGntl71670321500.png"
                        alt="Anatomy"
                        style={{ width: "4.8rem", height: "4.8rem" }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="blogs1_blognew_stdmtr--card--text__VDEh4">
                      <h2>Anatomy</h2>
                      <p>
                        Master Anatomy with simple, highly-effective, and
                        engaging lectures.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className=""
                  title="PHYSIOLOGY"
                  href="/"
                >
                  <div className="blogs1_blognew_stdmtr--card__MgQ0N">
                    <div className="blogs1_blognew_stdmtr--card--img__zX3QI">
                      <img
                        src="https://image.prepladder.com/content/NM5DwMGJn7kiSsmSiVD11670321527.png"
                        alt="PHYSIOLOGY"
                        style={{ width: "4.8rem", height: "4.8rem" }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="blogs1_blognew_stdmtr--card--text__VDEh4">
                      <h2>PHYSIOLOGY</h2>
                      <p>
                        Learn from Dr. Soumen Manna, author of the Review of
                        Physiology.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blogs1_blognew_freeacc__4fXgB">
        <div className="container">
          <a
            className=""
            target="blank"
            title=""
            href="https://www.prepladder.com/app/plans/249-rapid+revision+notes+5.0?utm_source=website&amp;utm_medium=blog&amp;utm_campaign=blog-cta-rr-aug-2023&amp;utm_term=neet-pg-rr-blog-cta"
          >
            <div className="blogs1_blognew_freeacc_banner__9L58X">
              <img
                src="https://image.prepladder.com/content/Rapid-revision-website.webp"
                alt="Rapid Revision 5.0"
                className="blogs1_blogdesk__stEBn"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://image.prepladder.com/content/Rapid-revision-Mobile.webp"
                alt="Rapid Revision 5.0"
                className="blogs1_blogmob__saSVZ"
                loading="lazy"
                decoding="async"
              />
            </div>
          </a>
        </div>
      </div>
      <section className="home_testimonials__IMCjd home_testimonialBg__advHW newSlider offerTestimonial bg-lightgreen">
        <div className="scrollCarousel_testimonialScroll__MdZO6 offerTestimonial-container container">
          <div className="blogs1_blognew_common-hed___Ge0D blogs2_blognew_common-hed___Ge0D pb8">
            <h2>Our Success Stories</h2>
            <p>
              Why our study resources have helped learners achieve their dream?
            </p>
          </div>
          <div>
            <div className="scrollCarousel_scrollList-main__VGGht">
              <div
                ref={scrollRef}
                style={{
                  position: "relative",
                  display: "flex",
                  overflow: "auto",
                  scrollSnapType: "x mandatory",
                }}
                className="scrollCarousel_scrollCarousel-inner__0htoc"
              >
                {/* Testimonial 1 */}
                <div
                  style={{ flexShrink: 0, scrollSnapAlign: "start" }}
                  className="scrollCarousel_scrollList__NkW5l"
                >
                  <div className="scrollCarousel_scrollCarousel-main__y8UET">
                    <div className="home_card__nsPWB">
                      <div className="home_card_inner__cGBPs bg-gray">
                        <div className="home_card_inner_top__7MmOI">
                          <p>
                            I frequently attempted mock tests on the PrepLadder
                            app to assess my strengths and weaknesses. The Rapid
                            Revision helps you revise easily within a hectic
                            schedule.
                          </p>
                        </div>
                        <div className="">
                          <div className="home_divider1__v7rNd divider1"></div>
                          <div className="home_sub_card__5i_E7">
                            <div className="home_sub_card_left__PY0hu">
                              <img
                                className=""
                                src="https://image.prepladder.com/content/Dr.Prem.webp"
                                alt="Dr. Prem Thilak"
                              />
                            </div>
                            <div className="home_sub_card_right__HwcAG">
                              <h2>Dr. Prem Thilak</h2>
                              <p>AIR 2 | NEET PG 2023</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial 2 */}
                <div
                  style={{ flexShrink: 0, scrollSnapAlign: "start" }}
                  className="scrollCarousel_scrollList__NkW5l"
                >
                  <div className="scrollCarousel_scrollCarousel-main__y8UET">
                    <div className="home_card__nsPWB">
                      <div className="home_card_inner__cGBPs bg-gray">
                        <div className="home_card_inner_top__7MmOI">
                          <p>
                            Build your concepts with the videos first and for
                            the last days before the examination, rapid revision
                            videos are great. Attempt Grand Tests, solve MCQs,
                            and make custom modules to practice & find your
                            weaknesses so you can accordingly plan your studies.
                          </p>
                        </div>
                        <div className="">
                          <div className="home_divider1__v7rNd divider1"></div>
                          <div className="home_sub_card__5i_E7">
                            <div className="home_sub_card_left__PY0hu">
                              <img
                                className=""
                                src="https://image.prepladder.com/content/Dr.Rupesh.webp"
                                alt="Dr. Rupesh Tholia"
                              />
                            </div>
                            <div className="home_sub_card_right__HwcAG">
                              <h2>Dr. Rupesh Tholia</h2>
                              <p>AIR 3 | NEET PG 2023</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial 3 */}
                <div
                  style={{ flexShrink: 0, scrollSnapAlign: "start" }}
                  className="scrollCarousel_scrollList__NkW5l"
                >
                  <div className="scrollCarousel_scrollCarousel-main__y8UET">
                    <div className="home_card__nsPWB">
                      <div className="home_card_inner__cGBPs bg-gray">
                        <div className="home_card_inner_top__7MmOI">
                          <p>
                            I frequently attempted mock tests on the ScholarSense
                            app to assess my strengths and weaknesses. The Rapid
                            Revision helps you revise easily within a hectic
                            schedule.
                          </p>
                        </div>
                        <div className="">
                          <div className="home_divider1__v7rNd divider1"></div>
                          <div className="home_sub_card__5i_E7">
                            <div className="home_sub_card_left__PY0hu">
                              <img
                                className=""
                                src="https://image.prepladder.com/content/Dr.Prem.webp"
                                alt="Dr. Prem Thilak"
                              />
                            </div>
                            <div className="home_sub_card_right__HwcAG">
                              <h2>Dr. Prem Thilak</h2>
                              <p>AIR 2 | NEET PG 2023</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial 4 */}
                <div
                  style={{ flexShrink: 0, scrollSnapAlign: "start" }}
                  className="scrollCarousel_scrollList__NkW5l"
                >
                  <div className="scrollCarousel_scrollCarousel-main__y8UET">
                    <div className="home_card__nsPWB">
                      <div className="home_card_inner__cGBPs bg-gray">
                        <div className="home_card_inner_top__7MmOI">
                          <p>
                            Build your concepts with the videos first and for
                            the last days before the examination, rapid revision
                            videos are great. Attempt Grand Tests, solve MCQs,
                            and make custom modules to practice & find your
                            weaknesses so you can accordingly plan your studies.
                          </p>
                        </div>
                        <div className="">
                          <div className="home_divider1__v7rNd divider1"></div>
                          <div className="home_sub_card__5i_E7">
                            <div className="home_sub_card_left__PY0hu">
                              <img
                                className=""
                                src="https://image.prepladder.com/content/Dr.Rupesh.webp"
                                alt="Dr. Rupesh Tholia"
                              />
                            </div>
                            <div className="home_sub_card_right__HwcAG">
                              <h2>Dr. Rupesh Tholia</h2>
                              <p>AIR 3 | NEET PG 2023</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="scrollCarousel_scrollList-arrow__NhnEY scrollCarousel_arrowTopRight__nge_u">
                <button
                  onClick={() => handleScroll("left")}
                  className="scrollCarousel_scrollCarousel-btn__GKAkw scrollCarousel_scrollCarousel-prev__gCJLD"
                >
                  <img
                    src="https://image.prepladder.com/content/4zYidL1O3SocyUtFrzem1709702955.svg"
                    alt="icon"
                  />
                </button>
                <button
                  onClick={() => handleScroll("right")}
                  className="scrollCarousel_scrollCarousel-btn__GKAkw scrollCarousel_scrollCarousel-next__2RMB4"
                >
                  <img
                    src="https://image.prepladder.com/content/4zYidL1O3SocyUtFrzem1709702955.svg"
                    alt="icon"
                  />
                </button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </section>

      <div className="blogs1_blognew_examGuide__cQ0ZA">
        <div className="container">
          <div className="blogs1_blognew_common-hed___Ge0D">
            <h2>Exam Guide</h2>
            <p>Access all the resources you need to ace NEET-PG Preparation</p>
          </div>
          <div className="blogs1_blognew_examGuide--list__tn72d">
            <ul>
              <li className="blogs1_blognew_green__Pvhg8">
                <div className="blogs1_z-index-1__eZjrS relative">
                  <a
                    className=""
                    title="Exam Pattern"
                    href="/examPattern"
                  >
                    <h2>Exam Pattern</h2>
                    <p>
                      Subject, Questions, Marks - everything you need to know
                    </p>
                  </a>
                </div>
              </li>
              <li className="blogs1_blognew_yellow__Gug9Q">
                <div className="blogs1_z-index-1__eZjrS relative">
                  <a
                    className=""
                    title="Syllabus"
                    href="/"
                  >
                    <h2>Syllabus</h2>
                    <p>Everything you need to study for NEET-PG</p>
                  </a>
                </div>
              </li>
              <li className="blogs1_blognew_blue___uXYj">
                <div className="blogs1_z-index-1__eZjrS relative">
                  <a
                    className=""
                    title="Exam Eligibility"
                    href="/examEligibilty"
                  >
                    <h2>Exam Eligibility</h2>
                    <p>Who can appear for the NEET-PG exam</p>
                  </a>
                </div>
              </li>
            </ul>
            <ul>
              <li className="blogs1_blognew_green__Pvhg8">
                <div className="blogs1_z-index-1__eZjrS relative">
                  <a
                    className=""
                    title="Preparation Strategy"
                    href="/preparationStrategy"
                  >
                    <h2>Preparation Strategy</h2>
                    <p>Find out how to ace NEET-PG</p>
                  </a>
                </div>
              </li>
              <li className="blogs1_blognew_yellow__Gug9Q">
                <div className="blogs1_z-index-1__eZjrS relative">
                  <a
                    className=""
                    title="Previous Years Papers"
                    href="/previousYearsQA"
                  >
                    <h2>Previous Years Papers</h2>
                    <p>Find out how to prepare for the future</p>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
       <LatestArticles />

      <div className="blogs1_blognew_faqs__9xFrF bg-gray">
        <div className="container">
          <div className="blogs1_blognew_faqs--inner__w73Qa">
            <div
              className="blogs1_blognew_common-hed___Ge0D blogs1_blognew_faqs--left__3mLky"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className="blogs1_faqsImg__YLBhe"
                src="https://image.prepladder.com/content/oNXL2Guq5WTi4eQbcTdo1667538458.svg"
                alt="img"
                loading="lazy"
                decoding="async"
              />
              <h2 style={{ marginLeft: "10px" }}>Frequently asked question</h2>
            </div>
            <div className="blogs1_blognew_faqs--right__VCJGj">
              <ul>
                <li>
                  <input type="checkbox" id="faq0" />
                  <label htmlFor="faq0">
                    <h2>
                      <strong>What is NEET PG ?</strong>
                    </h2>
                    <img
                      src="https://image.prepladder.com/content/iIIogvP6IqhIeimkMrzK1655805750.svg"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </label>
                  <div className="blogs1_blogfaq_content__GvsN_">
                    <div className="blogs1_blogfaq_content--inner__XcWU3">
                      <p>
                        NEET PG or National Eligibility cum Entrance Test
                        (Postgraduate) is a qualifying examination for students
                        who seek to gain admission into a PG course at a
                        government or private medical college. The courses
                        include Doctor of Medicine, Master of Surgery and
                        diploma courses. The NBE or National Board Examination
                        conducts this entrance test for all the students who
                        have completed their MBBS.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <input type="checkbox" id="faq1" />
                  <label htmlFor="faq1">
                    <h2>
                      <strong>Is NEET PG tough ?</strong>
                    </h2>
                    <img
                      src="https://image.prepladder.com/content/iIIogvP6IqhIeimkMrzK1655805750.svg"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </label>
                  <div className="blogs1_blogfaq_content__GvsN_">
                    <div className="blogs1_blogfaq_content--inner__XcWU3">
                      <p>
                        NEET PG is indeed a challenging and incredibly
                        competitive exam. The vastness of the exam syllabus
                        further adds to the difficulty level of the test.
                        Therefore, aspirants require a strong{" "}
                        <a href="/your-link">preparation strategy</a> and
                        reliable learning resources to achieve success.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <input type="checkbox" id="faq2" />
                  <label htmlFor="faq2">
                    <h2>
                      <strong>How to prepare for NEET PG ?</strong>
                    </h2>
                    <img
                      src="https://image.prepladder.com/content/iIIogvP6IqhIeimkMrzK1655805750.svg"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </label>
                  <div className="blogs1_blogfaq_content__GvsN_">
                    <div className="blogs1_blogfaq_content--inner__XcWU3">
                      <p>
                        You can prepare for NEET PG online with the help of
                        PrepLadder app. The app offers engaging video lectures
                        and comprehensive notes of all 19 subjects by India’s
                        top medical faculty. In addition to that, you also get
                        access to PYQs and a vast QBank for practicing MCQs.
                        Explore now.
                      </p>
                    </div>
                  </div>
                </li>
                {/* Similar list items for other FAQs */}
                <li>
                  <input type="checkbox" id="faq3" />
                  <label htmlFor="faq3">
                    <h2>
                      <strong>How many attempts for NEET PG ?</strong>
                    </h2>
                    <img
                      src="https://image.prepladder.com/content/iIIogvP6IqhIeimkMrzK1655805750.svg"
                      alt="img"
                      loading="lazy"
                      decoding="async"
                    />
                  </label>
                  <div className="blogs1_blogfaq_content__GvsN_">
                    <div className="blogs1_blogfaq_content--inner__XcWU3">
                      <p>
                        The NBE has not put a limit on the number of attempts
                        for NEET PG. And there is no defined age limit as well.
                        A candidate can appear for as many times as required to
                        secure admission to his preferred institute or course.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <input type="checkbox" id="faq4" />
                  <label htmlFor="faq4">
                    <h2>
                      <strong>How to crack NEET PG in first attempt ?</strong>
                    </h2>
                    <img
                      src="https://image.prepladder.com/content/iIIogvP6IqhIeimkMrzK1655805750.svg"
                      alt="img"
                      loading="lazy"
                      decoding="async"
                    />
                  </label>
                  <div className="blogs1_blogfaq_content__GvsN_">
                    <div className="blogs1_blogfaq_content--inner__XcWU3">
                      <p>
                        <a href="neet-pg-study-material/how-to-prepare-for-neet-pg-at-home">
                          Cracking NEET PG
                        </a>{" "}
                        in the first attempt requires an effective strategy and
                        reliable study resources. ScholarSense offers you both.
                        You get to learn from elucidating video lectures and
                        self-explanatory ScholarNotes. Besides, you also get access
                        to a vast QBank with high-yield questions. And, you can
                        always rely on expert guidance, preparation tips and
                        strategy from our Dream Team.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <input type="checkbox" id="faq5" />
                  <label htmlFor="faq5">
                    <h2>
                      <strong>How many questions in NEET PG ?</strong>
                    </h2>
                    <img
                      src="https://image.prepladder.com/content/iIIogvP6IqhIeimkMrzK1655805750.svg"
                      alt="img"
                      loading="lazy"
                      decoding="async"
                    />
                  </label>
                  <div className="blogs1_blogfaq_content__GvsN_">
                    <div className="blogs1_blogfaq_content--inner__XcWU3">
                      <p>
                        As per the latest NEET PG exam pattern, a total of 200
                        multiple choice questions will be asked in the exam. You
                        can read our detailed{" "}
                        <a href="https://www.prepladder.com/neet-pg-study-material/exam-pattern/neet-pg-marks-distribution-latest-exam-pattern">
                          {" "}
                          blog{" "}
                        </a>{" "}
                        to understand the exam pattern and marks distribution.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <input type="checkbox" id="faq6" />
                  <label htmlFor="faq6">
                    <h2>
                      <strong>
                        Which is the best medical PG preparation app ?
                      </strong>
                    </h2>
                    <img
                      src="https://image.prepladder.com/content/iIIogvP6IqhIeimkMrzK1655805750.svg"
                      alt="img"
                      loading="lazy"
                      decoding="async"
                    />
                  </label>
                  <div className="blogs1_blogfaq_content__GvsN_">
                    <div className="blogs1_blogfaq_content--inner__XcWU3">
                      <p>
                        ScholarSense is one of the best medical PG preparation
                        apps with an incredible track record. Our NEET PG strike
                        rate is 96% and we have been a part of several topper’s
                        preparation journeys. And, we help you learn with
                        India’s top medical PG faculty.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <input type="checkbox" id="faq7" />
                  <label htmlFor="faq7">
                    <h2>
                      <strong>How to prepare for NEET PG in 6 months ?</strong>
                    </h2>
                    <img
                      src="https://image.prepladder.com/content/iIIogvP6IqhIeimkMrzK1655805750.svg"
                      alt="img"
                      loading="lazy"
                      decoding="async"
                    />
                  </label>
                  <div className="blogs1_blogfaq_content__GvsN_">
                    <div className="blogs1_blogfaq_content--inner__XcWU3">
                      <p>
                        Time is precious especially when you are preparing for
                        such an important exam. Following are a few tips to help
                        you prepare for NEET PG in 6 months-
                      </p>
                      <ul>
                        <li>Know the exam syllabus & pattern</li>
                        <li>Have a proper strategy</li>
                        <li>Develop a study schedule & follow it</li>
                        <li>Focus on practicing MCQs daily</li>
                        <li>Revise</li>
                        <li>Take mock tests to assess your preparation</li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
