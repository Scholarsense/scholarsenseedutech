import React, { useState } from "react";

const GrievanceSection = () => {
  const [activeSection, setActiveSection] = useState("intro");

  // Function to handle menu item clicks
  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
  };
  return (
    <section className="faq_faq__pMrg4 grievance_grievance__DX8pk">
      <div className="weblayout_container__0W9V9">
        <div className="weblayout_row__VBgkR flex flex-wrap">
          <div className="weblayout_col-xl-3__A1_QW weblayout_col-lg-3__iCtpl weblayout_col-md-3__Nb8FV weblayout_col-sm-12__bJVbl faq_faq__list__IpPpX faq_grievanceList__WGFsW pt5 pb5">
            <ul>
              <div className="faq_faq__head__eB1sy">Quick Links</div>
              <li>
                <a
                  className={
                    activeSection === "intro" ? "faq_faq__active__jy8L9" : ""
                  }
                  onClick={() => handleMenuClick("intro")}
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  className={
                    activeSection === "level" ? "faq_faq__active__jy8L9" : ""
                  }
                  onClick={() => handleMenuClick("level")}
                >
                  Levels
                </a>
              </li>
              <li>
                <a
                  className={
                    activeSection === "structures"
                      ? "faq_faq__active__jy8L9"
                      : ""
                  }
                  onClick={() => handleMenuClick("structures")}
                >
                  Structures
                </a>
              </li>
              <li>
                <a
                  className={
                    activeSection === "coreObjective"
                      ? "faq_faq__active__jy8L9"
                      : ""
                  }
                  onClick={() => handleMenuClick("coreObjective")}
                >
                  Core Objective
                </a>
              </li>
              <li>
                <a
                  className={
                    activeSection === "keyPillars"
                      ? "faq_faq__active__jy8L9"
                      : ""
                  }
                  onClick={() => handleMenuClick("keyPillars")}
                >
                  Key Pillars
                </a>
              </li>
              <li>
                <a
                  className={
                    activeSection === "responsibility"
                      ? "faq_faq__active__jy8L9"
                      : ""
                  }
                  onClick={() => handleMenuClick("responsibility")}
                >
                  Responsibility
                </a>
              </li>
              <li>
                <a
                  className={
                    activeSection === "monthlyReports"
                      ? "faq_faq__active__jy8L9"
                      : ""
                  }
                  onClick={() => handleMenuClick("monthlyReports")}
                >
                  Monthly Reports
                </a>
              </li>
              <li>
                <a
                  className={
                    activeSection === "faqs" ? "faq_faq__active__jy8L9" : ""
                  }
                  onClick={() => handleMenuClick("faqs")}
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="weblayout_col-xl-9__xuC_K weblayout_col-lg-9__Gcjxe weblayout_col-md-9__0xJ7q weblayout_col-sm-12__bJVbl pt5 pb5">
            {activeSection === "intro" && (
              <div className="pt5" id="intro">
                <div>
                  <img
                    src="https://image.prepladder.com/content/88a0LnixMeBl4kraKli71662527825.png"
                    alt="img"
                  />
                </div>

                {/* Introduction */}

                <div className="pt5" id="intro">
                  <div className="dash-white-box p3">
                    <p>
                      PrepLadder Grievance Redressal Council (PGRC) is a
                      first-of-its-kind initiative in the Indian EdTech
                      sector...
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeSection === "level" && (
              <div className="pt5" id="level">
                <h1>Grievance Redressal Process</h1>
                <ul className="grievance_grievance-list__jXwmz">
                  <li>
                    <div className="grievance_grievance-list-box__ZuTmr">
                      <input
                        type="checkbox"
                        name="RedressalProcess"
                        id="process-1"
                      />
                      <label htmlFor="process-1">
                        <h5>Level 1</h5>
                        <p>
                          If you’re reaching out for the first time, connect
                          with us via:
                        </p>
                      </label>
                      <div className="grievance_grievance-list-content__R67XA">
                        <div className="flex flex-wrap mb2 mt1">
                          <p className="mr2">
                            <img
                              src="https://image.prepladder.com/content/T0EsDLQR9k7wpVNKFqwE1662640905.svg"
                              alt="img"
                              className="mr1"
                            />
                            <a href="mailto:help@prepladder.com">
                              help@prepladder.com
                            </a>
                          </p>
                          <p>
                            <img
                              src="https://image.prepladder.com/content/HxWEbLTx4s2IyMF0paDU1662640922.svg"
                              alt="img"
                              className="mr1"
                            />
                            Learner/Educator support chat on the website and App
                          </p>
                        </div>
                        <p>
                          We urge you to not share any private/confidential
                          information while reaching out to us on Social Media
                          platforms.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="grievance_grievance-list-box__ZuTmr">
                      <input
                        type="checkbox"
                        name="RedressalProcess"
                        id="process-2"
                      />
                      <label htmlFor="process-2">
                        <h5>Level 2</h5>
                        <p>
                          If you’re not satisfied with the Level 1 response,
                          then you may connect with the Grievance Officer:
                        </p>
                      </label>
                      <div className="grievance_grievance-list-content__R67XA">
                        <p className="mb2">
                          <img
                            src="https://image.prepladder.com/content/T0EsDLQR9k7wpVNKFqwE1662640905.svg"
                            alt="img"
                            className="mr1"
                          />
                          <a href="mailto:consumergrievance@prepladder.com">
                            consumergrievance@prepladder.com
                          </a>
                        </p>
                        <p>
                          Please keep your ticket number from Level 1 handy.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="grievance_grievance-list-box__ZuTmr">
                      <input
                        type="checkbox"
                        name="RedressalProcess"
                        id="process-3"
                      />
                      <label htmlFor="process-3">
                        <h5>Level 3</h5>
                        <p>
                          If you’re not satisfied with the Level 2 response,
                          then you can fill out this form:
                        </p>
                      </label>
                      <div className="grievance_grievance-list-content__R67XA">
                        <button type="button" className="btn btn-custom mb2">
                          SUBMIT HERE
                        </button>
                        <p>
                          (Please note: Level 2 and Level 3 are escalations.
                          Giving a resolution on the first phone call might not
                          be possible. A complete email with the exact details
                          where the failure points at the previous levels are
                          highlighted will be required to give a complainant a
                          complete and correct resolution.)
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            )}
            {activeSection === "structures" && (
              <div className="pt5" id="structures">
                <div className="dash-white-box p3">
                  <h3>PGRC Structure</h3>
                  <p>
                    The organisation structure has been defined to ensure that
                    every grievance is addressed in a timely manner and due
                    diligence is given to every issue.
                  </p>
                  <div className="my4 center">
                    <img
                      src="https://image.prepladder.com/content/W2Uk7BKlFVhhhntAj0fn1665062287.png"
                      alt="img"
                    />
                  </div>
                  <div className="grievance_grievance-structure-list__qHEXo">
                    <ul>
                      <li>
                        <div className="flex items-center">
                          <img
                            src="https://image.prepladder.com/content/r4Mws7T0c5yHlWzWIRi41665033900.jpeg"
                            alt="img"
                          />
                          <div>
                            <div className="grievance_name__DNaey">
                              Prof. Rajan Saxena
                            </div>
                            <div className="grievance_position__tDl_j">
                              Chair, UGRC
                            </div>
                          </div>
                        </div>
                        <p>
                          Ex NMIMS Vice Chancellor, Ex Director IIM Indore,
                          SPJIMR, IBSG, Author,
                          <br />
                          External Member, UGRC
                        </p>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <img
                            src="https://image.prepladder.com/content/E3KxRkliWeHeYRr56lBK1683201198.webp"
                            alt="img"
                          />
                          <div>
                            <div className="grievance_name__DNaey">
                              Mr. Nilesh Yadav
                            </div>
                            <div className="grievance_position__tDl_j">
                              Chief Grievance Officer, PGRC
                            </div>
                          </div>
                        </div>
                        <p>Director-Operations, PrepLadder</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {activeSection === "coreObjective" && (
              <div className="pt5" id="coreObjective">
                <div className="dash-white-box p3">
                  <h3>Core Objective</h3>
                  <p>
                    To create robust systems and processes to ensure effective
                    and timely solutions to grievances with an impartial
                    approach to set higher benchmarks towards effective
                    stakeholder engagement.
                  </p>
                </div>
              </div>
            )}
            {activeSection === "keyPillars" && (
              <div className="pt5" id="keyPillars">
                <h2>Key Pillars</h2>
                <ul className="grievance_grievance-list__jXwmz">
                  <li>
                    <div className="grievance_grievance-list-box__ZuTmr">
                      <input type="checkbox" name="keypillars" id="Pillars-1" />
                      <label htmlFor="Pillars-1">
                        <h5>
                          <img
                            src="https://image.prepladder.com/content/sQKn5ePuypYRV1nlkick1662533256.png"
                            alt="img"
                          />{" "}
                          Transparency and Accountability
                        </h5>
                      </label>
                      <div className="grievance_grievance-list-content__R67XA">
                        <p>
                          The Redressal process is clearly defined and made
                          public. Additionally, PrepLadder has provided various
                          channels to register grievances. Our robust processes
                          also ensure that those seeking redressal know that
                          there is a dedicated entity in charge of the process
                          and that every grievance is considered in a timely,
                          objective and neutral manner.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="grievance_grievance-list-box__ZuTmr">
                      <input type="checkbox" name="keypillars" id="Pillars-2" />
                      <label htmlFor="Pillars-2">
                        <h5>
                          <img
                            src="https://image.prepladder.com/content/UcYX0j4jEa4m77zWKKyl1662533816.png"
                            alt="img"
                          />{" "}
                          Fair and Empowering
                        </h5>
                      </label>
                      <div className="grievance_grievance-list-content__R67XA">
                        <p>
                          A skilled centralized team is dedicated to maintaining
                          transparency and accountability in the process. This
                          team ensures all grievances and complaints are
                          impartially evaluated and resolved.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="grievance_grievance-list-box__ZuTmr">
                      <input type="checkbox" name="keypillars" id="Pillars-3" />
                      <label htmlFor="Pillars-3">
                        <h5>
                          <img
                            src="https://image.prepladder.com/content/sQKn5ePuypYRV1nlkick1662533256.png"
                            alt="img"
                          />{" "}
                          External Oversight
                        </h5>
                      </label>
                      <div className="grievance_grievance-list-content__R67XA">
                        <p>
                          At PrepLadder, we believe that it is essential for a
                          robust grievance redressal mechanism to have an
                          external independent oversight to maintain
                          transparency, objectivity and impartiality. This
                          strengthens the integrity of the system and adds to
                          its credibility.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="grievance_grievance-list-box__ZuTmr">
                      <input type="checkbox" name="keypillars" id="Pillars-4" />
                      <label htmlFor="Pillars-4">
                        <h5>
                          <img
                            src="https://image.prepladder.com/content/UcYX0j4jEa4m77zWKKyl1662533816.png"
                            alt="img"
                          />{" "}
                          Credibility
                        </h5>
                      </label>
                      <div className="grievance_grievance-list-content__R67XA">
                        <p>
                          With the presence of an external independent
                          oversight, we ensure that our grievance redressal
                          mechanism has credibility, which not only strengthens
                          the system but also reassures stakeholders that their
                          grievances will be dealt with fairly and objectively.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            )}
            {activeSection === "responsibility" && (
              <div className="pt5" id="responsibility">
                <div className="grievance_grievance-responsibility__M_8db dash-white-box p3 ">
                  <h3>Responsibility</h3>
                  <p>
                    PGRC shall be responsible to ensure that grievances are
                    dealt with effectively in accordance with the ‘Grievance
                    Procedures’.
                    <br />
                    <br />
                    <strong>
                      In doing so, the council shall adhere to these principles:
                    </strong>
                  </p>
                  <ul className="flex flex-wrap">
                    <li>
                      <img
                        src="https://image.prepladder.com/content/VvXIxbomygaOkmfPEkcF1662534128.png"
                        alt="img"
                      />{" "}
                      Take each grievance with utmost sincerity and address key
                      questions on why the complainant feels aggrieved, unhappy
                      or dissatisfied
                    </li>
                    <li>
                      <img
                        src="https://image.prepladder.com/content/GxO6vo9tcGekwbuKmMOH1662641358.png"
                        alt="img"
                      />{" "}
                      Investigate the facts and surrounding circumstances
                    </li>
                    <li>
                      <img
                        src="https://image.prepladder.com/content/PEoYcFB95J4BHN9Scvrs1662534151.png"
                        alt="img"
                      />{" "}
                      Communicate to the complainant about revert timelines
                    </li>
                    <li>
                      <img
                        src="https://image.prepladder.com/content/GfN2uCHPPneE1CCeheon1662534159.png"
                        alt="img"
                      />{" "}
                      Provide feedback to the complainant about what can/cannot
                      be done to resolve the grievance
                    </li>
                    <li>
                      <img
                        src="https://image.prepladder.com/content/iJejEWCE1MIbgAMrhTMq1662534178.png"
                        alt="img"
                      />{" "}
                      Take necessary follow-up action
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {activeSection === "monthlyReports" && (
              <div className="pt5" id="monthlyReports">
                <div className="grievance_grievance-pgrc__SNVeJ mt4">
                  <h2>Monthly Reports</h2>
                  <div className="grievance_pgrac_para__p2A4o">
                    The Report gives a synoptic view of the organizational
                    structure, functions and activities of the PGRC undertaken
                    monthly.
                  </div>
                  <h3 className="mt24 mb16">2023</h3>
                  <ul className="grievance_monthCalender__Lx6lr">
                    <li>
                      <button className="width-100">
                        <div className="flex items-center justify-center">
                          <span>Jan</span>{" "}
                          <img
                            src="https://image.prepladder.com/content/eaCBr9eNGqmoyNx0k3l81669112548.svg"
                            alt="icon"
                          />
                        </div>
                      </button>
                    </li>
                    <li>
                      <button className="width-100">
                        <div className="flex items-center justify-center">
                          <span>Feb</span>{" "}
                          <img
                            src="https://image.prepladder.com/content/eaCBr9eNGqmoyNx0k3l81669112548.svg"
                            alt="icon"
                          />
                        </div>
                      </button>
                    </li>
                    <li>
                      <button className="width-100">
                        <div className="flex items-center justify-center">
                          <span>Mar</span>{" "}
                          <img
                            src="https://image.prepladder.com/content/eaCBr9eNGqmoyNx0k3l81669112548.svg"
                            alt="icon"
                          />
                        </div>
                      </button>
                    </li>
                    <li>
                      <button className="width-100">
                        <div className="flex items-center justify-center">
                          <span>Apr</span>{" "}
                          <img
                            src="https://image.prepladder.com/content/eaCBr9eNGqmoyNx0k3l81669112548.svg"
                            alt="icon"
                          />
                        </div>
                      </button>
                    </li>
                    <li>
                      <button className="width-100">
                        <div className="flex items-center justify-center">
                          <span>May</span>{" "}
                          <img
                            src="https://image.prepladder.com/content/eaCBr9eNGqmoyNx0k3l81669112548.svg"
                            alt="icon"
                          />
                        </div>
                      </button>
                    </li>
                    <li>
                      <button className="width-100">
                        <div className="flex items-center justify-center">
                          <span>Jun</span>{" "}
                          <img
                            src="https://image.prepladder.com/content/eaCBr9eNGqmoyNx0k3l81669112548.svg"
                            alt="icon"
                          />
                        </div>
                      </button>
                    </li>
                    <li>
                      <button className="width-100">
                        <div className="flex items-center justify-center">
                          <span>Jul</span>{" "}
                          <img
                            src="https://image.prepladder.com/content/eaCBr9eNGqmoyNx0k3l81669112548.svg"
                            alt="icon"
                          />
                        </div>
                      </button>
                    </li>
                    <li>
                      <button className="width-100">
                        <div className="flex items-center justify-center">
                          <span>Aug</span>{" "}
                          <img
                            src="https://image.prepladder.com/content/eaCBr9eNGqmoyNx0k3l81669112548.svg"
                            alt="icon"
                          />
                        </div>
                      </button>
                    </li>
                    <li>
                      <button className="width-100">
                        <div className="flex items-center justify-center">
                          <span>Sep</span>{" "}
                          <img
                            src="https://image.prepladder.com/content/eaCBr9eNGqmoyNx0k3l81669112548.svg"
                            alt="icon"
                          />
                        </div>
                      </button>
                    </li>
                    <li>
                      <button className="width-100">
                        <div className="flex items-center justify-center">
                          <span>Oct</span>{" "}
                          <img
                            src="https://image.prepladder.com/content/eaCBr9eNGqmoyNx0k3l81669112548.svg"
                            alt="icon"
                          />
                        </div>
                      </button>
                    </li>
                    <li>
                      <button className="width-100">
                        <div className="flex items-center justify-center">
                          <span>Nov</span>{" "}
                          <img
                            src="https://image.prepladder.com/content/eaCBr9eNGqmoyNx0k3l81669112548.svg"
                            alt="icon"
                          />
                        </div>
                      </button>
                    </li>
                    <li>
                      <button className="width-100">
                        <div className="flex items-center justify-center">
                          <span>Dec</span>{" "}
                          <img
                            src="https://image.prepladder.com/content/eaCBr9eNGqmoyNx0k3l81669112548.svg"
                            alt="icon"
                          />
                        </div>
                      </button>
                    </li>
                  </ul>
                  <p className="mb1">
                    <em>
                      <b>
                        The PGRC shall be functional from Monday to Friday
                        during working hours (10:00 AM- 7 PM) only.
                      </b>
                    </em>
                  </p>
                  <p className="mb1">
                    <em>
                      <b>
                        Any grievance filed after working hours or on any
                        holiday or weekends (Saturday &amp; Sunday) shall be
                        treated to have been filed on the next working day.
                      </b>
                    </em>
                  </p>
                  <p className="mb1">
                    <em>
                      <b>
                        PGRC mandates and processes are subject to revision
                        based on the evolving guidelines and best practices.
                      </b>
                    </em>
                  </p>
                </div>
              </div>
            )}
            <div className="grievance_grievance-faq__MMK1d pt5" id="faqs">
              <div className="center pt1">
                <img
                  src="https://image.prepladder.com/content/XKsFRflWYcAGFdwvX66x1662537365.png"
                  alt="img"
                  className="width-6rem"
                />
                <h2>Frequently asked questions</h2>
                <p>
                  Haven’t found an answer and need help? Email us on{" "}
                  <span>
                    <a href="mailto:help@scholarsense.com">help@scolarsense.com</a>
                  </span>
                </p>
              </div>
              <ul className="grievance_grievance-list__jXwmz flex flex-wrap">
                <li>
                  <a href="/help-center/my-account">My Account</a>
                </li>
                <li>
                  <a href="/">
                    Login Issues
                  </a>
                </li>
                <li>
                  <a href="/">Payments</a>
                </li>
                <li>
                  <a href="/">
                    Classes and Courses
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrievanceSection;