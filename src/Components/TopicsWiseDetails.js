import React from "react";
import HeaderAfterLogin from "./HeaderAfterLogin";
import Setting_Sidebar from "./SettingSidebar";

export default function TopicsWiseDetails() {
  return (
    <div>
      <HeaderAfterLogin />

      <div className="dash-container flex dash-main-layout video-dash-container">
        <Setting_Sidebar />
        <div
          id="right_section"
          className="applayout_section__right__5EPWR video-section false"
        >
        <div className="appheader_section_header__9eqrR">
      <div className="flex mb2 justify-between">
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
            <h2 className="appheader_subjHed__rvRQz">anatomy</h2>
          </div>
        </div>
      </div>
      <div className="appheader_trsrSubhed__KN5So">
        <div className="appheader_trsrSubhed_left__E_7_B">
          <h2>Lower Limb #ANT193</h2>
          <p>Femoral Canal</p>
        </div>
        <div className="appheader_trsrSubhed_right__AEyNH">
          <ul>
            <li>
              <div className="cards_card-1-bookmark-img__EILrt margin-left-auto bookmark-loader" id="bookmark29568">
                <div>
                  <button>
                    <img
                      src="https://image.prepladder.com/content/9gXxcz2ad9NZjTKCJw361637123941.png"
                      alt="arrow_blue"
                      className="book-img darkIcon treasureImg"
                    />
                  </button>
                </div>
              </div>
            </li>
            <li>
              <img
                src="https://image.prepladder.com/content/8yFa7YquW7JtnHZzqhR61688389516.svg"
                alt="expand-contract"
                className="darkIcon"
              />
            </li>
            <li>
              <img
                src="https://image.prepladder.com/content/CoZvAyHUpUST1BYZwA341677649840.svg"
                alt="list"
                className="darkIcon"
              />
            </li>
            <li className="appheader_trsrSubhedAction__EPYkj">
              <img
                src="https://image.prepladder.com/content/mkCXleGdlzRGrefyD5hN1677649851.svg"
                alt="action"
                className="darkIcon"
              />
              <div className="appheader_trsrSubhed_right_drop__eStys">
                <ul>
                  <li>
                    <img
                      src="https://image.prepladder.com/content/6784pFTLwkERKSONAFKU1677664618.svg"
                      alt="copy"
                      className="darkIcon"
                    />{' '}
                    <span>Copy treasure ID</span>
                  </li>
                  <li>
                    <img
                      src="https://image.prepladder.com/content/4GaI7Ull9SUfjsTvL2dG1677664559.svg"
                      alt="share"
                      className="darkIcon"
                    />{' '}
                    <span>Share</span>
                  </li>
                  <li>
                    <img
                      src="https://image.prepladder.com/content/V8CPXy5zvRCga6UPJCn71677664684.svg"
                      alt="error"
                      className="darkIcon"
                    />{' '}
                    <span>Report an error</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="tableDiv">
      <table>
        <tbody>
          <tr>
            <td>
              <p style={{ textAlign: 'center' }}>
                <strong>
                  <span>Femoral Canal</span>
                </strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <ul>
                <li>
                  <p>The femoral canal occupies the most medial compartment of the femoral sheath.</p>
                </li>
                <li>
                  <p>It extends from the femoral ring above to the saphenous opening below</p>
                </li>
                <li>
                  <p>It is about 2cm long, with its base directed upwards</p>
                </li>
                <li>
                  <p>The femoral canal contains fat, lymphatic vessels, and the lymph node of the Cloquet or Rosenmüller</p>
                </li>
                <li>
                  <p>It provides dead space (empty space) for expansion of the femoral vein during times of increased venous return.</p>
                </li>
                <li>
                  <p>Boundaries of femoral ring:</p>
                  <ul style={{ listStyleType: 'circle' }}>
                    <li>
                      <p>Anteriorly by the inguinal ligament</p>
                    </li>
                    <li>
                      <p>Posteriorly by Astley Cooper’s ligament, the pubic bone, and the fascia over the pectineus muscle</p>
                    </li>
                    <li>
                      <p>Medially by the concave knife-like edge of Gimbernat’s (lacunar) ligament, which is also prolonged along the ilio–pectineal line as Astley Cooper’s ligament.</p>
                    </li>
                    <li>
                      <p>Laterally, a thin septum separates it from the femoral vein.</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>The femoral canal is an important site of femoral hernia, most common in females due to the greater width of the femoral ring.</p>
                </li>
              </ul>
              <p style={{ textAlign: 'center' }}>
                <img
                  src="https://image.prepladder.com/content/V9z02RiEh84Jr0OdiEwa1710747622.png"
                  alt="Femoral Canal Diagram"
                />
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
      </div>
      </div>
    </div>
  );
}
