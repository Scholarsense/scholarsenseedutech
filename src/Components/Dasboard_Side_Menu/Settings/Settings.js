import React from 'react';
import HeaderAfterLogin from '../../HeaderAfterLogin';
import SettingSidebar from '../../SettingSidebar';

export default function Settings() {
  return (
    <div>
      <HeaderAfterLogin />

      <div className="dash-container flex dash-main-layout video-dash-container">
      <SettingSidebar/>
    <div id="right_section" className="applayout_section__right__5EPWR video-section false">
      <div className="ExperienceSticky items-center justify-between">
        <h4>For better experience switch to the app.</h4>
        <div className="flex items-center flex-none">
          <button className="btn-custom flex-none" style={{ padding: '8px 16px' }}>
            Download
          </button>
          <div className="ExperienceSticky-cross">
            <img
              src="https://image.prepladder.com/content/wd5SX8TSh6x03lCU5FQW1683285998.png"
              alt="close"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="appheader_section_header__9eqrR">
          <div className="flex mb2 justify-between items-center">
            <div className="appheader_section_header-breadcrumb__8xohk">
              <div className="flex">
                <div>
                  <button className="appheader_no-skew__670Tu">
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
                <div className="dash-heading flex items-center">Settings</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="appheader_section_header-subtitle__P93NQ"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal display-none">
          <section className="popup_modal-main__jNO6e popup_videoAI-popup__Ni_fB flex items-center justify-center">
            <div className="react-reveal popup_popup__6Zv2F">
              <button className="popup_popup_close__O0kkz" type="button">
                <img
                  src="https://image.prepladder.com/content/Z1TxFCMcxQg8qis2CO4p1688641226.svg"
                  alt="close"
                  title="close"
                  className="darkIcon"
                />
              </button>
              <div className="center">
                <div className="dash-heading">Share with</div>
                <div className="popup_Popup-socialIcons__BkvS_">
                  <ul className="flex justify-center">
                    <li>
                      <a target="blank" href="https://www.facebook.com/sharer/sharer.php?u=">
                        <img
                          src="https://image.prepladder.com/content/L1TE42Pa1v5TdfTJG0aJ1640353157.svg"
                          alt="Facebook"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        target="blank"
                        href="https://api.whatsapp.com/send?text="
                        data-action="share/whatsapp/share"
                      >
                        <img
                          src="https://image.prepladder.com/content/VnGa7BXaWcdNoyMgeWqr1709890972.svg"
                          alt="whatsapp1"
                          className=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="popup_Popup-share__69vb3 flex justify-between items-center">
                  <h6></h6>
                  <button value="" type="button"></button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section>
          <div>
            <div>
              <div className="setting_setting__uVhnO">
                <div className="dash-white-box p-16 mb2">
                  <div className="setting_setting-title__qHyhx">Default video settings</div>
                  <ul>
                    <li className="flex justify-between items-center cursor-pointer">
                      <div className="setting_setting-list__name__C53dB">
                        <img
                          src="https://image.prepladder.com/content/gnZGkLLktaOQLN121oP51636463461.png"
                          alt="img"
                        />
                        Quality
                      </div>
                      <div className="setting_setting-filter__Ugwqo">
                        <select className="darkIcon" name="videoResolution">
                          <option value="Auto">Auto</option>
                          <option value="1080p">High</option>
                          <option value="540p">Medium</option>
                          <option value="360p">Low</option>
                        </select>
                      </div>
                    </li>
                    <li className="flex justify-between items-center cursor-pointer">
                      <div className="setting_setting-list__name__C53dB">
                        <img
                          src="https://image.prepladder.com/content/RCeWkPTsEBfCBaN5LiYc1636462870.png"
                          alt="img"
                        />
                        Speed
                      </div>
                      <div className="setting_setting-filter__Ugwqo">
                        <select className="darkIcon" name="videoSpeed">
                          <option value=".8x">.8x</option>
                          <option value="1x">1x</option>
                          <option value="1.2x">1.2x</option>
                          <option value="1.5x">1.5x</option>
                          <option value="1.8x">1.8x</option>
                          <option value="2.0x">2.0x</option>
                        </select>
                      </div>
                    </li>
                    <li className="flex justify-between items-center cursor-pointer">
                      <div className="setting_setting-list__name__C53dB">
                        <img
                          src="https://image.prepladder.com/content/H5UHBW0KiAsoOicw3TXT1636463505.png"
                          alt="img"
                        />
                        Download video resolution
                      </div>
                      <div className="setting_setting-filter__Ugwqo">
                        <select className="darkIcon" name="downloadVideoResolution">
                          <option value="1080p">High</option>
                          <option value="540p">Medium</option>
                          <option value="360p">Low</option>
                        </select>
                      </div>
                    </li>
                    <li className="flex justify-between items-center cursor-pointer">
                      <div className="setting_setting-list__name__C53dB">
                        <img
                          src="https://image.prepladder.com/content/ZzjjhKN5uVCYxml25gEA1683552480.png"
                          alt="img"
                        />
                        Seek time
                      </div>
                      <div className="setting_setting-filter__Ugwqo">
                        <select className="darkIcon" name="Seek_time">
                          <option value="10">10 seconds</option>
                          <option value="15">15 seconds</option>
                          <option value="20">20 seconds</option>
                          <option value="30">30 seconds</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                  <div></div>
                </div>
                <div className="dash-white-box p-16 mb2">
                  <div className="setting_setting-title__qHyhx">Content</div>
                  <ul>
                    <li className="flex justify-between items-center cursor-pointer">
                      <div className="setting_setting-list__name__C53dB">
                        <img
                          src="https://image.prepladder.com/content/tfkh9YGzDkwUlh9Cntqa1636463551.png"
                          alt="img"
                        />
                        <span>Reset</span>
                      </div>
                      <div className="setting_setting-list_action__lkCVo">
                        <img
                          src="https://image.prepladder.com/content/ZAHLdBm1rdeTGSlkGUCq1709886107.svg"
                          alt="icon"
                        />
                      </div>
                    </li>
                    <li className="flex justify-between items-center cursor-pointer">
                      <div className="setting_setting-list__name__C53dB">
                        <img
                          src="https://image.prepladder.com/content/FIbKcISnVwWrUPVsuC0K1636463594.png"
                          alt="img"
                        />
                        Change video version
                      </div>
                      <div className="setting_setting-filter__Ugwqo">
                        <select className="darkIcon" name="videoVersion">
                          <option value="6">Version 6</option>
                        </select>
                      </div>
                    </li>
                    <li className="flex justify-between items-center cursor-pointer">
                      <div className="setting_setting-list__name__C53dB">
                        <img
                          src="https://image.prepladder.com/content/FIbKcISnVwWrUPVsuC0K1636463594.png"
                          alt="img"
                        />
                        Change QBank Version
                      </div>
                      <div className="setting_setting-filter__Ugwqo">
                        <select className="darkIcon" name="qbankVersion">
                          <option value="6">Version 6</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                  <div></div>
                </div>
                <div className="dash-white-box p-16 mb2">
                  <div className="setting_setting-title__qHyhx">Default QBank & Test settings</div>
                  <ul>
                    <li className="flex justify-between items-center">
                      <div className="setting_setting-list__name__C53dB">
                        <img
                          src="https://image.prepladder.com/content/llUfuD4PanpbnYmfbCZX1683552513.png"
                          alt="img"
                        />
                        Font
                      </div>
                      <div className="flex items-center cursor-pointer">
                        <button className="setting_increment__zklB9">
                          <img
                            src="/static/images/setting-minus_l.svg"
                            alt="img"
                            className="darkIcon"
                          />
                        </button>
                        <div className="setting_increment-num__XrOnp pl1 pr1 center">100</div>
                        <button className="setting_increment__zklB9">
                          <img
                            src="/static/images/setting-plus_l.svg"
                            alt="img"
                            className="darkIcon"
                          />
                        </button>
                      </div>
                    </li>
                    <li className="flex justify-between items-center cursor-pointer">
                      <div className="setting_setting-list__name__C53dB">
                        <img
                          src="https://image.prepladder.com/content/yzz0mP25eFrZC9xIa9dC1683552456.png"
                          alt="img"
                        />
                        Enable QBank timer
                      </div>
                      <div className="setting_setting-filter__Ugwqo">
                        <div className="toggleText">
                          <input type="checkbox" name="enableTimer" id="timer" />
                          <label htmlFor="timer"></label>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div></div>
                </div>
                <div className="dash-white-box p-16 mb2">
                  <div className="setting_setting-title__qHyhx">Delete</div>
                  <ul>
                    <li className="flex justify-between items-center cursor-pointer">
                      <div className="setting_setting-list__name__C53dB">
                        <img
                          src="https://image.prepladder.com/content/PbjON4mIWC7dD8eGnOCd1657089128.png"
                          alt="img"
                        />
                        Delete my account
                      </div>
                      <div className="setting_setting-list_action__lkCVo">
                        <img
                          src="https://image.prepladder.com/content/ZAHLdBm1rdeTGSlkGUCq1709886107.svg"
                          alt="icon"
                        />
                      </div>
                    </li>
                  </ul>
                  <div></div>
                </div>
                <div className="dash-white-box p-16 mb2">
                  <div className="setting_setting-title__qHyhx">Logout</div>
                  <ul>
                    <li className="flex justify-between items-center cursor-pointer">
                      <div className="setting_setting-list__name__C53dB">
                        <img
                          src="https://image.prepladder.com/content/oXEedbTJ5w8QbSsWz9sH1636463229.png"
                          alt="img"
                        />
                        Logout from secondary devices
                      </div>
                      <div className="setting_setting-list_action__lkCVo">
                        <img
                          src="https://image.prepladder.com/content/ZAHLdBm1rdeTGSlkGUCq1709886107.svg"
                          alt="icon"
                        />
                      </div>
                    </li>
                  </ul>
                  <div></div>
                </div>
              </div>
              <div className="setting_setting__uVhnO display-none">
                <div className="setting_setting-title__qHyhx dash-white-box p-16">
                  Default video settings
                </div>
                <ul>
                  <li className="flex justify-between items-center cursor-pointer">
                    <div className="setting_setting-list__name__C53dB">
                      <img
                        src="https://image.prepladder.com/content/Wpy5IsBdIaVwRtpeoF7x1642065475.svg"
                        alt="img"
                      />
                      Reset:
                    </div>
                    <div className="setting_setting-list_action__lkCVo">
                      <img
                        src="https://image.prepladder.com/content/ZAHLdBm1rdeTGSlkGUCq1709886107.svg"
                        alt="icon"
                      />
                    </div>
                  </li>
                  <li className="flex justify-between items-center cursor-pointer">
                    <div className="setting_setting-list__name__C53dB">
                      <img
                        src="https://image.prepladder.com/content/511vrDdtYITNGzL3cNoV1642065567.svg"
                        alt="img"
                      />
                      Enable timer
                    </div>
                    <div className="setting_setting-filter__Ugwqo">
                      <div className="toggleText">
                        <input type="checkbox" id="timer" />
                        <label htmlFor="timer"></label>
                      </div>
                    </div>
                  </li>
                  <li className="flex justify-between items-center cursor-pointer">
                    <div className="setting_setting-list__name__C53dB">
                      <img
                        src="https://image.prepladder.com/content/aKiuiXC7xHPyl1UeOcGE1642065541.svg"
                        alt="img"
                      />
                      Video Language
                    </div>
                    <div className="setting_setting-filter__Ugwqo">
                      <select className="darkIcon" name="languageID">
                        <option value="2">Hindi</option>
                        <option value="1">English</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>


  
      </div>

      

    </div>
  )
}
