import React from "react";
import HeaderAfterLogin from "../../HeaderAfterLogin";
import Setting_Sidebar from "../../SettingSidebar";

export default function Bookmarks() {
  const handleClick = () => {
    // Navigate to a new page here
    window.open("http://localhost:3000/settingHome", "_blank");
  };

  const handleOnClick = () => {
    window.location.href = "/video"; // Replace with the actual URL or path you want to navigate to
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
          <div className="appheader_section_header__9eqrR">
            <div className="flex mb2 justify-between items-center">
              <div className="appheader_section_header-breadcrumb__8xohk">
                <div className="flex">
                  <div>
                    <button
                      className="appheader_no-skew__670Tu"
                      onClick={handleClick}
                    >
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
                  <div className="dash-heading flex items-center">
                    Bookmarks
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="appheader_section_header-subtitle__P93NQ">
                    <div>
                      <div>Access all your bookmarks with ease</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="appheader_section_header-tab__FZ2TL">
                <ul className="flex">
                  <li className="appheader_list-active__9yKUi disabled">
                    Video
                  </li>
                  <li className="">QBank</li>
                  <li className="">Tests</li>
                  <li className="">Treasures</li>
                  <li className="">Notes</li>
                </ul>
              </div>
            </div>
          </div>
          <section className="">
            <div className="dash-mob-space">
              <div className="emptyState_empty__6YBA_">
                <div className="emptyState_empty-img__qInG8 mb16">
                  <img
                    src="https://image.prepladder.com/content/i6WmsbRSgEXimvbLUXmh1640256652.svg"
                    alt="icon"
                  />
                </div>
                <div className="emptyState_empty-head__tNp10">
                  No bookmarked Video
                </div>
                <div className="emptyState_empty-subhead__Ap7Ls">
                  Tap the bookmark icon to save a video, so you can easily find
                  it later.
                </div>
                <button className="btn-custom" onClick={handleOnClick}>
                  Continue learning
                </button>
              </div>
            </div>
            <div className="modal display-none">
              <section className="popup_modal-main__jNO6e popup_videoAI-popup__Ni_fB flex items-center justify-center">
                <div className="react-reveal popup_popup__6Zv2F popup_video-popupNew__dya4S">
                  <button className="popup_popup_close__O0kkz" type="button">
                    <img
                      src="https://image.prepladder.com/content/Z1TxFCMcxQg8qis2CO4p1688641226.svg"
                      alt="close"
                      title="close"
                      className="darkIcon"
                    />
                  </button>
                  <div className="popup_mainPopup__uF_BK">
                    <div className="popup_mainPopup-inner__unXan flex items-centers justify-between">
                      <div className="video_videoApp___366A video_videoApp-container__LguCM popup_video-popupNew-main__ZCQ89 flex items-center flex-wrap">
                        <div className="video_videoApp-left__nEvd5 col col-7 md-col-7 sm-col-12">
                          <h4>Notes available on app</h4>
                          <p>
                            Download Scholar Sense learning app to Kickstart
                            your exam preparation with the{" "}
                            <span>Dream Team</span>
                          </p>
                          <div className="video_videoApp-cta__9KLgw popup_video-popupNew-cta__16Ofr flex flex-wrap">
                            <a
                              className="flex mr16"
                              href="https://play.google.com/store/apps/details?id=com.prepladder.learningapp"
                              target="blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="https://image.prepladder.com/content/hAj8aHz99C3yw4JNIfJQ1680176304.png"
                                alt="Play Store"
                              />
                            </a>
                            <a
                              className="flex"
                              href="https://itunes.apple.com/us/app/prepladder/id1622337839"
                              target="blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="https://image.prepladder.com/content/xWe6RvofXtARALxLCT391680176327.png"
                                alt="App Store"
                              />
                            </a>
                          </div>
                          <div className="video_videoApp-scan__uJ9ha flex items-center">
                            <img
                              src="https://image.prepladder.com/content/yM2XamTorq1ZuaA7D95k1658992652.png"
                              alt="img"
                            />
                            <h5>
                              Scan to download on{" "}
                              <div> Play store or Appstore</div>
                            </h5>
                          </div>
                          <button type="button" className="btn-custom mt16">
                            Go back
                          </button>
                        </div>
                        <div className="video_videoApp-right__56msx popup_video-popupNew-right__L3nnN col col-5 md-col-5 flex justify-center video-downloadApp">
                          <img
                            src="https://image.prepladder.com/content/kg14okPH1kUKSxGZD34b1680162998.png"
                            alt="mobile"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
