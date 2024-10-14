import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SideBar() {
  return (
    <div>
      <div className="sidebar_side-nav__yjkHh">
      <div className="sidebar_side-nav__bottom__QQiR3">
        <div>
          <nav>
            <div>
              <div className="flex item-center w-100">
                <div className="appheader_section_header-breadcrumb__8xohk" style={{ width: '20%' }}>
                  <NavLink exact to="/" className="appheader_no-skew__670Tu">
                    <img src="https://image.prepladder.com/content/Oues6YawqRn1RBZv9Y7p1709883508.svg" alt="img" className="darkIcon" />
                  </NavLink>
                </div>
                <NavLink exact to="/" className=" sidebar_side-nav__card-link__3rSw5  f-16 fw-700 " activeClassName="active">
            Back to Home
          </NavLink>
              </div>
            </div>
            <div>
              <div className="flex item-center w-100">
                <div className="appheader_section_header-breadcrumb__8xohk" style={{ width: '20%' }}></div>
                <NavLink exact to="/profile" className="sidebar_side-nav__card-link__3rSw5 f-14 fw-600 sidebar_side-nav__card-link--active__K2fVa" activeClassName="active">
            My Profile
          </NavLink>
              </div>
            </div>
            <div>
              <div className="flex item-center w-100">
                <div className="appheader_section_header-breadcrumb__8xohk" style={{ width: '20%' }}></div>
                <NavLink exact to="/settings" className="sidebar_side-nav__card-link__3rSw5 f-14 fw-600 sidebar_side-nav__card-link--active__K2fVa" activeClassName="active">
            Settings
          </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="sidebar_footer_tabs__I5FPw">
        <ul>
          <li><a href="/app"><img src="https://image.prepladder.com/content/yZIn2wRSye9rS8nH4HdF1709886364.svg" alt="Home" /><img className="sidebar_imgActive__k4ftu" src="https://image.prepladder.com/content/2v5s0lAzHlU6NjJAiMOM1709886319.svg" alt="Home" />Home</a></li>
          <li><a href="/app/video"><span className="cardStatus cardStatus-newTag">New</span><img src="https://image.prepladder.com/content/2adpj3fiXRg0i6hOAiAp1709886471.svg" alt="Home" /><img className="sidebar_imgActive__k4ftu" src="https://image.prepladder.com/content/56lkkTfowLEY8l8wHlX91709886459.svg" alt="Home" />Videos</a></li>
          <li><a href="/app/qbank"><span className="cardStatus cardStatus-newTag">New</span><img src="https://image.prepladder.com/content/C6bb6GtNTGoZP31IdQG51709886411.svg" alt="Home" /><img className="sidebar_imgActive__k4ftu" src="https://image.prepladder.com/content/lHAPw8UIhQXPqyIeYxgU1709886400.svg" alt="Home" />QBank</a></li>
          <li><a href="/app/exams"><img src="https://image.prepladder.com/content/UTXdjkW1aGb3xooaU3DX1709886294.svg" alt="Home" /><img className="sidebar_imgActive__k4ftu" src="https://image.prepladder.com/content/1OibkrKl5CpcPtONjx971709886269.svg" alt="Home" />Tests</a></li>
          <li><a href="/app/my-profile"><img src="https://image.prepladder.com/content/Ol0kfKNVcweGhsJfHlni1709886442.svg" alt="Home" /><img className="sidebar_imgActive__k4ftu" src="https://image.prepladder.com/content/LdfSJx4VphuXCq1U75Kn1709886430.svg" alt="Home" />Me</a></li>
        </ul>
      </div>
    </div>
    </div>
  )
}
