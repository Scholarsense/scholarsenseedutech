import React from "react";
import HeaderAfterLogin from "../../HeaderAfterLogin";
import SettingSidebar from "../../SettingSidebar";
// import Slider from 'react-slick';

export default function ViewPlan() {
    const handleClick = () => {
        // Navigate to a new page here
        window.open('http://localhost:3000/settingHome', '_blank'); 
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
          </div>
        </div>
      </div>
      <div className="langchng">
        <div className="langchng_left flex1">
          <div className="flex justify-between items-center">
            <div className="dash-heading flex items-center">Choose a Plan</div>
          </div>
        </div>
      </div>
    </div>
    <div className="plan_plan__qiU9d">
      <div className="plan_plan-top__bMkm7">
        <div className="plan_plan-container__PtriL"></div>
        <div className="plan_plan-bgList__VuVQt"></div>
      </div>
      <div className="plan_plan-container__PtriL">
        <div className="plan_proPlans__oeEUr dash-white-box pl16 pr16 mobBorderRadiusNone">
          <div>
            <div className="plan_proPlans-tab-content__4Vdcv slider-margin">
              <div className="slick-slider slick-initialized" dir="ltr">
                <button
                  type="button"
                  data-role="none"
                  className="slick-arrow slick-prev slick-disabled"
                  style={{ display: 'block' }}
                >
                  Previous
                </button>
                <div className="slick-list">
                  <div
                    className="slick-track"
                    style={{
                      width: '1300px',
                      opacity: 1,
                      transform: 'translate3d(0px, 0px, 0px)',
                    }}
                  >
                    <div
                      data-index="0"
                      className="slick-slide slick-active slick-current"
                      tabIndex="-1"
                      aria-hidden="false"
                      style={{ outline: 'none', width: '325px',    margin: '10px' }}
                    >
                      <div>
                        <a
                          className="plan_proPlans-tab-content-col__Ijc7W"
                          tabIndex="-1"
                          href="/app/plans/251-elite+plan"
                          style={{ width: '100%', display: 'inline-block' }}
                        >
                          <div
                            className="plan_packPlan-dash__YotBz"
                            style={{ borderColor: 'rgb(255, 238, 195)' }}
                          >
                            <div
                              className="plan_packPlan-innerbg__8Zot5"
                              style={{ backgroundColor: 'rgb(255, 238, 195)' }}
                            >
                              <div className="plan_packPlan-pack__5h66P flex items-center">
                                <img
                                  src="https://image.prepladder.com/content/tbef3Njq1jXRtwQ9zjp81677222211.png"
                                  className="width-6rem mr1"
                                  alt=""
                                />
                                <div>
                                  <h2> ELITE Plan </h2>
                                  <h3>Cut The Noise</h3>
                                </div>
                              </div>
                              <div className="plan_packPlan-price__2DL6L">
                                <p>
                                  Starting at
                                  <img
                                    src="https://image.prepladder.com/content/gmlCEmrXhuDHa9aNp74l1678084839.png"
                                    alt=""
                                  />
                                </p>
                                <div className="plan_packPlan-price-amt__SsXkz">
                                  ₹27,790<del>₹44,500</del>
                                </div>
                              </div>
                              <div className="plan_packPlan-recommend__3pDpD">
                                <span style={{ backgroundColor: 'rgb(255, 173, 59)' }}>
                                  RECOMMENDED
                                </span>
                              </div>
                            </div>
                            <div className="plan_packPlan-bottom__YpnVU">
                              <h5>WHAT YOU'LL GET</h5>
                              <ul>
                                <li className="flex">
                                  <img
                                    src="https://image.prepladder.com/content/Check_Orange.png"
                                    alt="img"
                                  />
                                  <div className="flex1"> Conceptual Video Lectures</div>
                                </li>
                                <li className="flex">
                                  <img
                                    src="https://image.prepladder.com/content/Check_Orange.png"
                                    alt="img"
                                  />
                                  <div className="flex1">
                                    {' '}
                                    18000+ questions including clinical, one-liners &amp; PYQs
                                  </div>
                                </li>
                                <li className="flex">
                                  <img
                                    src="https://image.prepladder.com/content/Check_Orange.png"
                                    alt="img"
                                  />
                                  <div className="flex1">
                                    {' '}
                                    1500+ summary charts in the form of treasures
                                  </div>
                                </li>
                                <li className="flex">
                                  <img
                                    src="https://image.prepladder.com/content/Check_Orange.png"
                                    alt="img"
                                  />
                                  <div className="flex1">
                                    {' '}
                                    12 Mock Tests with 1 lakh participants
                                  </div>
                                </li>
                                <li className="flex">
                                  <img
                                    src="https://image.prepladder.com/content/Check_Orange.png"
                                    alt="img"
                                  />
                                  <div className="flex1">
                                    {' '}
                                    Option to buy hard copy notes with space to annotate
                                  </div>
                                </li>
                              </ul>
                              <button className="btn-custom width-100"> Enrol now </button>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="slick-slide" data-index="0" tabIndex="-1" aria-hidden="false" style={{ outline: 'none', width: '325px', margin: '10px' }}>
      <div>
        <a className="plan_proPlans-tab-content-col__Ijc7W" tabIndex="-1" href="/app/plans/252-pro+plan" style={{ width: '100%', display: 'inline-block' }}>
          <div className="plan_packPlan-dash__YotBz" style={{ borderColor: 'rgb(231, 244, 255)' }}>
            <div className="plan_packPlan-innerbg__8Zot5" style={{ backgroundColor: 'rgb(231, 244, 255)' }}>
              <div className="plan_packPlan-pack__5h66P flex items-center">
                <img src="https://image.prepladder.com/content/9C69qyVdOjoqIXG0kL7S1688099657.png" className="width-6rem mr1" alt="Plan icon" />
                <div>
                  <h2>PRO Plan</h2>
                  <h3>India's Only Clinical QBank</h3>
                </div>
              </div>
              <div className="plan_packPlan-price__2DL6L">
                <p>Starting at <img src="https://image.prepladder.com/content/gmlCEmrXhuDHa9aNp74l1678084839.png" alt="" /></p>
                <div className="plan_packPlan-price-amt__SsXkz">₹6,999<del>₹13,999</del></div>
              </div>
            </div>
            <div className="plan_packPlan-bottom__YpnVU">
              <h5>WHAT YOU'LL GET</h5>
              <ul>
                <li className="flex">
                  <img src="https://image.prepladder.com/content/Check_Blue.png" alt="Check mark" />
                  <div className="flex1">QBank 6.0 featuring 18,000+ questions</div>
                </li>
                <li className="flex">
                  <img src="https://image.prepladder.com/content/Check_Blue.png" alt="Check mark" />
                  <div className="flex1">Test Series with 1 Lakh+ Participants.</div>
                </li>
                <li className="flex">
                  <img src="https://image.prepladder.com/content/Check_Blue.png" alt="Check mark" />
                  <div className="flex1">Previous Year Questions</div>
                </li>
                <li className="flex">
                  <img src="https://image.prepladder.com/content/Check_Blue.png" alt="Check mark" />
                  <div className="flex1">Concise summary of Topics in form of Treasures</div>
                </li>
                <li className="flex">
                  <img src="https://image.prepladder.com/content/Check_Blue.png" alt="Check mark" />
                  <div className="flex1">Proven effective Rapid Revision QBank</div>
                </li>
              </ul>
              <button className="btn-custom width-100">Enrol now</button>
            </div>
          </div>
        </a>
      </div>
    </div>
    
                    {/* Repeat similar structure for other slides (data-index=1, 2, 3, ...) */}
                  </div>
                  
                </div>
                <button
                  type="button"
                  data-role="none"
                  className="slick-arrow slick-next"
                  style={{ display: 'block' }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="plan_plan-faq__fTwZ3 mobBorderRadiusNone dash-white-box">
      <div className="plan_plan-faq-head__f38FB">Frequently asked questions</div>
      <ul className="plan_plan-faq-list__VIiYK">
        <li className="plan_plan-faq-list-item__SrpKC">
          <input type="checkbox" id="planFaqGeneric00" name="planFaq" />
          <label htmlFor="planFaqGeneric00">
            <h3>What happens to my premium plan if I lose my phone or change my registered mobile number or ?</h3>
          </label>
          <p>
            For our existing students who purchased the premium plan before November 11th, 2020, their account is primarily registered with the email ID used during onboarding. Therefore, if you lose your phone or change your mobile/ registered mobile number, you can still log in to your account with the same credentials. All your data, bookmarks, tests, and usage will remain safe on the cloud even if you log in from a new device.
            <br /><br />
            However, we strongly recommend that students who log in using their registered phone number keep their phone number intact for a smoother experience. If you encounter any issues, please get in touch with us through live chat or email us at <a href="mailto:help@prepladder.com">help@prepladder.com</a>, and our customer care team will respond as soon as possible.
          </p>
        </li>
        <li className="plan_plan-faq-list-item__SrpKC">
          <input type="checkbox" id="planFaqGeneric01" name="planFaq" />
          <label htmlFor="planFaqGeneric01">
            <h3>Is it possible to share my PrepLadder subscription with others?</h3>
          </label>
          <p>
            No, sharing your subscription is not allowed. While you can log in on two different devices using the same credentials, videos cannot be played simultaneously on both devices. Additionally, we do not recommend sharing your login credentials with anyone.
          </p>
        </li>
        <li className="plan_plan-faq-list-item__SrpKC">
          <input type="checkbox" id="planFaqGeneric02" name="planFaq" />
          <label htmlFor="planFaqGeneric02">
            <h3>Can I change my plan after purchasing?</h3>
          </label>
          <p>
            Yes, you can upgrade your existing plan from FMGE to NEET PG but not from NEET PG to FMGE. Additionally, you can also extend the duration of your subscription.
          </p>
        </li>
        <li className="plan_plan-faq-list-item__SrpKC">
          <input type="checkbox" id="planFaqGeneric03" name="planFaq" />
          <label htmlFor="planFaqGeneric03">
            <h3>I have a subscription for the Premium plan but it is not reflecting on my app.</h3>
          </label>
          <p>
            We request you to please close the app and open it again. Next, try logging out and logging in again. If it still doesn’t work, please get in touch with us through live chat or email us at <a href="mailto:help@prepladder.com">help@prepladder.com</a>. Our customer care team will get back to you at the earliest.
          </p>
        </li>
        {/* Add more <li> items for other FAQs following the same structure */}
      </ul>
    </div>
        <div className="plan_plan-contactUs__5AvdF center">
          For questions related to your subscription, &nbsp;
          <a className="" href="/contactus">
            <u>help@ScholarSense.com</u>
          </a>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}
