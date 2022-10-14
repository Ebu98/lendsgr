import React, { useState, useEffect } from "react";
// import Buttons from '../../Components/Button/SmallButton'
// import Buttonsmall from '../../Components/Button/SmallButton2'
import Sidebar from "../../Components/SideBar";
import TopNav from "../../Components/TopNavBar/Navbar";
import UsersDetail from "../../Components/Users-detail/Detail";
import axios from "axios";
import "./Users-detail.scss";
import User from "../../Components/Users-detail/User";

const DetailsDashboard = () => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState("");
  return (
    <div className="dashboard-details">
      <User />
      <UsersDetail />
    </div>
  );
};

export default DetailsDashboard;
