import React from 'react';
import HeaderAfterLogin from "./HeaderAfterLogin";
import Setting_Sidebar from "./SettingSidebar";

export default function Treasures() {
    const handleOnClick = () => {
        window.location.href = '/settingHome'; // Replace with the actual URL or path you want to navigate to
      };
      const handleClick = () => {
        // Handle click action here, such as navigating to a new page
        window.open('/TreasuresTopics'); // Replace '/new-page-url' with the actual URL
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
            <div className="dash-heading flex items-center">Treasures</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="appheader_section_header-subtitle__P93NQ">
              <div>A concise summary of topics for quick revision</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="new-cards_new-card__4GRrU mt4">
        <h2 className="mb2">All Subjects</h2>
        <ul>
          <li onClick={handleClick} >
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/cNNTo6avPgesivBUV24E1710332177.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>Anatomy</h3>
                <p>126 Treasures</p>
              </div>
            </div>
          </li>
          <li>
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/ujzBrytcq1ctRgKeGreT1710332487.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>Physiology</h3>
                <p>84 Treasures</p>
              </div>
            </div>
          </li>
          <li>
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/cxOcpG25hcHtNvPoe9OZ1710332763.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>Biochemistry</h3>
                <p>82 Treasures</p>
              </div>
            </div>
          </li>
          <li>
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/GiHNBOhq66moU5QCRgQY1710332614.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>Pathology</h3>
                <p>144 Treasures</p>
              </div>
            </div>
          </li>
          <li>
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/WOdEgQTnGkKtptF95iPm1710332520.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>Pharmacology</h3>
                <p>141 Treasures</p>
              </div>
            </div>
          </li>
          <li>
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/jiAdR02VQGkwjhwfJYmJ1710332653.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>Microbiology</h3>
                <p>109 Treasures</p>
              </div>
            </div>
          </li>
          <li>
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/bsegHyJwAebMHcBAkkHs1710332891.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>Forensic Medicine</h3>
                <p>71 Treasures</p>
              </div>
            </div>
          </li>
          <li>
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/h3mDbNvGx5TJcgQIPEL21710332727.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>PSM</h3>
                <p>106 Treasures</p>
              </div>
            </div>
          </li>
          <li>
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/oDuS4Xalr57ax1oJtR6G1710332693.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>ENT</h3>
                <p>93 Treasures</p>
              </div>
            </div>
          </li>
          <li>
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/rSWKZve18agON4ofrdPk1710333100.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>Ophthalmology</h3>
                <p>88 Treasures</p>
              </div>
            </div>
          </li>
          <li>
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/AWVyLKxTUMwjGCsP1dAF1710333040.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>Gynaecology & Obstetrics</h3>
                <p>79 Treasures</p>
              </div>
            </div>
          </li>
          <li>
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/ihO12JzQDe0wr5SgGtcp1710332794.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>Pediatrics</h3>
                <p>89 Treasures</p>
              </div>
            </div>
          </li>
          <li>
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/onslzz3HpPez9n2a1TaQ1710333009.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>Surgery</h3>
                <p>124 Treasures</p>
              </div>
            </div>
          </li>
          <li>
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/OoygcjJNpWUReikpCeN41710332822.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>Medicine</h3>
                <p>162 Treasures</p>
              </div>
            </div>
          </li>
          <li>
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/4QckDNbHRGcd11PMCEkv1710333073.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>Radiology</h3>
                <p>62 Treasures</p>
              </div>
            </div>
          </li>
          <li>
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/65KzE3QDs4rqvpZNRHMH1710332564.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>Anaesthesia</h3>
                <p>66 Treasures</p>
              </div>
            </div>
          </li>
          <li>
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/kyu2nCN2VaSiwjmTKI3F1710332925.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>Orthopaedics</h3>
                <p>77 Treasures</p>
              </div>
            </div>
          </li>
          <li>
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/lG9XSpcjU0frmLSPaAdw1710332974.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>Psychiatry</h3>
                <p>59 Treasures</p>
              </div>
            </div>
          </li>
          <li>
            <div className="new-cards_card__q0au7 cursor-pointer">
              <div className="new-cards_card_left__CBzpZ">
                <img src="https://image.prepladder.com/content/q4AGALmivhndwWqtKYRh1710332862.png" alt="" />
              </div>
              <div className="new-cards_card_right__6g32v">
                <h3>Dermatology</h3>
                <p>78 Treasures</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
        </div>
        </div>
        </div>
   
  )
}
