import React from "react";
import { Route, Routes} from "react-router-dom";
// import CardList from "../Components/Card/CardList";
// import MainPage from "../Components/Main";
// import Input from "../Components/mainInput/input";
// import Sidebar from "../Components/SideBar";
// import TopNav from "../Components/TopNavBar/Navbar";
// import LoginPage from "../Pages/Login-page/Login";
import Dashboard from "../Pages/User-dashboard/Dashboard";



function App () {
  return (
    <div>
      <Routes>
        <Route exact path="" element={<Dashboard/>} />
      </Routes>
    </div>
  );
  };
  

export default App;
