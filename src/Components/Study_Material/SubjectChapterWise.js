
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ExploreSubjects from './ExploreSubjects';
import RecentArticleSubjectWise from '../Menu/Blog/RecentArticleSubjectWise';

export default function SubjectChapterWise() {
  const location = useLocation();
  const { chapters } = location.state || {};
  const [expandedChapterId, setExpandedChapterId] = useState(null);

  if (!chapters || chapters.length === 0) {
    return <div>No chapters available</div>;
  }

  // Sort chapters by sequence (ascending)
  const sortedChapters = [...chapters].sort((a, b) => a.sequence - b.sequence);

  const toggleChapter = (chapterId) => {
    setExpandedChapterId(expandedChapterId === chapterId ? null : chapterId);
  };

  return (
    <div>
 <div className="bannerTwo_bannerTwo__1met5">
      <div className="container bannerTwo-container">
        <div className="row flex items-center flex-wrap">
          <div className="bannerTwo_bannerTwo-padding__Sa8PM col col-8 md-col-12">
            <div>
              <div className="bannerTwo_bannerTwo-contentRapid__R1h_O bannerTwo-containerText">
                <h4>Designed by our Anatomy Expert - Dr. Rajesh Kaushal</h4>
                <h1>The Ultimate Anatomy Online Course</h1>
                <p>
                  An esteemed leading expert on Human Anatomy, he has over 20 years of experience in paving the path to success for thousands of students.
                </p>
                <a className="btn-custom" href="#plans" text="Enrol Now" walink="/app">
                  Enrol Now
                </a>
              </div>
              <ul>
                <li>
                  <img
                    alt="App Downloads"
                    src="https://image.prepladder.com/content/ifQpft4AvA3EG5LbGPdB1677057312.png"
                  />
                  <div>
                    5M+<span>App Downloads</span>
                  </div>
                </li>
                <li>
                  <img
                    alt="Videos Watched"
                    src="https://image.prepladder.com/content/nrt3lFSvYhHVe7ROLT0h1677057077.png"
                  />
                  <div>
                    600M+<span>Hours Videos Watched</span>
                  </div>
                </li>
                <li>
                  <img
                    alt="NEET-PG 2023 Strike Rate"
                    src="https://image.prepladder.com/content/bj4svUsGAHOm03Pl7g7S1677057030.png"
                  />
                  <div>
                    96%<span>NEET-PG 2023 Strike Rate</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bannerTwo_bannerTwo-right__7goNy col col-4 md-col-12 self-end">
            <img
              alt="rajesh-kaushal"
              src="https://image.prepladder.com/content/CjQMm1qd59SUkRWE2x7F1678086984.webp"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="examReady_examReady__C7fiQ">
      <div className="container">
        <div className="qbankNext-head center mob-text-left">
          Let the Numbers Do the Talking
        </div>
        <div className="qbankNext-subhead center mb5 mob-text-left">
          Get the best-in-class &amp; comprehensive study material to boost your Anatomy preparation.
        </div>
        <div className="examReady_examReady-inner__hajuK row">
          <div className="col col-6 md-col-12">
            <ul>
              <li>
                <img
                  alt="Video lectures"
                  src="https://image.prepladder.com/content/HiHBTGPSKwpAoeJfASOQ1675927130.png"
                />
                <div>
                  210+ Anatomy Video Lectures
                  <span>High-yield video lectures for conceptual understanding.</span>
                </div>
              </li>
              <li>
                <img
                  alt="Practice questions"
                  src="https://image.prepladder.com/content/nsH7wh4GJRNIsf8dT2VU1675927155.png"
                />
                <div>
                  50+ Anatomy Practice Questions
                  <span>Questions for your continuous practice and evaluation.</span>
                </div>
              </li>
              <li>
                <img
                  alt="flashcards"
                  src="https://image.prepladder.com/content/55uqDTSEYavXu5Qb5FSQ1675927207.png"
                />
                <div>
                  120+ Anatomy Treasures
                  <span>Easy-to-recall summaries in the form of flashcards.</span>
                </div>
              </li>
              <li>
                <img
                  alt="concept pages"
                  src="https://image.prepladder.com/content/Vxc6eb1FDKTdq2w8VT6R1675927252.png"
                />
                <div>
                  450+ Anatomy Concept Pages
                  <span>Video lectures take-aways.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="col col-6 md-col-12 center">
            <img
              alt="comprehensive study material to boost your Anatomy preparation."
              src="https://image.prepladder.com/content/qghK18HWDxqz0DbvM8Z81677751811.webp"
            />
          </div>
        </div>
      </div>
    </div>
    <div id="plans">
      <div className="packPlan_packPlan-main__gIFdx">
        <div className="container">
          <div className="planHead_planMain-head__u_x3U center mob-text-left">
            The Finest Study Material to Excel in your NEET PG Preparation
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
                    position: 'relative',
                    display: 'flex',
                    overflow: 'auto',
                    scrollSnapType: 'x mandatory',
                  }}
                >
                  <div
                    className="scrollCarousel_scrollList__NkW5l"
                    style={{ flexShrink: 0, scrollSnapAlign: 'start' }}
                  >
                    <div className="scrollCarousel_scrollCarousel-main__y8UET">
                      <div className="pt2">
                        <div className="packPlan_packPlan-inner__lk19e packPlan_packPlan-pro__i7OPx">
                          <div
                            className="packPlan_packPlan-innerbg__21NtN packPlan_packPlan-proBg__Iv0WJ flex justify-between"
                            style={{ background: 'rgb(255, 238, 195)' }}
                          >
                            <div className="packPlan_packPlan-pack__cBr_S flex">
                              <div className="packPlan_packPlan-flex__0HPdU">
                                <img
                                  alt="imag"
                                  src="https://image.prepladder.com/content/tbef3Njq1jXRtwQ9zjp81677222211.png"
                                />
                              </div>
                              <div>
                                <p> ELITE Plan</p>
                                <span>Cut The Noise</span>
                              </div>
                            </div>
                            <div
                              className="packPlan_packPlan-off__HDvJJ packPlan_packPlan-proOff__zpRRo"
                              style={{ color: 'rgb(255, 194, 127)' }}
                            >
                              Login now to view the best prices
                            </div>
                            <div className="packPlan_packPlan-recommend__fRbR4">
                              <span style={{ background: 'rgb(255, 173, 59)' }}>
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
                                      alt="imag"
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
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Orange.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    18000+ questions including clinical, one-liners &amp; PYQs
                                  </div>
                                </li>
                                <li>
                                  <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                    <img
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Orange.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    1500+ summary charts in the form of treasures
                                  </div>
                                </li>
                                <li>
                                  <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                    <img
                                      alt="imag"
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
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Orange.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    Option to buy hard copy notes with space to annotate
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
                            style={{ background: 'rgb(231, 244, 255)' }}
                          >
                            <div className="packPlan_packPlan-pack__cBr_S flex">
                              <div className="packPlan_packPlan-flex__0HPdU">
                                <img
                                  alt="imag"
                                  src="https://image.prepladder.com/content/9C69qyVdOjoqIXG0kL7S1688099657.png"
                                />
                              </div>
                              <div>
                                <p> PRO Plan</p>
                                <span>India's Only Clinical QBank</span>
                              </div>
                            </div>
                            <div
                              className="packPlan_packPlan-off__HDvJJ packPlan_packPlan-proOff__zpRRo"
                              style={{ color: 'rgb(122, 139, 148)' }}
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
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Blue.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    Unlimited access to QBank &amp; Tests only (Videos Excluded)
                                  </div>
                                </li>
                                <li>
                                  <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                    <img
                                      alt="imag"
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
                                      alt="imag"
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
                                      alt="imag"
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
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Blue.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    Concise summary of Topics in form of Treasures
                                  </div>
                                </li>
                                <li>
                                  <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                    <img
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Blue.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    Proven effective Rapid Revision QBank
                                  </div>
                                </li>
                                <li>
                                  <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                    <img
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Blue.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    Conceptual Video Lectures
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
                            style={{ background: 'rgb(246, 239, 252)' }}
                          >
                            <div className="packPlan_packPlan-pack__cBr_S flex">
                              <div className="packPlan_packPlan-flex__0HPdU">
                                <img
                                  alt="imag"
                                  src="https://image.prepladder.com/content/4mvvPsOq7MPJzt0xHlj41688099644.png"
                                />
                              </div>
                              <div>
                                <p> QBank Plan</p>
                                <span>Enrich your Preparation with the best Clinical QBank</span>
                              </div>
                            </div>
                            <div
                              className="packPlan_packPlan-off__HDvJJ packPlan_packPlan-proOff__zpRRo"
                              style={{ color: 'rgb(184, 153, 196)' }}
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
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Purple.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    18,000+ questions (including clinical, one-liners &amp; PYQs)
                                  </div>
                                </li>
                                <li>
                                  <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                    <img
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Purple.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    12 Mock Tests with 1 lakh participants
                                  </div>
                                </li>
                                <li>
                                  <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                    <img
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Purple.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    QBank 6.0 featuring 18,000+ questions
                                  </div>
                                </li>
                                <li>
                                  <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                    <img
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Purple.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    QBank featuring PYQs
                                  </div>
                                </li>
                                <li>
                                  <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                    <img
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Purple.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    Previous Year Questions
                                  </div>
                                </li>
                                <li>
                                  <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                    <img
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Purple.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    Proven effective Rapid Revision QBank
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
                            style={{ background: 'rgb(255, 238, 195)' }}
                          >
                            <div className="packPlan_packPlan-pack__cBr_S flex">
                              <div className="packPlan_packPlan-flex__0HPdU">
                                <img
                                  alt="imag"
                                  src="https://image.prepladder.com/content/tbef3Njq1jXRtwQ9zjp81677222211.png"
                                />
                              </div>
                              <div>
                                <p> ELITE Plan</p>
                                <span>Cut The Noise</span>
                              </div>
                            </div>
                            <div
                              className="packPlan_packPlan-off__HDvJJ packPlan_packPlan-proOff__zpRRo"
                              style={{ color: 'rgb(255, 194, 127)' }}
                            >
                              Login now to view the best prices
                            </div>
                            <div className="packPlan_packPlan-recommend__fRbR4">
                              <span style={{ background: 'rgb(255, 173, 59)' }}>
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
                                      alt="imag"
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
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Orange.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    18000+ questions including clinical, one-liners &amp; PYQs
                                  </div>
                                </li>
                                <li>
                                  <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                    <img
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Orange.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    1500+ summary charts in the form of treasures
                                  </div>
                                </li>
                                <li>
                                  <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                    <img
                                      alt="imag"
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
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Orange.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    Option to buy hard copy notes with space to annotate
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
                            style={{ background: 'rgb(246, 239, 252)' }}
                          >
                            <div className="packPlan_packPlan-pack__cBr_S flex">
                              <div className="packPlan_packPlan-flex__0HPdU">
                                <img
                                  alt="imag"
                                  src="https://image.prepladder.com/content/4mvvPsOq7MPJzt0xHlj41688099644.png"
                                />
                              </div>
                              <div>
                                <p> QBank Plan</p>
                                <span>Enrich your Preparation with the best Clinical QBank</span>
                              </div>
                            </div>
                            <div
                              className="packPlan_packPlan-off__HDvJJ packPlan_packPlan-proOff__zpRRo"
                              style={{ color: 'rgb(184, 153, 196)' }}
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
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Purple.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    18,000+ questions (including clinical, one-liners &amp; PYQs)
                                  </div>
                                </li>
                                <li>
                                  <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                    <img
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Purple.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    12 Mock Tests with 1 lakh participants
                                  </div>
                                </li>
                                <li>
                                  <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                    <img
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Purple.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    QBank 6.0 featuring 18,000+ questions
                                  </div>
                                </li>
                                <li>
                                  <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                    <img
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Purple.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    QBank featuring PYQs
                                  </div>
                                </li>
                                <li>
                                  <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                    <img
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Purple.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    Previous Year Questions
                                  </div>
                                </li>
                                <li>
                                  <div className="packPlan_packPlan-bottomIcon__Ezkgr">
                                    <img
                                      alt="imag"
                                      src="https://image.prepladder.com/content/Check_Purple.png"
                                    />
                                  </div>
                                  <div className="packPlan_packPlan-bottomText___zHDO">
                                    Proven effective Rapid Revision QBank
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
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<ExploreSubjects/>

<RecentArticleSubjectWise />
<section className="subjectImp_subjectImp__JNvUu">
      <div className="container">
        <div>
          <div className="qbankNext-head">Why is Anatomy important?</div>
        </div>
        <p>
          Anatomy is one such subject that is not only vast but is also one of the most important for the exam point of view. The subject demands time and regular revision as it makes a major portion of the NEE
        </p>
        <a href="/more-information">Read more...</a>
      </div>
    </section>
    </div>
  );
}
