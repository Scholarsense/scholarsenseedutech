import React, { useState } from 'react'

export default function Registration({ question, answer }) {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapsible = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I register for the Champions Exam FMGE?",
      answer: "Registration for the Champions Exam FMGE is simple. Sign up on the PrepLadder app/website and take the exam on the scheduled date."
    },
    {
      question: "Is the Champions Exam FMGE free for all?",
      answer: "Yes, you can take the Champions Exam FMGE for free after signing up on the PrepLadder app or website."
    },
    {
      question: "Can I give the exam in multiple slots, or is it just one stretch?",
      answer: "If required, you can pause the test and resume it later. The time will be calculated based on the actual time spent on the test. We encourage you to attempt the test in one go and in the same scenario as an actual exam so that you can analyze your performance & work on it."
    },
    {
      question: "Where can I see the test results on the app?",
      answer: "Once the results for the Test are out, you can check your results in the past exam section of the app."
    },
    {
      question: "What is the format of the mock test?",
      answer: "The format of this Champions Exam FMGE is exactly the same as the actual exam and will be conducted online."
    },

  ];
  return (
    <div>
       <div className="pg_home-banner-ss__IZCqg">
      <div className="pg_preptestTop__P9MHg flex justify-center col-gap-16 signUp-counter preptestTop items-center">
        <p>Total number of registrations</p>
        <div className="tick" data-state="initialised">
          <div data-repeat="true" aria-hidden="true">
            <span data-view="flip" className="tick-flip">
              <span className="tick-flip-card">
                <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(0deg)' }}>
                  <span className="tick-flip-panel-front-text">
                    <span className="tick-flip-panel-text-wrapper">1</span>
                  </span>
                  <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                </span>
                <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                  <span className="tick-flip-panel-back-text">
                    <span className="tick-flip-panel-text-wrapper"></span>
                  </span>
                  <span className="tick-flip-panel-back-highlight" style={{ opacity: 2 }}></span>
                  <span className="tick-flip-panel-back-shadow"></span>
                </span>
              </span>
              <span className="tick-flip-card" style={{}}>
                <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                  <span className="tick-flip-panel-front-text">
                    <span className="tick-flip-panel-text-wrapper">0</span>
                  </span>
                  <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                </span>
                <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-360deg)' }}>
                  <span className="tick-flip-panel-back-text">
                    <span className="tick-flip-panel-text-wrapper">1</span>
                  </span>
                  <span className="tick-flip-panel-back-highlight" style={{ opacity: 0 }}></span>
                  <span className="tick-flip-panel-back-shadow" style={{ opacity: 0 }}></span>
                </span>
              </span>
              <span className="tick-flip-spacer">1</span>
              <span className="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span>
              <span className="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span>
              <span className="tick-flip-card-shadow" style={{ opacity: 0, transform: 'scaleY(0)' }}></span>
            </span>
            <span data-view="flip" className="tick-flip">
              <span className="tick-flip-card">
                <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(0deg)' }}>
                  <span className="tick-flip-panel-front-text">
                    <span className="tick-flip-panel-text-wrapper">9</span>
                  </span>
                  <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                </span>
                <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                  <span className="tick-flip-panel-back-text">
                    <span className="tick-flip-panel-text-wrapper"></span>
                  </span>
                  <span className="tick-flip-panel-back-highlight" style={{ opacity: 2 }}></span>
                  <span className="tick-flip-panel-back-shadow"></span>
                </span>
              </span>
              <span className="tick-flip-card">
                <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                  <span className="tick-flip-panel-front-text">
                    <span className="tick-flip-panel-text-wrapper"></span>
                  </span>
                  <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                </span>
                <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-360deg)' }}>
                  <span className="tick-flip-panel-back-text">
                    <span className="tick-flip-panel-text-wrapper">9</span>
                  </span>
                  <span className="tick-flip-panel-back-highlight" style={{ opacity: 0 }}></span>
                  <span className="tick-flip-panel-back-shadow" style={{ opacity: 0 }}></span>
                </span>
              </span>
              <span className="tick-flip-spacer">9</span>
              <span className="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span>
              <span className="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span>
              <span className="tick-flip-card-shadow" style={{ opacity: 0, transform: 'scaleY(0)' }}></span>
            </span>
            <span data-view="flip" className="tick-flip">
              <span className="tick-flip-card">
                <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(0deg)' }}>
                  <span className="tick-flip-panel-front-text">
                    <span className="tick-flip-panel-text-wrapper">7</span>
                  </span>
                  <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                </span>
                <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                  <span className="tick-flip-panel-back-text">
                    <span className="tick-flip-panel-text-wrapper"></span>
                  </span>
                  <span className="tick-flip-panel-back-highlight" style={{ opacity: 2 }}></span>
                  <span className="tick-flip-panel-back-shadow"></span>
                </span>
              </span>
              <span className="tick-flip-card">
                <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                  <span className="tick-flip-panel-front-text">
                    <span className="tick-flip-panel-text-wrapper"></span>
                  </span>
                  <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                </span>
                <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-360deg)' }}>
                  <span className="tick-flip-panel-back-text">
                    <span className="tick-flip-panel-text-wrapper">7</span>
                  </span>
                  <span className="tick-flip-panel-back-highlight" style={{ opacity: 0 }}></span>
                  <span className="tick-flip-panel-back-shadow" style={{ opacity: 0 }}></span>
                </span>
              </span>
              <span className="tick-flip-spacer">7</span>
              <span className="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span>
              <span className="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span>
              <span className="tick-flip-card-shadow" style={{ opacity: 0, transform: 'scaleY(0)' }}></span>
            </span>
            <span data-view="flip" className="tick-flip">
              <span className="tick-flip-card">
                <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(0deg)' }}>
                  <span className="tick-flip-panel-front-text">
                    <span className="tick-flip-panel-text-wrapper">5</span>
                  </span>
                  <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                </span>
                <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                  <span className="tick-flip-panel-back-text">
                    <span className="tick-flip-panel-text-wrapper"></span>
                  </span>
                  <span className="tick-flip-panel-back-highlight" style={{ opacity: 2 }}></span>
                  <span className="tick-flip-panel-back-shadow"></span>
                </span>
              </span>
              <span className="tick-flip-card">
                <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                  <span className="tick-flip-panel-front-text">
                    <span className="tick-flip-panel-text-wrapper"></span>
                  </span>
                  <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                </span>
                <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-360deg)' }}>
                  <span className="tick-flip-panel-back-text">
                    <span className="tick-flip-panel-text-wrapper">5</span>
                  </span>
                  <span className="tick-flip-panel-back-highlight" style={{ opacity: 0 }}></span>
                  <span className="tick-flip-panel-back-shadow" style={{ opacity: 0 }}></span>
                </span>
              </span>
              <span className="tick-flip-spacer">5</span>
              <span className="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span>
              <span className="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span>
              <span className="tick-flip-card-shadow" style={{ opacity: 0, transform: 'scaleY(0)' }}></span>
            </span>
            <span data-view="flip" className="tick-flip">
              <span className="tick-flip-card">
                <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(0deg)' }}>
                  <span className="tick-flip-panel-front-text">
                    <span className="tick-flip-panel-text-wrapper">0</span>
                  </span>
                  <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                </span>
                <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                  <span className="tick-flip-panel-back-text">
                    <span className="tick-flip-panel-text-wrapper"></span>
                  </span>
                  <span className="tick-flip-panel-back-highlight" style={{ opacity: 2 }}></span>
                  <span className="tick-flip-panel-back-shadow"></span>
                </span>
              </span>
              <span className="tick-flip-card">
                <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                  <span className="tick-flip-panel-front-text">
                    <span className="tick-flip-panel-text-wrapper"></span>
                  </span>
                  <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                </span>
                <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-360deg)' }}>
                  <span className="tick-flip-panel-back-text">
                    <span className="tick-flip-panel-text-wrapper">0</span>
                  </span>
                  <span className="tick-flip-panel-back-highlight" style={{ opacity: 0 }}></span>
                  <span className="tick-flip-panel-back-shadow" style={{ opacity: 0 }}></span>
                </span>
              </span>
              <span className="tick-flip-spacer">0</span>
              <span className="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span>
              <span className="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span>
              <span className="tick-flip-card-shadow" style={{ opacity: 0, transform: 'scaleY(0)' }}></span>
            </span>
          </div>
        </div>
      </div>
      <div className="pg_home-banner__wtXwC pg_home-banner-ss__IZCqg pg_home-banner-fmge__LeJVL singleImg">
        <div className="pg_home-banner-container__E2kuV container">
          <div className="pg_home-banner-row__7O6Eg flex justify-between">
            <div className="pg_home-banner-left__n_OXB col col-12 col-lg-6 col-md-12 col-sm-12">
              <h4></h4>
              <h1>
                Champions Exam <span>FMGE</span>
              </h1>
              <ul>
                <li>
                  <img className="width-24" alt="image" src="https://image.prepladder.com/content/3ExxuTmOZPAr3IKmsITb1700735304.png" />
                  Exam dates: 5th to 9th June.
                </li>
                <li>
                  <img className="width-24" alt="image" src="https://image.prepladder.com/content/tYBQSpbFXIqWrkHbZ6vy1700811501.png" />
                  Result date: 10th June.
                </li>
              </ul>
              <div className="pg_home-banner-ssbtn__DUfD0 pg_home-banner-ssbtn-sm__r_wp_">
                <button className="btn btn btn-ias">Register for FREE</button>
                <div className="pg_buttonBottomText__OqDCq">
                  It's absolutely <strong>FREE!</strong>
                </div>
              </div>
            </div>
            <div className="pg_home-banner-right__fbNRN pg_home-banner-ssRight__bon_j col col-12 col-lg-6 col-md-12 col-sm-12 singleImg-img">
              <img alt="image" src="https://image.prepladder.com/content/QFSsdBK9ZK15TKcXYuIf1713858936.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="pg_whyMatter__Y8Pag">
        <div className="pg_sec-heading__Uckzv">
          <h2>Why Compete in the Champions Exam FMGE?</h2>
        </div>
        <ul type="none" className="flex">
          <li>
            <img alt="image" src="https://image.prepladder.com/content/tcFxbo3z22ay5JrkqYUK1659028842.svg" />
            <h3>Prepared by PrepLadder’s Dream Team</h3>
          </li>
          <li>
            <img alt="image" src="https://image.prepladder.com/content/BnQLBoax6vouCXesHkjM1659028816.svg" />
            <h3>Replicates the closest pattern to the real exam</h3>
          </li>
          <li>
            <img alt="image" src="https://image.prepladder.com/content/Uzi3FNzNBEI6det532eo1700715304.svg" />
            <h3>Expected to be taken by maximum FMGE aspirants</h3>
          </li>
          <li>
            <img alt="image" src="https://image.prepladder.com/content/pomWAyfSgzeGymNr6KTn1700715330.svg" />
            <h3>All past-year topics will be tested in this mock exam.</h3>
          </li>
        </ul>
        <div className="pg_whyMatter-btm__vBd_W">
          <img alt="image" src="https://image.prepladder.com/content/XvkhO7S1DQH4UwrGoqP71659031847.svg" />
          Available on website and PrepLadder App
        </div>
      </div>
    </div>
    <div className="pg_championship__tP2fy pg_championship-ss__1_SJz championshipSlide testimonial1_slider" id="upcoming-test-schedule">
      <div className="container">
        <div className="pg_sec-heading__Uckzv">
          <h2>Champions Exam FMGE Schedule</h2>
        </div>
        <ul className="pg_championship-list__jiyUv pg_championship-singleList__pmljG" type="none">
          <div className="scrollCarousel_testimonialScroll__MdZO6">
            <div>
              <div className="scrollCarousel_scrollList-main__VGGht">
                <div className="scrollCarousel_scrollCarousel-inner__0htoc" style={{ position: 'relative', display: 'flex', overflow: 'auto', scrollSnapType: 'x mandatory', justifyContent: 'center' }}>
                  <div className="scrollCarousel_scrollList__NkW5l" style={{ flexShrink: 0, scrollSnapAlign: 'start' }}>
                    <div className="scrollCarousel_scrollCarousel-main__y8UET">
                      <li className="pg_championship-list-item__iyEVC pg_championship-ssDouble__rGyw0">
                        <div>
                          <h3>FMGE Champions Test</h3>
                          <p><img src="https://image.prepladder.com/content/YedE8n5SHPz6yYgbjdiV1691143631.png" alt="icon" />05th Jun 2024 - 09th Jun 2024</p>
                          <p><img src="https://image.prepladder.com/content/7keosoPH2WTLS5AaH3h01691143663.png" alt="icon" />Result out on 12 PM, 10th Jun 2024</p>
                          <ul>
                            <li><img src="https://image.prepladder.com/content/UfeQMAiRw0k4cvTfPK4x1691393720.svg" alt="img" />300 Mins</li>
                            <li><img src="https://image.prepladder.com/content/FSZjA3AXwdOuDg0s5FqK1691393678.svg" alt="img" />Total 300 Questions</li>
                          </ul>
                        </div>
                        <button className="btn btn-ias">Register for FREE</button>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="scrollCarousel_scrollList-arrow__NhnEY">
                  <button className="scrollCarousel_scrollCarousel-btn__GKAkw scrollCarousel_scrollCarousel-prev__gCJLD" style={{ display: 'none' }}>
                    <img src="https://image.prepladder.com/content/4zYidL1O3SocyUtFrzem1709702955.svg" alt="icon" />
                  </button>
                  <button className="scrollCarousel_scrollCarousel-btn__GKAkw scrollCarousel_scrollCarousel-next__2RMB4" style={{ display: 'none' }}>
                    <img src="https://image.prepladder.com/content/4zYidL1O3SocyUtFrzem1709702955.svg" alt="icon" />
                  </button>
                </div>
              </div>
              <div aria-hidden="true" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}></div>
            </div>
          </div>
        </ul>
      </div>
    </div>
    <div className="container">
      <div id="remainders" className="pg_signUp__MLvP5 pg_signUp-ss__crmVG pg_signUp-fmge___df_X">
        <div className="flex justify-between flex-wrap items-center">
          <div className="pg_signUp-content__vloEv">
            <h2>Don’t Miss the Champions Exam FMGE.</h2>
            <ul>
              <li>
                <img alt="image" src="https://image.prepladder.com/content/3M5vXELRIhAmRhNaEpMR1689946011.png" />
                Expected to be taken by maximum FMGE aspirants
              </li>
              <li>
                <img alt="image" src="https://image.prepladder.com/content/3M5vXELRIhAmRhNaEpMR1689946011.png" />
                Gauge the competition before the real exam
              </li>
              <li>
                <img alt="image" src="https://image.prepladder.com/content/3M5vXELRIhAmRhNaEpMR1689946011.png" />
                Identify your strengths and weaknesses
              </li>
              <li>
                <img alt="image" src="https://image.prepladder.com/content/3M5vXELRIhAmRhNaEpMR1689946011.png" />
                Appear for FMGE Jun ‘24 confidently
              </li>
            </ul>
            <button className="btn btn-ias">Register for FREE</button>
          </div>
          <div className="pg_signUp-counter__qXegI signUp-counter">
            <div>
              <div className="tick" data-state="initialised">
                <div data-repeat="true" aria-hidden="true">
                  <span data-view="flip" className="tick-flip">
                    <span className="tick-flip-card">
                      <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(0deg)' }}>
                        <span className="tick-flip-panel-front-text">
                          <span className="tick-flip-panel-text-wrapper">1</span>
                        </span>
                        <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                      </span>
                      <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                        <span className="tick-flip-panel-back-text">
                          <span className="tick-flip-panel-text-wrapper"></span>
                        </span>
                        <span className="tick-flip-panel-back-highlight" style={{ opacity: 2 }}></span>
                        <span className="tick-flip-panel-back-shadow"></span>
                      </span>
                    </span>
                    <span className="tick-flip-card">
                      <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                        <span className="tick-flip-panel-front-text">
                          <span className="tick-flip-panel-text-wrapper">0</span>
                        </span>
                        <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                      </span>
                      <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-360deg)' }}>
                        <span className="tick-flip-panel-back-text">
                          <span className="tick-flip-panel-text-wrapper">1</span>
                        </span>
                        <span className="tick-flip-panel-back-highlight" style={{ opacity: 0 }}></span>
                        <span className="tick-flip-panel-back-shadow" style={{ opacity: 0 }}></span>
                      </span>
                    </span>
                    <span className="tick-flip-spacer">1</span>
                    <span className="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span>
                    <span className="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span>
                    <span className="tick-flip-card-shadow" style={{ opacity: 0, transform: 'scaleY(0)' }}></span>
                  </span>
                  <span data-view="flip" className="tick-flip">
                    <span className="tick-flip-card">
                      <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(0deg)' }}>
                        <span className="tick-flip-panel-front-text">
                          <span className="tick-flip-panel-text-wrapper">9</span>
                        </span>
                        <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                      </span>
                      <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                        <span className="tick-flip-panel-back-text">
                          <span className="tick-flip-panel-text-wrapper"></span>
                        </span>
                        <span className="tick-flip-panel-back-highlight" style={{ opacity: 2 }}></span>
                        <span className="tick-flip-panel-back-shadow"></span>
                      </span>
                    </span>
                    <span className="tick-flip-card">
                      <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                        <span className="tick-flip-panel-front-text">
                          <span className="tick-flip-panel-text-wrapper"></span>
                        </span>
                        <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                      </span>
                      <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-360deg)' }}>
                        <span className="tick-flip-panel-back-text">
                          <span className="tick-flip-panel-text-wrapper">9</span>
                        </span>
                        <span className="tick-flip-panel-back-highlight" style={{ opacity: 0 }}></span>
                        <span className="tick-flip-panel-back-shadow" style={{ opacity: 0 }}></span>
                      </span>
                    </span>
                    <span className="tick-flip-spacer">9</span>
                    <span className="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span>
                    <span className="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span>
                    <span className="tick-flip-card-shadow" style={{ opacity: 0, transform: 'scaleY(0)' }}></span>
                  </span>
                  <span data-view="flip" className="tick-flip">
                    <span className="tick-flip-card">
                      <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(0deg)' }}>
                        <span className="tick-flip-panel-front-text">
                          <span className="tick-flip-panel-text-wrapper">7</span>
                        </span>
                        <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                      </span>
                      <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                        <span className="tick-flip-panel-back-text">
                          <span className="tick-flip-panel-text-wrapper"></span>
                        </span>
                        <span className="tick-flip-panel-back-highlight" style={{ opacity: 2 }}></span>
                        <span className="tick-flip-panel-back-shadow"></span>
                      </span>
                    </span>
                    <span className="tick-flip-card">
                      <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                        <span className="tick-flip-panel-front-text">
                          <span className="tick-flip-panel-text-wrapper"></span>
                        </span>
                        <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                      </span>
                      <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-360deg)' }}>
                        <span className="tick-flip-panel-back-text">
                          <span className="tick-flip-panel-text-wrapper">7</span>
                        </span>
                        <span className="tick-flip-panel-back-highlight" style={{ opacity: 0 }}></span>
                        <span className="tick-flip-panel-back-shadow" style={{ opacity: 0 }}></span>
                      </span>
                    </span>
                    <span className="tick-flip-spacer">7</span>
                    <span className="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span>
                    <span className="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span>
                    <span className="tick-flip-card-shadow" style={{ opacity: 0, transform: 'scaleY(0)' }}></span>
                  </span>
                  <span data-view="flip" className="tick-flip">
                    <span className="tick-flip-card">
                      <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(0deg)' }}>
                        <span className="tick-flip-panel-front-text">
                          <span className="tick-flip-panel-text-wrapper">5</span>
                        </span>
                        <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                      </span>
                      <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                        <span className="tick-flip-panel-back-text">
                          <span className="tick-flip-panel-text-wrapper"></span>
                        </span>
                        <span className="tick-flip-panel-back-highlight" style={{ opacity: 2 }}></span>
                        <span className="tick-flip-panel-back-shadow"></span>
                      </span>
                    </span>
                    <span className="tick-flip-card" style={{}}>
                      <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                        <span className="tick-flip-panel-front-text">
                          <span className="tick-flip-panel-text-wrapper">4</span>
                        </span>
                        <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                      </span>
                      <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-360deg)' }}>
                        <span className="tick-flip-panel-back-text">
                          <span className="tick-flip-panel-text-wrapper">5</span>
                        </span>
                        <span className="tick-flip-panel-back-highlight" style={{ opacity: 0 }}></span>
                        <span className="tick-flip-panel-back-shadow" style={{ opacity: 0 }}></span>
                      </span>
                    </span>
                    <span className="tick-flip-spacer">5</span>
                    <span className="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span>
                    <span className="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span>
                    <span className="tick-flip-card-shadow" style={{ opacity: 0, transform: 'scaleY(0)' }}></span>
                  </span>
                  <span data-view="flip" className="tick-flip">
                    <span className="tick-flip-card">
                      <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(0deg)' }}>
                        <span className="tick-flip-panel-front-text">
                          <span className="tick-flip-panel-text-wrapper">0</span>
                        </span>
                        <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                      </span>
                      <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                        <span className="tick-flip-panel-back-text">
                          <span className="tick-flip-panel-text-wrapper"></span>
                        </span>
                        <span className="tick-flip-panel-back-highlight" style={{ opacity: 2 }}></span>
                        <span className="tick-flip-panel-back-shadow"></span>
                      </span>
                    </span>
                    <span className="tick-flip-card" style={{}}>
                      <span className="tick-flip-panel-front tick-flip-front tick-flip-panel" style={{ transform: 'rotateX(-180deg)' }}>
                        <span className="tick-flip-panel-front-text">
                          <span className="tick-flip-panel-text-wrapper">9</span>
                        </span>
                        <span className="tick-flip-panel-front-shadow" style={{ opacity: 0 }}></span>
                      </span>
                      <span className="tick-flip-panel-back tick-flip-back tick-flip-panel" style={{ transform: 'rotateX(-360deg)' }}>
                        <span className="tick-flip-panel-back-text">
                          <span className="tick-flip-panel-text-wrapper">0</span>
                        </span>
                        <span className="tick-flip-panel-back-highlight" style={{ opacity: 0 }}></span>
                        <span className="tick-flip-panel-back-shadow" style={{ opacity: 0 }}></span>
                      </span>
                    </span>
                    <span className="tick-flip-spacer">0</span>
                    <span className="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span>
                    <span className="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span>
                    <span className="tick-flip-card-shadow" style={{ opacity: 0, transform: 'scaleY(0)' }}></span>
                  </span>
                </div>
              </div>
            </div>
            <h4>Registered students</h4>
          </div>
        </div>
      </div>
    </div>
    <div className="faq_faq__uHAiT">
      <div className="container">
        <div className="faq_faq_head__42GTb mob-text-left">
          <img src="https://image.prepladder.com/content/l1d77uaOlJnU4viHL6pq1675750040.webp" alt="icon" />
          <div className="qbankNext-head">Frequently asked questions</div>
        </div>
        <div className="faq-collapse">
          {faqs.map((faq, index) => (
            <div className="Collapsible" key={index}>
              <span
                id={`collapsible-trigger-${index}`}
                className={`Collapsible__trigger ${activeIndex === index ? 'is-open' : 'is-closed'}`}
                aria-expanded={activeIndex === index}
                aria-controls={`collapsible-content-${index}`}
                role="button"
                onClick={() => toggleCollapsible(index)}
              >
                <div className="Collapsible-inner">
                  <div className="faq_faq_list__Row3c">
                    <p>{faq.question}</p>
                  </div>
                </div>
              </span>
              <div
                id={`collapsible-content-${index}`}
                className="Collapsible__contentOuter"
                style={{
                  height: activeIndex === index ? 'auto' : '0',
                  transition: 'height 400ms linear',
                  overflow: 'hidden'
                }}
                role="region"
                aria-labelledby={`collapsible-trigger-${index}`}
              >
                <div className="Collapsible__contentInner">
                  <div className="faq_faq_content__byd2w">
                    <div>{faq.answer}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}