import React, { useState } from "react";
import HelpSideBar from "./HelpSideBar";

// Main App component
const HelpMyAccount = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestion === questionIndex) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(questionIndex);
    }
  };

  return (
    <div className="py6 lastsection">
      <div className="weblayout_container__0W9V9 flex flex-wrap pb5">
        <HelpSideBar />
        <div className="helpCenter_helpcenter_main_right__TctrC">
          <div className="helpCenter_helpcenter_main_right_inner__66w8d">
            <h1 className="helpCenter_main_hed__5Z3xE">
              <img
                src="https://image.prepladder.com/content/R6eYs3h0KDnaB7U3zEk91640249857.svg"
                alt="icon"
              />{" "}
              My Account
            </h1>
            <ul className="helpCenter_helpcenter_listing__Lovp0">
              <li
                className="helpCenter_help_bg___I6oI"
                onClick={() => toggleQuestion(0)}
              >
                <img
                  src="https://image.prepladder.com/content/unQXEx0FCVm0MOF1qWSB1639566758.svg"
                  alt="icon"
                />
                <div>
                  <h2>How do I log out of my ScholarSense account?</h2>
                  {activeQuestion === 0 && (
                    <p>
                      To log out, go to the settings and click the 'Log out'
                      button. Make sure to confirm when prompted.
                    </p>
                  )}
                </div>
              </li>
              <li
                className="helpCenter_help_bg___I6oI"
                onClick={() => toggleQuestion(1)}
              >
                <img
                  src="https://image.prepladder.com/content/unQXEx0FCVm0MOF1qWSB1639566758.svg"
                  alt="icon"
                />
                <div>
                  <h2>How do I change/update my mobile number or email?</h2>
                  {activeQuestion === 1 && (
                    <p>
                      To renew or extend your subscription, go to the
                      subscription section and select the plan you want to
                      renew. Follow the payment process to complete the renewal.
                    </p>
                  )}
                </div>
              </li>
              <li
                className="helpCenter_help_bg___I6oI"
                onClick={() => toggleQuestion(2)}
              >
                <img
                  src="https://image.prepladder.com/content/unQXEx0FCVm0MOF1qWSB1639566758.svg"
                  alt="icon"
                />
                <div>
                  <h2>How do I renew/extend my subscription?</h2>
                  {activeQuestion === 2 && (
                    <p>
                      To renew or extend your subscription, go to the
                      subscription section and select the plan you want to
                      renew. Follow the payment process to complete the renewal.
                    </p>
                  )}
                </div>
              </li>
              <li
                className="helpCenter_help_bg___I6oI"
                onClick={() => toggleQuestion(3)}
              >
                <img
                  src="https://image.prepladder.com/content/unQXEx0FCVm0MOF1qWSB1639566758.svg"
                  alt="icon"
                />
                <div>
                  <h2>How can I check my plan validity?</h2>
                  {activeQuestion === 3 && (
                    <p>
                      To check your plan validity, go to the subscription
                      section in your profile. You will see the expiry date of
                      your current plan.
                    </p>
                  )}
                </div>
              </li>
              <li
                className="helpCenter_help_bg___I6oI"
                onClick={() => toggleQuestion(4)}
              >
                <img
                  src="https://image.prepladder.com/content/unQXEx0FCVm0MOF1qWSB1639566758.svg"
                  alt="icon"
                />
                <div>
                  <h2>How can I change my course?</h2>
                  {activeQuestion === 4 && (
                    <p>
                      To change your course, go to the courses section and
                      select the course you want to switch to. Follow the
                      instructions to confirm the change.
                    </p>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpMyAccount;
