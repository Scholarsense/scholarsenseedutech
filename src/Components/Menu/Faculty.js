import React, { useState } from 'react';

export default function Faculty() {
    const [activeProf, setActiveProf] = useState(null);

  const handleProfClick = (profId) => {
    const element = document.getElementById(`section-${profId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveProf(profId);
    }
  };
  return (
    <div>
    <section className="dreamTeam_dreamTeamBanner__tWm6g">
      <div className="container newPlan-container">
        <div className="row flex flex-wrap items-center">
          <div className="col col-7 md-col-12 mb-small-4 waitlistDream-Left">
            <div className="react-reveal waitlist waitlistDream" >
              <div>
                <div className="mediacalPlan-title pt2">
                  <h1 className="waitlistDream-top mb1">MEET THE DREAM TEAM
                    <div className="starIcon waitlistDream-starIcon">
                      <span><img src="https://image.prepladder.com/content/wD2VurlIMEmMKi0cmDIr1672986604.png" alt="" /></span>
                      <span><img src="https://image.prepladder.com/content/rwqD2tYqERIWruwJG6B71672986586.png" alt="" /></span>
                      <span><img src="https://image.prepladder.com/content/794bPog8US03e3fCjBVi1672986569.png" alt="" /></span>
                    </div>
                  </h1>
                  <h2 className="mt1">Receive Step-By-Step Guidance</h2>
                  <h3>From Our Dream Team</h3>
                </div>
              </div>
              <div>
                <div className="mediacalPlan-Subtitle medicalPlan-secondSection">
                  <p>Our Teaching Experts are here to guide you at every step of the preparation, enabling you to run the course well and crack the entrance exam.</p>
                </div>
              </div>
              <button className=" mt32 flex items-center header_headerBtn__WRwZ9 btn button-default">Know more
                <div className="ml1 medical-secondBtn">
                  <img src="https://image.prepladder.com/content/SVdFfyEdLjQXuCWzdok81673003251.png" alt="" />
                  <img src="https://image.prepladder.com/content/SVdFfyEdLjQXuCWzdok81673003251.png" alt="" />
                </div>
              </button>
            </div>
          </div>
          <div className="col col-5 md-col-12 waitlistDream-rightImg">
            <img src="https://image.prepladder.com/content/htBunEPEe2vz4U46CoP11689322799.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section className="dreamTeam_dreamTeam__8Cvjt home_planNew__Y8di5" id="faculty-section">
      <div>
      <ul className="home_planNew-menu__qwyW1 dreamTeam_planList-sticky__Q_5uc flex center">
        <li><a id="link-Prof1" style={{ textDecoration: activeProf === 'Prof1' ? 'underline' : 'none' }} onClick={() => handleProfClick('Prof1')}>Prof 1</a></li>
        <li><a id="link-Prof2" style={{ textDecoration: activeProf === 'Prof2' ? 'underline' : 'none' }} onClick={() => handleProfClick('Prof2')}>Prof 2</a></li>
        <li><a id="link-Prof3" style={{ textDecoration: activeProf === 'Prof3' ? 'underline' : 'none' }} onClick={() => handleProfClick('Prof3')}>Prof 3</a></li>
        <li><a id="link-Prof4" style={{ textDecoration: activeProf === 'Prof' ? 'underline' : 'none' }} onClick={() => handleProfClick('Prof4')}>Prof 4</a></li>
      </ul>
        <div className="weblayout_container__0W9V9 home_main-center__ydeQe">
        
          <div id="section-Prof1" className={`section ${activeProf === 'Prof1' ? 'active' : ''}`}>
              <section className="dreamTeam_dreamTeam-section__wRfgK">
                <h2>Prof 1</h2>
                <div className="dreamTeam_dreamTeam-list__JTLqK mt3">
                  <ul className="upcomingDream-bg">
                    <div className="upcomingDream-bgInner">
                      <li className="">
                        <div className="dreamTeam_dreamTeam-list-img__PwmR_">
                          <div className="dreamTeam_dreamTeam-list-bg__YJ_op upcomingDream-list">
                            <img src="https://image.prepladder.com/content/IzXBpOO8j45GjGavSGFO1673000164.png" alt="img" />
                          </div>
                        </div>
                        <div className="dreamTeam_dreamTeam-content__WEVSS">
                          <h4>Dr. Rajesh Kaushal</h4>
                          <div className="dreamTeam_subName__pLKE7">Anatomy</div>
                          <p>Dr. Rajesh K Kaushal is the Director of Human Anat Academia, the Institute involved in providing a comfortable environment for learning Anatomy through simplistic and highly effective, modernized lectures conducted throughout India and abroad for the PG aspirants preparing for examinations conducted by AIIMS, PGI Chandigarh, JIPMER, NIMHANS, AIPG (NEET) and DNB.</p>
                          <button className="header_headerBtn__WRwZ9 btn button-default">Know more</button>
                        </div>
                      </li>
                    </div>
                    <div className="upcomingDream-bgInner">
  <ul>
    <li className="">
      <div className="dreamTeam_dreamTeam-list-img__PwmR_">
        <div className="dreamTeam_dreamTeam-list-bg__YJ_op upcomingDream-list">
          <img src="https://image.prepladder.com/content/PTX3v7jt3jCVkDEHxlX11673000137.png" alt="img" />
        </div>
      </div>
      <div className="dreamTeam_dreamTeam-content__WEVSS">
        <h4>Dr. Soumen Manna</h4>
        <div className="dreamTeam_subName__pLKE7">Physiology</div>
        <p>Dr. Soumen Manna, MBBS, MD completed his graduation from Nil Ratan Sircar Medical College, Kolkata, and MD in Physiology from All India Institute of Medical Sciences, Delhi in 2012. Dr. Soumen did his Senior Residency from VMMC &amp; Safdarjung Hospital, Delhi and currently worked as an associate professor. Dr. Soumen also worked as an assistant professor in Himalayan Institute of Medical Sciences, Dehradun for 2 years. Dr. Soumen Manna has authored one book “Review of Physiology” and in his 12 years of teaching experience, he has helped thousands of UG, PG, and FMGE aspirants.</p>
        <button className="header_headerBtn__WRwZ9 btn button-default">Know more</button>
      </div>
    </li>
  </ul>
</div>
                  </ul>
                </div>
              </section>
            </div>
            <div>
            <div id="section-Prof2" className={`section ${activeProf === 'Prof2' ? 'active' : ''}`}>
    <section className="dreamTeam_dreamTeam-section__wRfgK">
      <h2>Prof 2</h2>
      <div className="dreamTeam_dreamTeam-list__JTLqK mt3">
        <ul className="upcomingDream-bg">
          <div className="upcomingDream-bgInner">
            <li className="">
              <div className="dreamTeam_dreamTeam-list-img__PwmR_">
                <div className="dreamTeam_dreamTeam-list-bg__YJ_op upcomingDream-list">
                  <img src="https://image.prepladder.com/content/0G3YTJ5ggaDcCtvtXIY41676437249.png" alt="img" />
                </div>
              </div>
              <div className="dreamTeam_dreamTeam-content__WEVSS">
                <h4>Dr. Preeti Sharma</h4>
                <div className="dreamTeam_subName__pLKE7">Pathology & Microbiology</div>
                <p>The Patho Mage Dr. Preeti Sharma is a gold medal winner from the renowned Safdarjung hospital in pathology. She has taught numerous batches of students both nationally and internationally. She has over 5 years of experience teaching students preparing for NEET PG, INICET, FMGE, USMLE, NURSING and DENTAL entrance exams. Her teaching style is conceptual and integrated. Making the world of pink and blue easier by adding mnemonics and picmonics. Left-handed passionate pathologist using the right side of her brain to make the subject palatable and easy to comprehend! She will help you in "Fixing the Concept in your brain"</p>
                <button className="header_headerBtn__WRwZ9 btn button-default">Know more</button>
              </div>
            </li>
          </div>
          <div className="upcomingDream-bgInner">
            <li className="">
              <div className="dreamTeam_dreamTeam-list-img__PwmR_">
                <div className="dreamTeam_dreamTeam-list-bg__YJ_op upcomingDream-list">
                  <img src="https://image.prepladder.com/content/BSz2e7buTVheD0qZYL4h1713769300.png" alt="img" />
                </div>
              </div>
              <div className="dreamTeam_dreamTeam-content__WEVSS">
                <h4>Dr. Ankit Kumar</h4>
                <div className="dreamTeam_subName__pLKE7">Pharmacology</div>
                <p>Dr. Ankit Kumar is a seasoned expert in pharmacology having over 12 years of experience in the medical field. With a distinguished academic background including a Gold medal in MBBS from Maulana Azad Medical College and an MD in Pharmacology, Dr. Kumar's journey has been marked by deep involvement in both animal and clinical research. His extensive career spans roles as a drug safety physician, medical writer, and head faculty at the Delhi Academy of Medical Sciences, where he mentored MBBS graduates globally. Driven by his passion for teaching and commitment to pharmacovigilance, Dr. Kumar is dedicated to ensuring the academic success of PrepLadder students by leveraging his wealth of experience and expertise in the field.</p>
                <button className="header_headerBtn__WRwZ9 btn button-default">Know more</button>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </section>
  </div>
</div>
          </div>
        </div>
    
    </section>
    </div>
  )
}
