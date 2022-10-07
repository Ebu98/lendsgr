import React from "react";
import { ReactComponent as LogoIcon } from "../../assests/icon/logo.svg";
import { ReactComponent as Search } from "../../assests/icon/search.svg";
import { ReactComponent as BellIcon } from "../../assests/icon/bell.svg";
import photo  from "../../assests/image/Ellipse 1.png";
import "./Navbar.scss";

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="left">
        <LogoIcon />
        <input type="search" placeholder="Search for anything" Search={Search} />
      </div>
      <div className="right">
        <p>Docs</p>
        <BellIcon/>
        <div className="profile-image">
        
          <img src={photo} alt=""/>
        
        </div>
      </div>
    </div>
  );
};

export default TopNav;
