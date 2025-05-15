import React from 'react'
import { Link } from 'react-router-dom'; // ✅ import Link
function Sidebar() {
  return (
                  
  <div className="app-menu navbar-menu">
      <div id="scrollbar">
        <div className="container-fluid"></div>
        <div id="two-column-menu"></div>
        <ul className="navbar-nav" id="navbar-nav">
          <li className="menu-title"><span data-key="t-menu">Menu</span></li>

          <li className="nav-item">
            <Link className="nav-link menu-link" to="/dashboard">
              <i className="bx bxs-dashboard"></i> 
              <span data-key="t-dashboards">Dashboards</span>
            </Link>
          </li> 

          <li className="nav-item">
            <Link className="nav-link menu-link" to="/transaction">
              <i className="bx bx-aperture"></i> 
              <span data-key="t-widgets">Transaction</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link menu-link" to="/account">
              <i className="bx bx-aperture"></i> 
              <span data-key="t-widgets">Account</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar