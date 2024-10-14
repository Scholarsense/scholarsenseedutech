import React, { useState } from "react";


export default function Plan() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeFAQIndex, setActiveFAQIndex] = useState(null);

  const categories = [
    'General',
    'Packages & Subscriptions',
    'Earned Rewards',
    'Booking',
    'QBank',
    'Videos',
    'Tests',
    'Notes',
  ];

  const toggleFAQ = (index) => {
    setActiveFAQIndex(activeFAQIndex === index ? null : index);
  };
  
  
  const faqData = [
    {
      category: 'General',
      faqs: [
        { question: 'What is ScholarSense?', answer: 'ScholarSense is an online learning platform.' },
        { question: 'How can I sign up?', answer: 'You can sign up by clicking the sign-up button on the homepage.' },
      ],
    },
    {
      category: 'Packages & Subscriptions',
      faqs: [
        { question: 'What packages are available?', answer: 'We offer various packages tailored to different needs.' },
        { question: 'Can I change my subscription?', answer: 'Yes, you can upgrade or downgrade your subscription.' },
      ],
    },
    // More categories...
  ];
  return (
    <div>
      <div id="banner" className="bannerPlan_bannerPlan__lnSY5 undefined">
        <div className="bannerPlan_bannerPlan-left___Y6Dd">
          <img
            alt="image"
            src="https://image.prepladder.com/content/3tbUnSJcpLKl4bEwjzP51676977566.png"
          />
        </div>
        <div className="bannerPlan_bannerPlan-right__Ctc_I">
          <img
            alt="image"
            src="https://image.prepladder.com/content/qDESYppaNK09NLO0U1Zz1676977524.png"
          />
        </div>
        <div className="container newPlan-container">
          <div className="row flex flex-wrap items-center">
            <div className="bannerPlan_bannerPlan-content__8UvLB col col-6 md-col-12">
              <div className="bannerPlan_bannerPlan-inline__jIYQG">
                <h1>
                  <div className="bannerPlan_bannerPlan-subtitle__2ZXKT"></div>
                  <div className="bannerPlan_bannerPlan-title__c4YEe">
                    Secure Your Success in Medical PG Exam
                  </div>
                </h1>
              </div>
              <p>
                Access concise, high-yield, and proven effective content that
                will make you exam-ready.
              </p>
              <ul className="bannerPlan_bannerPlan-feature__pTvGj">
                <li>
                  <span>
                    <img
                      alt="icon"
                      src="https://image.prepladder.com/content/xUg8vUosh8gga2pToP1B1676977791.png"
                    />
                  </span>
                  <div>
                    Dream Team featuring Dr Deepak Marwah, Dr Preeti Sharma
                    &amp; more
                  </div>
                </li>
                <li>
                  <span>
                    <img
                      alt="icon"
                      src="https://image.prepladder.com/content/UCIu4cneDRrTU7EKK1aH1688105882.png"
                    />
                  </span>
                  <div>QBank 6.0 featuring 18,000+ MCQs including PYQs</div>
                </li>
                <li>
                  <span>
                    <img
                      alt="icon"
                      src="https://image.prepladder.com/content/KsrB1mGu8xFfS0bkmvTT1688105921.png"
                    />
                  </span>
                  <div>Notes 6.0 - Our best notes ever</div>
                </li>
                <li>
                  <span>
                    <img
                      alt="icon"
                      src="https://image.prepladder.com/content/X453vMDPlVgt70rKLd2M1688105944.png"
                    />
                  </span>
                  <div>Test Series based on updated exam pattern</div>
                </li>
              </ul>
            </div>
            <div className="col col-6 md-col-12">
              <div className="planForm_plan-form__FKCfw">
                <div>
                  <form>
                    <div className="blogImg">
                      <img alt="banner" />
                    </div>
                    <div className="plans_plan-form-head__rEy0C bgblur-form-head">
                      Access 24 Hour FREE Trial
                    </div>
                    <div className="plans_plan-form-enroll__trH__ mb2">
                      Get Video Lectures, QBank &amp; Mock Tests for Free{" "}
                    </div>
                    <div className="marketingform-margin">
                      <div className="mb1 marketingform-input plan-inline">
                        <div className="marketingform-inner">
                          <div className="plans_plan-form-label__iykKv bgblur-form-label">
                            Phone number
                          </div>
                          <div className="plans_plan-form-phone__bkOaT flex marketingform-inputFiled">
                            <div className="countryCode_customContrycodeCss__fdEBD countryCode_CountryCode01__poc7N">
                              <div className="countryCode_CountryCode01_inner__Tmkwa">
                                <div
                                  className="countryCode_CountryCode01_form__vOC5g marketing-bg"
                                  method="post"
                                >
                                  <div className="countryCode_codeLabel__d1w4a flex items-center">
                                    <div className="countryCode_countryFlags__StAQb">
                                      <img
                                        src="https://image.prepladder.com/content/Pkkswnm7xW5auWwyhDIX1617863781.png"
                                        alt=""
                                      />
                                    </div>
                                    <span>+91</span>
                                    <img
                                      style={{
                                        maxWidth: "1.7rem",
                                        marginLeft: "0.6rem",
                                      }}
                                      className="footernew_codeLabel_img__PQ1xX"
                                      src="https://image.prepladder.com/content/iIIogvP6IqhIeimkMrzK1655805750.svg"
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="countryCode_codeInput__p44pH">
                                    <input
                                      maxLength="10"
                                      type="text"
                                      name="phone"
                                      placeholder="Enter Phone Number"
                                      autoComplete="off"
                                      value=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="login_loginWhatsapp__6pBNb flex items-center">
                      <input
                        type="checkbox"
                        name="whatsapp-otp"
                        id="whatsapp-check"
                      />
                      <label htmlFor="whatsapp-check">
                        <span></span>
                        <p className="marketingform-text">
                          Get OTP via Whatsapp
                        </p>
                      </label>
                    </div>
                    <button
                      disabled=""
                      className="btn-1 btn-enroll mt3 mb2 bgblur-btn"
                    >
                      Continue
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featurePlan_featurePlan__Bmt4U">
        <div className="container">
          <div className="row flex items-center flex-wrap">
            <div className="col col-6 md-col-12">
              <img
                alt="image"
                src="https://image.prepladder.com/content/WLp3BQr5NZVmN6jQT1Z71708685196.webp"
              />
            </div>
            <div className="col col-6 md-col-12">
              <div>
                <p>The go-to App for</p>
                <div className="featurePlan_featurePlan-head__o7mmd">
                  {" "}
                  5 lakh+ learners <span>with </span>
                </div>
                <ul>
                  <li>
                    <img
                      loading="lazy"
                      alt="image"
                      src="https://image.prepladder.com/content/cJKJsTyHUm8b1EgBQki11682416176.webp"
                    />
                    <div>
                      <strong>96% </strong> Strike Rate in NEET PG ‘23
                    </div>
                  </li>
                  <li>
                    <img
                      loading="lazy"
                      alt="image"
                      src="https://image.prepladder.com/content/cJKJsTyHUm8b1EgBQki11682416176.webp"
                    />
                    <div>
                      <strong>QBank 6.0 featuring 18,000+ MCQs</strong>
                    </div>
                  </li>
                  <li>
                    <img
                      loading="lazy"
                      alt="image"
                      src="https://image.prepladder.com/content/cJKJsTyHUm8b1EgBQki11682416176.webp"
                    />
                    <div>
                      <strong>Conceptual Video Lectures</strong> by Dream Team
                    </div>
                  </li>
                  <li>
                    <img
                      loading="lazy"
                      alt="image"
                      src="https://image.prepladder.com/content/cJKJsTyHUm8b1EgBQki11682416176.webp"
                    />
                    <div>
                      <strong>Test series </strong> based on the latest exam
                      pattern
                    </div>
                  </li>
                  <li>
                    <img
                      loading="lazy"
                      alt="image"
                      src="https://image.prepladder.com/content/cJKJsTyHUm8b1EgBQki11682416176.webp"
                    />
                    <div>
                      <strong> Notes 6.0 - </strong>Our best notes ever
                    </div>
                  </li>
                  <li>
                    <img
                      loading="lazy"
                      alt="image"
                      src="https://image.prepladder.com/content/cJKJsTyHUm8b1EgBQki11682416176.webp"
                    />
                    <div>
                      <strong>Treasures,</strong> a concise summary of a topic
                      for quick revision.
                    </div>
                  </li>
                  <li>
                    <img
                      loading="lazy"
                      alt="image"
                      src="https://image.prepladder.com/content/cJKJsTyHUm8b1EgBQki11682416176.webp"
                    />
                    <div>
                      <strong>Custom Module,</strong> which enables you to
                      practice what and how you want.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="plans">
        <div className="packPlan_packPlan-main__gIFdx">
          <div className="container">
            <div className="planHead_planMain-head__u_x3U center mob-text-left">
              Finest Study Material to Excel in FMGE
            </div>
            <div className="planHead_planMain-subhead__mpkfj center mob-text-left">
              Enrol to a plan that suits you best
            </div>
            <div className="packPlan_packPlan__sFlwy scrollCarousel_scrollCarousel-plan__yzKsK packPlan-slide">
              <div>
                <div className="scrollCarousel_scrollList-main__VGGht">
                  <div
                    className="scrollCarousel_scrollCarousel-inner__0htoc"
                    style={{
                      position: "relative",
                      display: "flex",
                      overflow: "auto",
                      scrollSnapType: "x mandatory",
                    }}
                  >
                    <div
                      className="scrollCarousel_scrollList__NkW5l"
                      style={{ flexShrink: 0, scrollSnapAlign: "start" }}
                    >
                      <div className="scrollCarousel_scrollCarousel-main__y8UET">
                        <div className="pt2">
                          <div className="packPlan_packPlan-inner__lk19e packPlan_packPlan-pro__i7OPx">
                            <div
                              className="packPlan_packPlan-innerbg__21NtN packPlan_packPlan-proBg__Iv0WJ flex justify-between"
                              style={{ background: "rgb(255, 238, 195)" }}
                            >
                              <div className="packPlan_packPlan-pack__cBr_S flex">
                                <img
                                  alt="image"
                                  src="https://image.prepladder.com/content/tbef3Njq1jXRtwQ9zjp81677222211.png"
                                />
                                <div>
                                  <p>ELITE Plan</p>
                                  <span>Cut The Noise</span>
                                </div>
                              </div>
                              <div
                                className="packPlan_packPlan-off__HDvJJ packPlan_packPlan-proOff__zpRRo"
                                style={{ color: "rgb(255, 194, 127)" }}
                              >
                                Login now to view the best prices
                              </div>
                              <div className="packPlan_packPlan-recommend__fRbR4">
                                <span
                                  style={{ background: "rgb(255, 173, 59)" }}
                                >
                                  RECOMMENDED
                                </span>
                              </div>
                            </div>
                            <div className="packPlan_packPlan-bottom__FSnAp">
                              <div>
                                <p>WHAT YOU'LL GET</p>
                                <ul>
                                  <li>
                                    <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                      <img
                                        alt="image"
                                        src="https://image.prepladder.com/content/Check_Orange.png"
                                      />
                                    </div>
                                    <div className="packPlan_packPlan-bottomText___zHDO">
                                      Conceptual Video Lectures
                                    </div>
                                  </li>
                                  <li>
                                    <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                      <img
                                        alt="image"
                                        src="https://image.prepladder.com/content/Check_Orange.png"
                                      />
                                    </div>
                                    <div className="packPlan_packPlan-bottomText___zHDO">
                                      18000+ questions including clinical,
                                      one-liners & PYQs
                                    </div>
                                  </li>
                                  <li>
                                    <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                      <img
                                        alt="image"
                                        src="https://image.prepladder.com/content/Check_Orange.png"
                                      />
                                    </div>
                                    <div className="packPlan_packPlan-bottomText___zHDO">
                                      1500+ summary charts in the form of
                                      treasures
                                    </div>
                                  </li>
                                  <li>
                                    <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                      <img
                                        alt="image"
                                        src="https://image.prepladder.com/content/Check_Orange.png"
                                      />
                                    </div>
                                    <div className="packPlan_packPlan-bottomText___zHDO">
                                      12 Mock Tests with 1 lakh participants
                                    </div>
                                  </li>
                                  <li>
                                    <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                      <img
                                        alt="image"
                                        src="https://image.prepladder.com/content/Check_Orange.png"
                                      />
                                    </div>
                                    <div className="packPlan_packPlan-bottomText___zHDO">
                                      Option to buy hard copy notes with space
                                      to annotate
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <button className="btn-custom width-100">
                                  Signup / Login
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="scrollCarousel_scrollList__NkW5l"
                      style={{ flexShrink: 0 }}
                    >
                      <div className="scrollCarousel_scrollCarousel-main__y8UET">
                        <div className="pt2">
                          <div className="packPlan_packPlan-inner__lk19e packPlan_packPlan-pro__i7OPx">
                            <div
                              className="packPlan_packPlan-innerbg__21NtN packPlan_packPlan-proBg__Iv0WJ flex justify-between"
                              style={{ background: "rgb(231, 244, 255)" }}
                            >
                              <div className="packPlan_packPlan-pack__cBr_S flex">
                                <img
                                  alt="image"
                                  src="https://image.prepladder.com/content/9C69qyVdOjoqIXG0kL7S1688099657.png"
                                />
                                <div>
                                  <p>PRO Plan</p>
                                  <span>India's Only Clinical QBank</span>
                                </div>
                              </div>
                              <div
                                className="packPlan_packPlan-off__HDvJJ packPlan_packPlan-proOff__zpRRo"
                                style={{ color: "rgb(122, 139, 148)" }}
                              >
                                Login now to view the best offers
                              </div>
                            </div>
                            <div className="packPlan_packPlan-bottom__FSnAp">
                              <div>
                                <p>WHAT YOU'LL GET</p>
                                <ul>
                                  <li>
                                    <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                      <img
                                        alt="image"
                                        src="https://image.prepladder.com/content/Check_Blue.png"
                                      />
                                    </div>
                                    <div className="packPlan_packPlan-bottomText___zHDO">
                                      QBank 6.0 featuring 18,000+ questions
                                    </div>
                                  </li>
                                  <li>
                                    <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                      <img
                                        alt="image"
                                        src="https://image.prepladder.com/content/Check_Blue.png"
                                      />
                                    </div>
                                    <div className="packPlan_packPlan-bottomText___zHDO">
                                      Test Series with 1 Lakh+ Participants.
                                    </div>
                                  </li>
                                  <li>
                                    <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                      <img
                                        alt="image"
                                        src="https://image.prepladder.com/content/Check_Blue.png"
                                      />
                                    </div>
                                    <div className="packPlan_packPlan-bottomText___zHDO">
                                      Previous Year Questions
                                    </div>
                                  </li>
                                  <li>
                                    <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                      <img
                                        alt="image"
                                        src="https://image.prepladder.com/content/Check_Blue.png"
                                      />
                                    </div>
                                    <div className="packPlan_packPlan-bottomText___zHDO">
                                      Previous Year Questions
                                    </div>
                                  </li>
                                  <li>
                                    <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                      <img
                                        alt="image"
                                        src="https://image.prepladder.com/content/Check_Blue.png"
                                      />
                                    </div>
                                    <div className="packPlan_packPlan-bottomText___zHDO">
                                      Previous Year Questions
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div><button className="btn-custom width-100">Signup / Login</button></div>
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
      <div className="planCompare_planCompare__xKswE bg-lightgreen">
      <div className="container">
        <div className="planHead_planMain-head__u_x3U pb6">Plans Comparison</div>
        <table>
          <thead>
            <tr>
              <td>
                Benefits you'll get
                <div className="planCompare_dash-labels__IslGR">
                  <label htmlFor="diff-1">
                    <input type="checkbox" id="diff-1" name="diff_level" value="1" />
                    <span className="planCompare_dash-labels-check__Gbx5E"></span>
                    <span>
                      <div className="planCompare_dash-labels_head__TLLT8">Hide common features</div>
                    </span>
                  </label>
                </div>
              </td>
              <td>
                <div>
                  <img alt="ELITE" src="https://image.prepladder.com/content/A4m6lfZVEkZ9Cf6kbAYD1687947303.png" />
                  ELITE
                </div>
              </td>
              <td>
                <div>
                  <img alt="PRO" src="https://image.prepladder.com/content/DJAAPCegon765PA4h8cv1677066788.png" />
                  PRO
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
  <tr>
    <th colspan="3">QBank</th>
  </tr>
  <tr>
    <td>
      <div className="planCompare_planCompare-hover__e4P7D">
        <div className="planCompare_planCompare-border__o3qrw">QBank 6.0</div>
        <div className="planCompare_planCompare-hoverImg__JS4JO planCompare_planCompare-hoverImg-bottom__BwbmK">
          <img loading="lazy" alt="image" src="https://image.prepladder.com/content/YRgEXfS5j8MW0rXUet1Y1688104528.webp" />
          QBank 6.0 - India's only clinical QBank
        </div>
      </div>
    </td>
    <td>
      <img loading="lazy" alt="image" src="https://image.prepladder.com/content/tBVs3bCjJfIYjBijd0hY1677485276.png" />
    </td>
    <td>
      <img loading="lazy" alt="image" src="https://image.prepladder.com/content/tBVs3bCjJfIYjBijd0hY1677485276.png" />
    </td>
  </tr>
  <tr>
    <td>
      <div className="planCompare_planCompare-hover__e4P7D">
        <div className="planCompare_planCompare-border__o3qrw">Past Year Questions</div>
        <div className="planCompare_planCompare-hoverImg__JS4JO planCompare_planCompare-hoverImg-bottom__BwbmK">
          <img loading="lazy" alt="image" src="https://image.prepladder.com/content/lXSvwHTUzvuKPSX0NjHD1688042259.webp" />
          Past Year Questions
        </div>
      </div>
    </td>
    <td>
      <img loading="lazy" alt="image" src="https://image.prepladder.com/content/tBVs3bCjJfIYjBijd0hY1677485276.png" />
    </td>
    <td>
      <img loading="lazy" alt="image" src="https://image.prepladder.com/content/tBVs3bCjJfIYjBijd0hY1677485276.png" />
    </td>
  </tr>
  <tr>
    <td>
      <div className="planCompare_planCompare-hover__e4P7D">
        <div className="planCompare_planCompare-border__o3qrw">Rapid Revision QBank</div>
        <div className="planCompare_planCompare-hoverImg__JS4JO planCompare_planCompare-hoverImg-bottom__BwbmK">
          <img loading="lazy" alt="image" src="https://image.prepladder.com/content/kIsb9fMDIGTLzJuc5uAD1688043188.webp" />
          Rapid Revision QBank
        </div>
      </div>
    </td>
    <td>
      <img loading="lazy" alt="image" src="https://image.prepladder.com/content/tBVs3bCjJfIYjBijd0hY1677485276.png" />
    </td>
    <td>
      <img loading="lazy" alt="image" src="https://image.prepladder.com/content/tBVs3bCjJfIYjBijd0hY1677485276.png" />
    </td>
  </tr>
  <tr>
    {/* Video category */}
    <th colspan="3">Videos</th>
  </tr>
  <tr>
    <td>
      <div className="planCompare_planCompare-hover__e4P7D">
        <div className="planCompare_planCompare-border__o3qrw">Video Lectures</div>
        <div className="planCompare_planCompare-hoverImg__JS4JO planCompare_planCompare-hoverImg-bottom__BwbmK">
          <img loading="lazy" alt="image" src="https://image.prepladder.com/content/A0AvIEles6RrDOQYfKLR1688042330.webp" />
          Video Lectures
        </div>
      </div>
    </td>
    <td>
      <img loading="lazy" alt="image" src="https://image.prepladder.com/content/tBVs3bCjJfIYjBijd0hY1677485276.png" />
    </td>
    <td>
      <img loading="lazy" alt="image" src="https://image.prepladder.com/content/av16JisJW6xTBQQVEGYC1688042089.png" />
    </td>
  </tr>
  {/* Add more rows for Videos category */}
  <tr>
    {/* Tests category */}
    <th colspan="3">Tests</th>
  </tr>
  <tr>
    <td>
      <div className="planCompare_planCompare-hover__e4P7D">
        <div className="planCompare_planCompare-border__o3qrw">Mock tests</div>
        <div className="planCompare_planCompare-hoverImg__JS4JO planCompare_planCompare-hoverImg-bottom__BwbmK">
          <img loading="lazy" alt="image" src="https://image.prepladder.com/content/YTs5LazIwf4r19Va3syi1688042588.webp" />
          Mock tests
        </div>
      </div>
    </td>
    <td>
      <img loading="lazy" alt="image" src="https://image.prepladder.com/content/tBVs3bCjJfIYjBijd0hY1677485276.png" />
    </td>
    <td>
      <img loading="lazy" alt="image" src="https://image.prepladder.com/content/tBVs3bCjJfIYjBijd0hY1677485276.png" />
    </td>
  </tr>
  {/* Add more rows for Tests category */}
  <tr>
    {/* Miscellaneous category */}
    <th colspan="3">Miscellaneous</th>
  </tr>
  <tr>
    <td>
      <div className="planCompare_planCompare-hover__e4P7D">
        <div className="planCompare_planCompare-border__o3qrw">Custom Module</div>
        <div className="planCompare_planCompare-hoverImg__JS4JO planCompare_planCompare-hoverImg-bottom__BwbmK">
          <img loading="lazy" alt="image" src="https://image.prepladder.com/content/kxtL3Xe8kZuXaNZYIDTa1688042749.webp" />
          Custom Module
        </div>
      </div>
    </td>
    <td>
      <img loading="lazy" alt="image" src="https://image.prepladder.com/content/tBVs3bCjJfIYjBijd0hY1677485276.png" />
    </td>
    <td>
      <img loading="lazy" alt="image" src="https://image.prepladder.com/content/tBVs3bCjJfIYjBijd0hY1677485276.png" />
    </td>
  </tr>
</tbody>

          <tfoot>
            <tr>
              <td>
                <div className="planCompare_planCompare-hover__e4P7D">
                  <div className="">Unlock starting price</div>
                </div>
              </td>
              <td>
                <button className="btn-custom inline-block" text="Login" href="">
                  Login
                </button>
              </td>
              <td>
                <button className="btn-custom inline-block" text="Login" href="">
                  Login
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
   
    <div className="py6">
  <div className="planTopper_planTopper-inner__u4lxC container">
    <div className="mb5">
      <div className="planTopper_planTopper-icon__3RtQL">
        <img alt="image" src="https://image.prepladder.com/content/73YYgbpxy0tDn8qEiuEY1682416621.webp" />
      </div>
      <div className="planHead_planMain-head__u_x3U">FMGE Jan 2024 Toppers of PrepLadder</div>
      <div className="planHead_planMain-subhead__mpkfj">Our exceptional result with 96.4% strike rate proves once again that PrepLadder is the best platform for FMGE preparation with the top & most experienced faculty</div>
    </div>
    <div className="planTopper_planTopper-row__AHNi2 row flex flex-wrap">
      {/* Toppers */}
      <div>
        <div className="planTopper_planTopper-wrap__wJBgs">
          <div className="planTopper_planTopper-bg__WTAnx">
            <img loading="lazy" alt="image" src="https://image.prepladder.com/content/238-Dr. Aadi.webp" />
          </div>
          <div className="planTopper_planTopper-ribbon__d2rQ5">
            <img loading="lazy" alt="image" src="https://image.prepladder.com/content/T5VB8txzdU0X0iVZKVXf1682416692.webp" />
            <div>
              <div>238<span>SCORE</span></div>
            </div>
          </div>
        </div>
        <p>Dr. Aadi Morakhia</p>
      </div> 
      <div>
        <div className="planTopper_planTopper-wrap__wJBgs">
          <div className="planTopper_planTopper-bg__WTAnx">
            <img loading="lazy" alt="image" src="https://image.prepladder.com/content/238-Dr. Aadi.webp" />
          </div>
          <div className="planTopper_planTopper-ribbon__d2rQ5">
            <img loading="lazy" alt="image" src="https://image.prepladder.com/content/T5VB8txzdU0X0iVZKVXf1682416692.webp" />
            <div>
              <div>238<span>SCORE</span></div>
            </div>
          </div>
        </div>
        <p>Dr. Aadi Morakhia</p>
      </div> 
      <div>
        <div className="planTopper_planTopper-wrap__wJBgs">
          <div className="planTopper_planTopper-bg__WTAnx">
            <img loading="lazy" alt="image" src="https://image.prepladder.com/content/238-Dr. Aadi.webp" />
          </div>
          <div className="planTopper_planTopper-ribbon__d2rQ5">
            <img loading="lazy" alt="image" src="https://image.prepladder.com/content/T5VB8txzdU0X0iVZKVXf1682416692.webp" />
            <div>
              <div>238<span>SCORE</span></div>
            </div>
          </div>
        </div>
        <p>Dr. Aadi Morakhia</p>
      </div> 
      <div>
        <div className="planTopper_planTopper-wrap__wJBgs">
          <div className="planTopper_planTopper-bg__WTAnx">
            <img loading="lazy" alt="image" src="https://image.prepladder.com/content/238-Dr. Aadi.webp" />
          </div>
          <div className="planTopper_planTopper-ribbon__d2rQ5">
            <img loading="lazy" alt="image" src="https://image.prepladder.com/content/T5VB8txzdU0X0iVZKVXf1682416692.webp" />
            <div>
              <div>238<span>SCORE</span></div>
            </div>
          </div>
        </div>
        <p>Dr. Aadi Morakhia</p>
      </div> 
      
    </div> 
  </div>
</div>

<div className="topper_topper__jL3In bg-lightgreen">
      <div className="container">
        <div className="planHead_planMain-head__u_x3U">What Our Dreamers Say About Us</div>
        <div className="topper_topper-inner__x_XS8 topper_single-subjectTopper__mGJOT">
          <div className="row flex flex-wrap items-center">
            <div className="col col-6 md-col-12">
              <div className="topper_topper-video__RS4_4">
                <div className="topper_topper-videoImg__eNuF5">
                  <img src="https://image.prepladder.com/content/nkwmp2pxpWwrTp3lMNba1680601055.webp" loading="lazy" alt="image" />
                  <div className="topper_topper-videoIcon__iIJ_4 videoIcon">
                    <img src="https://image.prepladder.com/content/XCDI7mvtwM55zFIgPqVL1677483407.png" loading="lazy" alt="image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="topper_topper-right__2U478 col col-6 md-col-12">
              <img alt="image" src="https://image.prepladder.com/content/qz1ZD1iIF3Uec2jUC5UJ1677482976.png" />
              <div className="topper_topper-rightHead__5UwaA">PrepLadder Mock Tests helped me assess my strengths and weaknesses.</div>
              <div className="topper_topper-name__qTbd8">Dr. Prem Thilak<span> AIR 2 | NEET PG 2023</span></div>
            </div>
          </div>
        </div>
        <div>
          <div className="topper_stories__gJWxj">
            <h5 className="container">Meet Our Toppers</h5>
            <div className="topper_stories-container__u_Xoo container">
              <div className="topper_stories-auto__j2q1N row">
                {/* Repeat the following block for each topper */}
                <div className="col col-3 md-col-3">
                  <div className="topper_topper-video__RS4_4">
                    <div className="topper_topper-videoImg__eNuF5">
                      <img src="https://image.prepladder.com/content/gY2B8vRmiN5nZcdTumZP1680606343.webp" loading="lazy" alt="image" />
                      <div className="topper_topper-videoIcon__iIJ_4 videoIcon">
                        <img src="https://image.prepladder.com/content/ATzKauN6i5yyO0LUKMpJ1660304128.svg" loading="lazy" alt="image" className="smallbtn" />
                      </div>
                    </div>
                  </div>
                  <div className="topper_stories-head__PpC8z">Dr. Rupesh Tholia<span> AIR 3 | NEET PG 2023</span></div>
                </div>
                {/* End of repeated block */}
                <div className="col col-3 md-col-3">
                <div className="topper_topper-video__RS4_4">
                  <div className="topper_topper-videoImg__eNuF5">
                    <div>
                      <img
                        src="https://image.prepladder.com/content/htkZB0nSBWQ7YFxrU12y1680606389.webp"
                        loading="lazy"
                        alt="image"
                      />
                      <div className="topper_topper-videoIcon__iIJ_4 videoIcon">
                        <img
                          src="https://image.prepladder.com/content/ATzKauN6i5yyO0LUKMpJ1660304128.svg"
                          loading="lazy"
                          alt="image"
                          className="smallbtn"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="topper_stories-head__PpC8z">
                  Dr. Aakash Sethi <span> AIR 4 | NEET PG 2023</span>
                </div>
              </div>
              <div className="col col-3 md-col-3">
                <div className="topper_topper-video__RS4_4">
                  <div className="topper_topper-videoImg__eNuF5">
                    <div>
                      <img
                        src="https://image.prepladder.com/content/E61ECcPZLSGJBqzfQaPe1680606428.webp"
                        loading="lazy"
                        alt="image"
                      />
                      <div className="topper_topper-videoIcon__iIJ_4 videoIcon">
                        <img
                          src="https://image.prepladder.com/content/ATzKauN6i5yyO0LUKMpJ1660304128.svg"
                          loading="lazy"
                          alt="image"
                          className="smallbtn"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="topper_stories-head__PpC8z">
                  Dr. Ameya<span> AIR 5 | NEET PG 2023</span>
                </div>
              </div>
              <div className="col col-3 md-col-3">
                <div className="topper_topper-video__RS4_4">
                  <div className="topper_topper-videoImg__eNuF5">
                    <div>
                      <img
                        src="https://image.prepladder.com/content/hBAQa3LsBsbfEWj7kawi1680606523.webp"
                        loading="lazy"
                        alt="image"
                      />
                      <div className="topper_topper-videoIcon__iIJ_4 videoIcon">
                        <img
                          src="https://image.prepladder.com/content/ATzKauN6i5yyO0LUKMpJ1660304128.svg"
                          loading="lazy"
                          alt="image"
                          className="smallbtn"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="topper_stories-head__PpC8z">
                  Dr. Keshav Garg<span> AIR 6 | NEET PG 2023</span>
                </div>
              </div>
              </div>
            </div>
            <div className="container">
              <div className="topper_stories-btn__DYFY2">
                <a className="" title="Watch more success stories" href="https://www.youtube.com/playlist?list=PLJY0wCIFC-JgfWxFcFMAwOGO2rH_nhIHU">Watch more success stories</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="planFaq_planFaq__bVJSW">
      <div className="container">
        <div className="planFaq_planFaq-space__5lRXX qbankNext-head center mob-text-left">
          Frequently asked questions
        </div>
        <div className="row">
          <div className="planFaq_planFaq-list__KCS8n col col-3 md-col-4 sm-col-12">
            <div className="planFaq_planFaq_head__LOa9U">CATEGORIES</div>
            <ul>
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={
                    index === activeCategoryIndex
                      ? 'planFaq_planFaq_active__x3zHq'
                      : ''
                  }
                  onClick={() => setActiveCategoryIndex(index)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="col col-9 md-col-8 sm-col-12">
            <div className="planFaq_planFaq_right__5CjDo faq-collapse">
              {faqData && faqData[activeCategoryIndex] && faqData[activeCategoryIndex].faqs ? (
                faqData[activeCategoryIndex].faqs.map((faq, index) => (
                  <div className="Collapsible" key={index}>
                    <div>
                      <button
                        onClick={() => toggleFAQ(index)}
                        aria-controls={`react-collapsed-panel-${index}`}
                        aria-expanded={activeFAQIndex === index ? 'true' : 'false'}
                        type="button"
                        className="width-100"
                      >
                        <div className="Collapsible-inner">
                          <div className="planFaq_planFaq_para__IPlVR">
                            <p>{faq.question}</p>
                          </div>
                        </div>
                      </button>
                      <section
                        id={`react-collapsed-panel-${index}`}
                        aria-hidden={activeFAQIndex !== index ? 'true' : 'false'}
                        aria-labelledby={`react-collapsed-toggle-${index}`}
                        role="region"
                        style={{
                          boxSizing: 'border-box',
                          display: activeFAQIndex === index ? 'block' : 'none',
                          height: activeFAQIndex === index ? 'auto' : '0px',
                          overflow: 'hidden',
                        }}
                      >
                        <div className="planFaq_planFaq_content__5gDdo">
                          <div>{faq.answer}</div>
                        </div>
                      </section>
                    </div>
                  </div>
                ))
              ) : (
                <div>No FAQs available for this category.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}