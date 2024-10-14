import React, { useState } from "react";

export default function BlogDropdownMenu() {
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
    <div className="blogs1_blognew_banner__ox8BB">
      <div className="container">
        <div className="blogs1_blognew_banner--inner__kBSBw">
          <div className="blogs1_blognew_banner--tabs__GTs6I blogs1_menu_hide__hEn3d">
            <div>
              <ul>
                <li className={`blogs1_active__OAA09 ${isOpen ? "open" : ""}`}>
                  <label onClick={() => toggleDropdown("studyMaterial")}>
                    Study Material
                  </label>
                  {isOpen && (
                    <div className="blogs1_tabs_drpdwn__cd_4w">
                      <ul>
                        <li>
                          <a href="/anatomy" title="Anatomy">
                            Anatomy
                          </a>
                        </li>
                        <li>
                          <a href="/" title="Physiology">
                            Physiology
                          </a>
                        </li>
                        <li>
                          <a href="/" title="Biochemistry">
                            Biochemistry
                          </a>
                        </li>
                        <li>
                          <a href="/" title="Pharmacology">
                            Pharmacology
                          </a>
                        </li>
                        <li>
                          <a href="/" title="Microbiology">
                            Microbiology
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li
                  className={`blogs1_active__OAA09 ${isOpenExam ? "open" : ""}`}
                >
                  <label onClick={() => toggleDropdown("examGuide")}>
                    Exam Guide
                  </label>
                  {isOpenExam && (
                    <div className="blogs1_tabs_drpdwn__cd_4w">
                      <ul>
                        <li>
                          <a href="/examPattern" title="Exam Pattern">
                            Exam Pattern
                          </a>
                        </li>
                        <li>
                          <a href="/examEligibilty" title="Exam Eligibility">
                            Exam Eligibility
                          </a>
                        </li>
                        <li>
                          <a href="/notification" title="Notifications">
                            Notifications
                          </a>
                        </li>
                        <li>
                          <a
                            href="/preparationStrategy"
                            title="Preparation Strategy"
                          >
                            Preparation Strategy
                          </a>
                        </li>
                        <li>
                          <a
                            href="/previousYearsQA"
                            title="Previous Years Question Papers"
                          >
                            Previous Years Question Papers
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li
                  className={`blogs1_active__OAA09 ${
                    isOpenExamPattern ? "open" : ""
                  }`}
                >
                  <label onClick={() => toggleDropdown("freeResources")}>
                    Free Resources
                  </label>
                  {isOpenExamPattern && (
                    <div className="blogs1_tabs_drpdwn__cd_4w">
                      <ul>
                        <li>
                          <a
                            href="https://www.youtube.com/playlist?list=PLJY0wCIFC-JgfWxFcFMAwOGO2rH_nhIHU"
                            title="Toppers Interview"
                          >
                            Toppers Interview
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://t.me/medicalprep"
                            title="Telegram - MedPrep"
                          >
                            Telegram - MedPrep
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
