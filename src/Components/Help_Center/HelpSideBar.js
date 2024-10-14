import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HelpSideBar() {
  const [activeItem, setActiveItem] = useState(0); // Default to My Account

  const handleClick = (index) => {
    setActiveItem(index);
  };
  return (
    <div className="py6 lastsection">
      <div className="weblayout_container__0W9V9 flex flex-wrap pb5">
        <div className="helpCenter_helpcenter_main_left__abgYf">
          <h2>Help center</h2>
          <ul>
            <li
              className={
                activeItem === 0
                  ? "helpCenter_active__FELPy active"
                  : "helpCenter_active__FELPy"
              }
            >
              <Link to="/helpMyAccount" onClick={() => handleClick(0)}>
                My Account
              </Link>
            </li>
            <li className={activeItem === 1 ? "active" : ""}>
              <Link
                to="/helpScholarSenseModules"
                onClick={() => handleClick(1)}
              >
                ScholarSense Modules
              </Link>
            </li>
            <li className={activeItem === 2 ? "active" : ""}>
              <Link
                to="/helpTechnicalDifficulties"
                onClick={() => handleClick(2)}
              >
                Technical Difficulties
              </Link>
            </li>
            <li className={activeItem === 3 ? "active" : ""}>
              <Link to="/helpNotesAndDelivery" onClick={() => handleClick(3)}>
                Notes &amp; Delivery
              </Link>
            </li>
            <li className={activeItem === 4 ? "active" : ""}>
              <Link to="/helpPayments" onClick={() => handleClick(4)}>
                Payments
              </Link>
            </li>
            <li className={activeItem === 5 ? "active" : ""}>
              <Link to="/helpOthers" onClick={() => handleClick(5)}>
                Others
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
