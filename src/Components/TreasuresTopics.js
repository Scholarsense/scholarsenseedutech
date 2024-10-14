import React from "react";
import HeaderAfterLogin from "./HeaderAfterLogin";
import Setting_Sidebar from "./SettingSidebar";

export default function TreasuresTopics() {
  return (
    <div>
      <HeaderAfterLogin />

      <div className="dash-container flex dash-main-layout video-dash-container">
        <Setting_Sidebar />
        <div
          id="right_section"
          className="applayout_section__right__5EPWR video-section false"
        >
          <div className="ExperienceSticky items-center justify-between">
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
                  alt=""
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
                    <div className="flex flex-wrap flex1">
                      <a href="/settingHome">
                        <div>home</div>
                      </a>
                      <a href="/treasures">
                        <div>Treasures</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="langchng">
                <div className="langchng_left flex1">
                  <div className="flex justify-between items-center">
                    <div className="dash-heading flex items-center">
                      Anatomy
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="appheader_section_header-subtitle__P93NQ">
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
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
                          <a
                            target=""
                            href="https://www.facebook.com/sharer/sharer.php?u="
                          >
                            <img
                              src="https://image.prepladder.com/content/L1TE42Pa1v5TdfTJG0aJ1640353157.svg"
                              alt="Facebook"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            target=""
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
                      <button value="" type="button" className="">
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="new-cards_new-card__4GRrU">
              <ul>
                <li>
                  <a
                    href="/TopicsWiseDetails"
                    className="new-cards_card__q0au7 cursor-pointer"
                  >
                    <div className="new-cards_card_left__CBzpZ">
                      <span>1</span>
                    </div>
                    <div className="new-cards_card_right__6g32v">
                      <h3>General Pharmacology</h3>
                      <p>27 Treasures</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="new-cards_card__q0au7 cursor-pointer">
                    <div className="new-cards_card_left__CBzpZ">
                      <span>2</span>
                    </div>
                    <div className="new-cards_card_right__6g32v">
                      <h3>ANS Pharmacology</h3>
                      <p>17 Treasures</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="new-cards_card__q0au7 cursor-pointer">
                    <div className="new-cards_card_left__CBzpZ">
                      <span>3</span>
                    </div>
                    <div className="new-cards_card_right__6g32v">
                      <h3>CVS Pharmacology</h3>
                      <p>12 Treasures</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="new-cards_card__q0au7 cursor-pointer">
                    <div className="new-cards_card_left__CBzpZ">
                      <span>4</span>
                    </div>
                    <div className="new-cards_card_right__6g32v">
                      <h3>Renal Pharmacology</h3>
                      <p>2 Treasures</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="new-cards_card__q0au7 cursor-pointer">
                    <div className="new-cards_card_left__CBzpZ">
                      <span>5</span>
                    </div>
                    <div className="new-cards_card_right__6g32v">
                      <h3>Respiratory Pharmacology</h3>
                      <p>2 Treasures</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="new-cards_card__q0au7 cursor-pointer">
                    <div className="new-cards_card_left__CBzpZ">
                      <span>6</span>
                    </div>
                    <div className="new-cards_card_right__6g32v">
                      <h3>GIT Pharmacology</h3>
                      <p>7 Treasures</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="new-cards_card__q0au7 cursor-pointer">
                    <div className="new-cards_card_left__CBzpZ">
                      <span>7</span>
                    </div>
                    <div className="new-cards_card_right__6g32v">
                      <h3>Endocrine Pharmacology</h3>
                      <p>10 Treasures</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="new-cards_card__q0au7 cursor-pointer">
                    <div className="new-cards_card_left__CBzpZ">
                      <span>8</span>
                    </div>
                    <div className="new-cards_card_right__6g32v">
                      <h3>CNS Pharmacology</h3>
                      <p>11 Treasures</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="new-cards_card__q0au7 cursor-pointer">
                    <div className="new-cards_card_left__CBzpZ">
                      <span>9</span>
                    </div>
                    <div className="new-cards_card_right__6g32v">
                      <h3>Drugs Affecting Blood and Blood formation</h3>
                      <p>7 Treasures</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="new-cards_card__q0au7 cursor-pointer">
                    <div className="new-cards_card_left__CBzpZ">
                      <span>10</span>
                    </div>
                    <div className="new-cards_card_right__6g32v">
                      <h3>Antimicrobials</h3>
                      <p>15 Treasures</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="new-cards_card__q0au7 cursor-pointer">
                    <div className="new-cards_card_left__CBzpZ">
                      <span>11</span>
                    </div>
                    <div className="new-cards_card_right__6g32v">
                      <h3>Anticancer Drugs</h3>
                      <p>4 Treasures</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="new-cards_card__q0au7 cursor-pointer">
                    <div className="new-cards_card_left__CBzpZ">
                      <span>12</span>
                    </div>
                    <div className="new-cards_card_right__6g32v">
                      <h3>Autacoids</h3>
                      <p>7 Treasures</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="new-cards_card__q0au7 cursor-pointer">
                    <div className="new-cards_card_left__CBzpZ">
                      <span>13</span>
                    </div>
                    <div className="new-cards_card_right__6g32v">
                      <h3>Anaesthesia</h3>
                      <p>3 Treasures</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="new-cards_card__q0au7 cursor-pointer">
                    <div className="new-cards_card_left__CBzpZ">
                      <span>14</span>
                    </div>
                    <div className="new-cards_card_right__6g32v">
                      <h3>Special Topics</h3>
                      <p>2 Treasures</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="new-cards_card__q0au7 cursor-pointer">
                    <div className="new-cards_card_left__CBzpZ">
                      <span>15</span>
                    </div>
                    <div className="new-cards_card_right__6g32v">
                      <h3>Chemotherapy of Specific Microbial Diseases</h3>
                      <p>14 Treasures</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="new-cards_card__q0au7 cursor-pointer">
                    <div className="new-cards_card_left__CBzpZ">
                      <span>16</span>
                    </div>
                    <div className="new-cards_card_right__6g32v">
                      <h3>Immunomodulator Drugs</h3>
                      <p>1 Treasure</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}