import React from 'react'
import { useSpring, animated } from '@react-spring/web';

export default function Home() {
    const [isVisible, setIsVisible] = React.useState(true);

    // Define animation for rollIn effect
    const rollInAnimation = useSpring({
      from: { opacity: 0, transform: 'translateX(5%)' },
      to: { opacity: 1, transform: 'translateX(0)' },
      config: { duration: 1000 },
      immediate: !isVisible // Apply animation immediately when isVisible changes
    });
  
    // Define animation for fadeOutRight effect
    const fadeOutRightAnimation = useSpring({
      from: { opacity: 1, transform: 'translateX(0)' },
      to: { opacity: 0, transform: 'translateX(100%)' },
      config: { duration: 1000 },
      immediate: !isVisible // Apply animation immediately when isVisible changes
    });

    const CountFeature = ({ imageSrc, count, description }) => (
        <div className="col col-6 md-col-6 sm-col-12">
          <div className="countFeature_countFeature-inner__GdY4c">
            <img alt="" src={imageSrc} />
            <div className="countFeature_countFeature-innerHead__l0Yh0">{count}</div>
            <p>{description}</p>
          </div>
        </div>
      );

      const plans = [
        {
          background: 'rgb(255, 238, 195)',
          image: 'https://image.prepladder.com/content/tbef3Njq1jXRtwQ9zjp81677222211.png',
          title: 'ELITE Plan',
          subtitle: 'Cut The Noise',
          offColor: 'rgb(255, 194, 127)',
          offText: 'Login now to view the best prices',
          features: [
            { icon: 'https://image.prepladder.com/content/Check_Orange.png', text: 'Conceptual Video Lectures' },
            { icon: 'https://image.prepladder.com/content/Check_Orange.png', text: '18000+ questions including clinical, one-liners & PYQs' },
            { icon: 'https://image.prepladder.com/content/Check_Orange.png', text: '1500+ summary charts in the form of treasures' },
            { icon: 'https://image.prepladder.com/content/Check_Orange.png', text: '12 Mock Tests with 1 lakh participants' },
            { icon: 'https://image.prepladder.com/content/Check_Orange.png', text: 'Option to buy hard copy notes with space to annotate' }
          ],
          buttonText: 'Signup / Login',
          knowMoreLink: 'https://www.prepladder.com/courses/medical-pg/elite-plan',
          knowMoreImage: 'https://image.prepladder.com/content/c0x7QZTalFiOYmDSv39f1688098418.png',
          recommended: true,
        },
        // Add more plan objects here
      ];
  return (
    <div>
          
      <section className="headerBar_headerBar__biqiP plan-topNav">
        <div className="plan-topNav-inner container center">
          <div>
            <p>
              Registrations for <b>Champions Exam NEET-PG</b> Now LIVE
            </p>
          </div>
          <a className="" href="/registration">
            Register for FREE
          </a>
        </div>
      </section>
      <div id="banner" className="bannerHome_bannerHome__P7Yzk">
        <img
          className="bannerHome_bannerHome-left__bxwE1"
          alt=""
          src="https://image.prepladder.com/content/Phjew8JTF7MKbCzScrpp1674451660.webp"
        />
        <img
          className="bannerHome_bannerHome-right__bGW4k"
          alt=""
          src="https://image.prepladder.com/content/98g93DyiEaTeb11ke0mG1674451705.webp"
        />
        <div className="container">
          <div className="row flex flex-wrap items-center">
            <div className="bannerHome_bannerHome-content__DKQsK col col-9 md-col-11 sm-col-12 m-auto">
              <a
                target="blank"
                href="/"
                className="bannerHome_bannerHome-grab__MHOHe"
              >
                <div className="flex items-center">
                  Enrol now
                  <img
                    alt="img"
                    src="https://image.prepladder.com/content/hgiusVoygbYhTZLzCTgz1709891892.svg"
                  />
                </div>
              </a>
              
      <animated.div style={isVisible ? rollInAnimation : fadeOutRightAnimation}>
        <div className="mb1">
          <h1 className="bannerHome_bannerHome-medicalHead__OXPbe">
            India's Best <span>NEET PG Preparation</span> Courses
          </h1>
        </div>
      </animated.div>

              <p className="mb4">
                Simplify your INI-CET/NEET PG exam preparation with the
                best-in-class video lectures, QBank 5.0, Notes 6.0, Test Series
                and more by the Dream Team
              </p>
              <div className="bannerHome_bannerHome-cta__ZEP0C flex justify-center">
                <a href="/" target="blank">
                  <img
                    src="https://image.prepladder.com/content/T7i9PWQC4QLR3YBHLMPI1638965792.svg"
                    alt=""
                  />
                </a>
                <a href="/" target="blank">
                  <img
                    src="https://image.prepladder.com/content/J43trce1ZMqvIfqRe2zA1638965764.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="mt1"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
   
        <div className="featureList_featureList-main__O8YV1 row flex flex-wrap items-center py3">
          <div className="col col-6 md-col-12 mob-order-2">
            <div className="featureList_featureList-left__ZlZ48">
              <h2 className="h2_head">Conceptual Video Lectures</h2>
              <p className="pAlign">
                Access easy-to-follow video lectures covering entire NEET PG
                exam syllabus by India’s top medical faculty.
              </p>
            </div>
          </div>
          <div className="col col-6 md-col-12 center">
            <img
              className="featureList_featureList-right__3p1_W"
              alt="Conceptual Video Lectures for NEET PG Preparation"
              loading="lazy"
              src="https://image.prepladder.com/content/T1rFJMNBvEz46eT8jwOt1682404918.webp"
            />
          </div>
        </div>

        <div className="featureList_featureList-main__O8YV1 row flex flex-wrap items-center py3">
        <div className="col col-6 md-col-12 center">
            <img
              className="featureList_featureList-right__3p1_W"
              alt="QBank 5.0"
              loading="lazy"
              src="https://image.prepladder.com/content/3skfR7o385s66DN3JnwA1682323640.webp"
            />
          </div>
          <div className="col col-6 md-col-12 mob-order-2">
            <div className="featureList_featureList-left__ZlZ48">
              <h2 className="h2_head">QBank 5.0</h2>
              <p className="pAlign">
                Utilize our extensive online QBank featuring clinical questions
                organized subject and topic-wise.
              </p>
            </div>
          </div>
        </div>

        <div className="featureList_featureList-main__O8YV1 row flex flex-wrap items-center py3">
      <div className="col col-6 md-col-12 mob-order-2">
        <div className="featureList_featureList-left__ZlZ48">
          <h2 className="h2_head">Test Series</h2>
          <p className="pAlign">Evaluate your exam preparation and make necessary improvements by practicing full-length tests designed as per the latest exam pattern.</p>
        </div>
      </div>
      <div className="col col-6 md-col-12 center">
        <img className="featureList_featureList-right__3p1_W" alt="Test Series for NEET PG Preparation" loading="lazy" src="https://image.prepladder.com/content/xIUKz9MEGENXw2I93Gax1682323684.webp" />
      </div>
    </div>
    <div className="featureList_featureList-main__O8YV1 row flex flex-wrap items-center py3">
    <div className="col col-6 md-col-12 center">
        <img className="featureList_featureList-right__3p1_W" alt="Notes 6.0 for NEET PG Preparation" loading="lazy" src="https://image.prepladder.com/content/VXMpe4lDlJC43iFdfIqh1682323733.webp" />
      </div>
      <div className="col col-6 md-col-12 mob-order-2">
        <div className="featureList_featureList-left__ZlZ48">
          <h2 className="h2_head">Notes 6.0</h2>
          <p className="pAlign">Find the most comprehensive and clinically oriented notes featuring high-quality images prepared by India’s top medical faculty with extensive subject knowledge.</p>
        </div>
      </div>
    </div>
      </div>
      <div className="threeBoxFeature_strikeRate__Y_fXe bg-lightgreen py8">
      <div className="container">
        <h2 className="qbankNext-head center">Proven Effective Content</h2>
        <div className="qbankNext-subhead center mb5">Concise, high yield, highly effective content that yields results. The strike rate proves it.</div>
        <div className="row flex justify-center flex-wrap row-gap-3">
          <div className="col col-4 md-col-6 sm-col-12">
            <div className="threeBoxFeature_strikeRate-inner__9lttc">
              <div className="threeBoxFeature_strikeRate-head__qX22I">NEET PG March 2023</div>
              <h2 className="threeBoxFeature_strikeRate-tophead__Jyrg7 mt2 mb1">96%</h2>
              <div><span>Strike Rate</span></div>
              <h2 className="threeBoxFeature_strikeRate-bottomhead__8zyv6"></h2>
              <p>A direct repeat from PrepLadder’s high yield content</p>
            </div>
          </div>
          <div className="col col-4 md-col-6 sm-col-12">
            <div className="threeBoxFeature_strikeRate-inner__9lttc">
              <div className="threeBoxFeature_strikeRate-head__qX22I">NEET PG May 2022</div>
              <h2 className="threeBoxFeature_strikeRate-tophead__Jyrg7 mt2 mb1">92.5%</h2>
              <div><span>Strike Rate</span></div>
              <h2 className="threeBoxFeature_strikeRate-bottomhead__8zyv6"></h2>
              <p>A direct repeat from PrepLadder’s high yield content</p>
            </div>
          </div>
          <div className="col col-4 md-col-6 sm-col-12">
            <div className="threeBoxFeature_strikeRate-inner__9lttc">
              <div className="threeBoxFeature_strikeRate-head__qX22I">NEET PG May 2021</div>
              <h2 className="threeBoxFeature_strikeRate-tophead__Jyrg7 mt2 mb1">89.0%</h2>
              <div><span>Strike Rate</span></div>
              <h2 className="threeBoxFeature_strikeRate-bottomhead__8zyv6"></h2>
              <p>A direct repeat from PrepLadder’s concise content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" download_download__Jev3n">
    <div className="container">
      <div className="">
        <div className="row flex flex-wrap items-center">
          <div className="col col-6 md-col-12 mb4">
            <h2 className="download_download-head__YPX8U">Study Anytime, Anywhere</h2>
            <div className="download_download-subhead__yXrxB">Access PrepLadder on the device of your choice &amp; reap the benefits of top-notch NEET PG content-be it iOS, Android or Laptop.</div>
            <div className="download_download-cta__rTduJ download_download-ctaType__RMinL flex">
              <a className="" target="blank" href="https://play.google.com/store/apps/details?id=com.prepladder.learningapp">
                <img src="https://image.prepladder.com/content/okoSuobkgWAfzQ5m44lI1666866779.png" alt="Android Devices" />
                Android Devices
              </a>
              <a className="" target="blank" href="https://itunes.apple.com/us/app/prepladder/id1622337839">
                <img src="https://image.prepladder.com/content/1z067OQptnQncCGj4Z3V1666866795.png" alt="Apple Devices" />
                Apple Devices
              </a>
            </div>
            <div className="download_download-btn__yjCrH">
              <a className="header_headerBtn__WRwZ9 btn-1 button-default" text="Try now for free" href="/app">Try now for free</a>
            </div>
          </div>
          <div className="col col-6 md-col-12 self-end">
            <img className="flex" loading="lazy" alt="" src="https://image.prepladder.com/content/ALXnNb0D0S6SqRIg3w8M1674451201.webp" />
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="threeBoxFeature_strikeRate__Y_fXe bg-lightgreen py8">
      <div className="container">
        <h2 className="qbankNext-head center">Why Choose ScholarSense?</h2>
        <div className="qbankNext-subhead center mb5">To elevate your NEET PG preparation with the best-in-class resources</div>
        <div className="row flex justify-center flex-wrap row-gap-3">
          <div className="col col-4 md-col-6 sm-col-12">
            <div className="threeBoxFeature_strikeRate-inner__9lttc threeBoxFeature_strikeRate-feature__TUHEi">
              <img loading="lazy" alt="NEET PG Notes" src="https://image.prepladder.com/content/QfcSm2Bn39vMamxE5Okv1673248783.webp" />
              <h2 className="threeBoxFeature_strikeRate-bottomhead__8zyv6">Top Quality Content</h2>
              <p>Enrich your knowledge with highly informative, engaging content crafted by the Dream Team.</p>
            </div>
          </div>
          <div className="col col-4 md-col-6 sm-col-12">
            <div className="threeBoxFeature_strikeRate-inner__9lttc threeBoxFeature_strikeRate-feature__TUHEi">
              <img loading="lazy" alt="NEET PG Notes" src="https://image.prepladder.com/content/BGcTck7JHXAV44RiDlv91673248839.webp" />
              <h2 className="threeBoxFeature_strikeRate-bottomhead__8zyv6">Learn Anytime, Anywhere</h2>
              <p>Access the best quality content and turn any place into a classroom whenever you want.</p>
            </div>
          </div>
          <div className="col col-4 md-col-6 sm-col-12">
            <div className="threeBoxFeature_strikeRate-inner__9lttc threeBoxFeature_strikeRate-feature__TUHEi">
              <img loading="lazy" alt="NEET PG Notes" src="https://image.prepladder.com/content/5X9baBYrM5O4nK1i0kW11673248869.webp" />
              <h2 className="threeBoxFeature_strikeRate-bottomhead__8zyv6">In-Depth Analytics</h2>
              <p>Evaluate your strengths and shortcomings with the help of performance graphs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="py6">
      <div className="planTopper_planTopper-inner__u4lxC container">
        <div className="mb5">
          <div className="planTopper_planTopper-icon__3RtQL">
            <img alt="" src="https://image.prepladder.com/content/73YYgbpxy0tDn8qEiuEY1682416621.webp" />
          </div>
          <div className="planHead_planMain-head__u_x3U">NEET PG 2023 Toppers of PrepLadder</div>
          <div className="planHead_planMain-subhead__mpkfj">Our exceptional result with 96% NEET PG March 2023 strike rate proves once again that PrepLadder is the best platform for Medical PG preparation with the top & most experienced faculty</div>
        </div>
        <div className="planTopper_planTopper-row__AHNi2 row flex flex-wrap">
       
          <div className="">
            <div className="planTopper_planTopper-wrap__wJBgs">
              <div className="planTopper_planTopper-bg__WTAnx">
                <img loading="lazy" alt="" src="https://image.prepladder.com/content/r9ffGuHffX1gxeCeGo0y1682423562.webp" />
              </div>
              <div className="planTopper_planTopper-ribbon__d2rQ5">
                <img loading="lazy" alt="" src="https://image.prepladder.com/content/T5VB8txzdU0X0iVZKVXf1682416692.webp" />
                <div>
                  <div>1<span> Rank</span></div>
                </div>
              </div>
            </div>
            <p>Dr. Aarushi Narwani</p>
          </div>
          <div className="">
            <div className="planTopper_planTopper-wrap__wJBgs">
              <div className="planTopper_planTopper-bg__WTAnx">
                <img loading="lazy" alt="" src="https://image.prepladder.com/content/r9ffGuHffX1gxeCeGo0y1682423562.webp" />
              </div>
              <div className="planTopper_planTopper-ribbon__d2rQ5">
                <img loading="lazy" alt="" src="https://image.prepladder.com/content/T5VB8txzdU0X0iVZKVXf1682416692.webp" />
                <div>
                  <div>1<span> Rank</span></div>
                </div>
              </div>
            </div>
            <p>Dr. Aarushi Narwani</p>
          </div>
          <div className="">
            <div className="planTopper_planTopper-wrap__wJBgs">
              <div className="planTopper_planTopper-bg__WTAnx">
                <img loading="lazy" alt="" src="https://image.prepladder.com/content/r9ffGuHffX1gxeCeGo0y1682423562.webp" />
              </div>
              <div className="planTopper_planTopper-ribbon__d2rQ5">
                <img loading="lazy" alt="" src="https://image.prepladder.com/content/T5VB8txzdU0X0iVZKVXf1682416692.webp" />
                <div>
                  <div>1<span> Rank</span></div>
                </div>
              </div>
            </div>
            <p>Dr. Aarushi Narwani</p>
          </div>
          <div className="">
            <div className="planTopper_planTopper-wrap__wJBgs">
              <div className="planTopper_planTopper-bg__WTAnx">
                <img loading="lazy" alt="" src="https://image.prepladder.com/content/r9ffGuHffX1gxeCeGo0y1682423562.webp" />
              </div>
              <div className="planTopper_planTopper-ribbon__d2rQ5">
                <img loading="lazy" alt="" src="https://image.prepladder.com/content/T5VB8txzdU0X0iVZKVXf1682416692.webp" />
                <div>
                  <div>1<span> Rank</span></div>
                </div>
              </div>
            </div>
            <p>Dr. Aarushi Narwani</p>
          </div>
        </div>
      </div>
    </div>

    <div id="plans">
      <div className="packPlan_packPlan-main__gIFdx bg-lightgreen">
        <div className="container">
          <div className="planHead_planMain-head__u_x3U center mob-text-left">The Finest Study Material to Excel in your NEET PG Preparation</div>
          <div className="planHead_planMain-subhead__mpkfj center mob-text-left">Enrol to a plan that suits you best</div>
          <div className="packPlan_packPlan__sFlwy scrollCarousel_scrollCarousel-plan__yzKsK packPlan-slide">
            {/* Mapping through plan data and rendering each plan */}
            {plans.map((plan, index) => (
              <div key={index}>
                <div className="scrollCarousel_scrollList-main__VGGht">
                  <div className="scrollCarousel_scrollCarousel-inner__0htoc" style={{ position: 'relative', display: 'flex', overflow: 'auto', scrollSnapType: 'x mandatory' }}>
                    <div className="scrollCarousel_scrollList__NkW5l" style={{ flexShrink: 0, scrollSnapAlign: 'start' }}>
                      <div className="scrollCarousel_scrollCarousel-main__y8UET">
                        <div className="pt2">
                          <div className="packPlan_packPlan-inner__lk19e packPlan_packPlan-pro__i7OPx">
                            <div className="packPlan_packPlan-innerbg__21NtN packPlan_packPlan-proBg__Iv0WJ flex justify-between" style={{ background: plan.background }}>
                              <div className="packPlan_packPlan-pack__cBr_S flex">
                                <img alt="" src={plan.image} />
                                <div>
                                  <p>{plan.title}</p>
                                  <span>{plan.subtitle}</span>
                                </div>
                              </div>
                              <div className="packPlan_packPlan-off__HDvJJ packPlan_packPlan-proOff__zpRRo" style={{ color: plan.offColor }}>{plan.offText}</div>
                            </div>
                            <div className="packPlan_packPlan-bottom__FSnAp">
                              <div>
                                <p>WHAT YOU'LL GET</p>
                                <ul>
                                  {/* Mapping through features and rendering each feature */}
                                  {plan.features.map((feature, index) => (
                                    <li key={index}>
                                      <div className="packPlan_packPlan-bottomIcon__Ezkgr"><img alt="" src={feature.icon} /></div>
                                      <div className="packPlan_packPlan-bottomText___zHDO">{feature.text}</div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <button className="header_headerBtn__WRwZ9 btn-1 button-default">{plan.buttonText}</button>
                                <a className="packPlan-button" text="Know more" target="blank" href={plan.knowMoreLink}><img src={plan.knowMoreImage} alt="icon" /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="countFeature_countFeature__XhaMH">
    <div className="container">
      <div className="row flex justify-center flex-wrap items-center">
        <div className="col col-6 md-col-6 sm-col-12 mob-order-2">
          <div className="row flex flex-wrap row-gap-3">
            <CountFeature
              imageSrc="https://image.prepladder.com/content/PMhZU4Acc97mnBctjj2T1654244531.svg"
              count="5M+"
              description="App Downloads"
            />
            <CountFeature
              imageSrc="https://image.prepladder.com/content/kpot0RquoKbbndyJ0Hlb1654244562.svg"
              count="600M+ hours"
              description="Videos watched"
            />
            <CountFeature
              imageSrc="https://image.prepladder.com/content/HqAoc28H9PERnw0zlG2R1654596182.png"
              count="200k doubts"
              description="Answered"
            />
            <CountFeature
              imageSrc="https://image.prepladder.com/content/hybBqKwYivt1op9wtqcZ1654244626.svg"
              count="10 lakh+"
              description="Tests taken"
            />
          </div>
        </div>
        <div className="col col-6 md-col-6 sm-col-12 mob-order-1 mb-small-4">
          <h2>Let the numbers do the talking</h2>
          <div className="qbankNext-subhead">
            We envision providing quality education accessible to everyone with the help of error-free content including
            <strong> HD videos, QBank, impeccable test series, and much more</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div id="banner" className="homeCarousel_homeCarousel__rdRww bg-lightgreen">
    <div className="container">
      <div className="center">
        <div className="qbankNext-head">Access PrepLadder from the platform of your choice</div>
        <div className="qbankNext-subhead mb5">Learn at your own pace and make the most of our top-quality content using the device of your choice.</div>
      </div>
    </div>
    <div>
      <div className="flex mt3 pb4">
        <div className="marquee">
          <div className="marquee-content">
            <div className="marquee-item marquee-image-1">
              <img className="marquee-image" src="https://image.prepladder.com/content/0XXs5ro6hnN7TWfS4HDR1673348895.webp" alt="animal1" loading="lazy" />
            </div>
            <div className="marquee-item marquee-image-2">
              <img className="marquee-image" src="https://image.prepladder.com/content/79f7jYBrRgLuype0ZdMC1673348949.webp" alt="animal1" loading="lazy" />
            </div>
            <div className="marquee-item marquee-image-3">
              <img className="marquee-image" src="https://image.prepladder.com/content/39CkeCpGjf37wHNh1R0P1676549127.webp" alt="animal1" loading="lazy" />
            </div>
            <div className="marquee-item marquee-image-2">
              <img className="marquee-image" src="https://image.prepladder.com/content/Ld6pZlCtTLVSatYtLlio1673349049.webp" alt="animal1" loading="lazy" />
            </div>
            <div className="marquee-item">
              <img className="marquee-image" src="https://image.prepladder.com/content/10I3gRbAQA0lWIA38v5i1673349089.webp" alt="animal1" loading="lazy" />
            </div>
            <div className="marquee-item marquee-image-3">
              <img className="marquee-image" src="https://image.prepladder.com/content/SoJpPaXVBLsxIAOmfoab1679980490.webp" alt="animal1" loading="lazy" />
            </div>
            <div className="marquee-item marquee-image-1">
              <img className="marquee-image" src="https://image.prepladder.com/content/0XXs5ro6hnN7TWfS4HDR1673348895.webp" alt="animal1" loading="lazy" />
            </div>
            <div className="marquee-item marquee-image-2">
              <img className="marquee-image" src="https://image.prepladder.com/content/79f7jYBrRgLuype0ZdMC1673348949.webp" alt="animal1" loading="lazy" />
            </div>
            <div className="marquee-item marquee-image-3">
              <img className="marquee-image" src="https://image.prepladder.com/content/39CkeCpGjf37wHNh1R0P1676549127.webp" alt="animal1" loading="lazy" />
            </div>
            <div className="marquee-item marquee-image-2">
              <img className="marquee-image" src="https://image.prepladder.com/content/Ld6pZlCtTLVSatYtLlio1673349049.webp" alt="animal1" loading="lazy" />
            </div>
            <div className="marquee-item">
              <img className="marquee-image" src="https://image.prepladder.com/content/10I3gRbAQA0lWIA38v5i1673349089.webp" alt="animal1" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}
