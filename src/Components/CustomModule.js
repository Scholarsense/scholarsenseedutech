import React from "react";
import HeaderAfterLogin from "./HeaderAfterLogin";
import Setting_Sidebar from "./SettingSidebar";

export default function CustomModule() {
  
      const handleOnClick = () => {
        window.location.href = '/settingHome'; // Replace with the actual URL or path you want to navigate to
      };

  return (
    <div>
      <HeaderAfterLogin />

      <div className="dash-container flex dash-main-layout video-dash-container">
        <Setting_Sidebar />
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
          <div class="appheader_section_header__9eqrR">
            <div class="flex mb2 justify-between items-center">
              <div class="appheader_section_header-breadcrumb__8xohk">
                <div class="flex">
                  <div>
                    <button
                      class="appheader_no-skew__670Tu"
                      onClick={handleOnClick}
                    >
                      <img
                        src="https://image.prepladder.com/content/Oues6YawqRn1RBZv9Y7p1709883508.svg"
                        class="darkIcon"
                        alt="img"
                      />
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="langchng_left flex1">
      <div className="flex justify-between items-center">
        <div className="dash-heading flex items-center">Custom module</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="appheader_section_header-subtitle__P93NQ">
          <div>
            <div>QBank and Test based on your preferences</div>
          </div>
        </div>
      </div>
    </div>
              
          </div>

          <div>
      <div className="practice_practice__zsDaZ dash-white-box mb32 dashnew-margin-mob flex items-center pY24 pX16 col-gap-2 justify-between">
        <div className="flex col-gap-16 items-center">
          <img src="https://image.prepladder.com/content/khG7h5BGFqNRUmkXOUEQ1691043577.png" alt="Practice"/>
          <div>
            <h3>Practice custom modules</h3>
            <p>Create and share a personalised QBank or Test module</p>
          </div>
        </div>
        <div className="practice_practice-btn__hKTgv flex col-gap-2 items-center flex-none">
          <button className="btn-custom btn-custom-nobg" style={{ padding: '1.4rem 2rem', fontSize: '1.4rem' }}>Use module code</button>
          <button className="btn-custom" style={{ fontSize: '1.4rem' }}>Create module</button>
        </div>
      </div>
    </div>
    <div className="howItWork_howItWork__yPUvb">
      <h3 className="mb24">How it works:</h3>
      <div className="howItWork_howItWork-list__mb2CN">
        <div className="flex items-center col-gap-16">
          <img src="https://image.prepladder.com/content/aPjEiYeSvne0B8LxPIDS1692772120.png" alt="" />
          <div>
            <h4>Select your preference</h4>
            <p>Choose the number of questions, their types and difficulty level</p>
          </div>
        </div>
        <div className="flex items-center col-gap-16">
          <img src="https://image.prepladder.com/content/dLbStrV9kz6kfc6Dh2Gp1691046262.png" alt="" />
          <div>
            <h4>Create a module</h4>
            <p>Start by creating a module you'd like to practice</p>
          </div>
        </div>
        <div className="flex items-center col-gap-16">
          <img src="https://image.prepladder.com/content/LqgaoFxGbpfkeKaYiUtR1692772095.png" alt="" />
          <div>
            <h4>Solve & view analysis of the module</h4>
            <p>Make necessary changes in your preparation with detailed test analysis</p>
          </div>
        </div>
        <div className="flex items-center col-gap-16">
          <img src="https://image.prepladder.com/content/w5nMePYYTCVRASyTggQy1692772037.png" alt="" />
          <div>
            <h4>Share the module</h4>
            <p>Challenge your friends and help them evaluate their exam preparation</p>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}
