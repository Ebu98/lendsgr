import React from "react";
import UsersDetail from "../../Components/Users-detail/Detail";
import "./Users-detail.scss";
import User from "../../Components/Users-detail/User";

const DetailsDashboard = () => {
  return (
    <div className="dashboard-details">
      <User />
      <UsersDetail />
    </div>
  );
};

export default DetailsDashboard;
