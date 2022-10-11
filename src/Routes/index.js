import React from "react";
import { Route, Routes} from "react-router-dom";
import Dashboard from "../Pages/Dashboard-page/Dashboard";
import LoginPage from "../Pages/Login-page/Login";
import UsersDashboard from "../Pages/Users-page/Dashboard";
import DetailsDashboard from "../Pages/User-details-page/Users-detail";
// import Dashboard from "../Pages/Dashboard-page/Dashboard";



function App () {
  return (
    <div>
      <Routes>
        <Route exact path="" element={<Dashboard/>} />
        <Route exact path="detail" element={<DetailsDashboard/>} />
        <Route exact path="user" element={<UsersDashboard/>} />
        <Route exact path="login" element={<LoginPage/>} />
      </Routes>
    </div>
  );
  };
  

export default App;
