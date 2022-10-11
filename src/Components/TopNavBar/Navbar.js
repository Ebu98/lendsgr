import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assests/icon/logo.svg";
import { ReactComponent as Search } from "../../assests/icon/search.svg";
import { ReactComponent as BellIcon } from "../../assests/icon/bell.svg";
import photo from "../../assests/image/Ellipse 1.png";
import Menu  from "../../assests/image/menu.png";
import "./Navbar.scss";

const TopNav = () => {
  return (
    <nav className="top-nav">
      <div className="left">
        <img src={Menu} alt=""/>
        <LogoIcon />
        <input
          type="search"
          placeholder="Search for anything"
          Search={Search}
        />
      </div>
      <div className="right">
        <p>Docs</p>
        <BellIcon />
        <div className="profile-image">
          <img src={photo} alt="" />
        </div>
        <div class="dropdown">
          <button class="dropbtn">
          Adedeji
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <Link to="#">Link 1</Link>
            <Link to="#">Link 2</Link>
            <Link to="#">Link 3</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
{/* <i class="fa fa-times" aria-hidden="true"></i> */}