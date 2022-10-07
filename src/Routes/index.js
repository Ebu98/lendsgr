import React from "react";
import { Route, Routes} from "react-router-dom";
import CardList from "../Components/Card/CardList";
import Input from "../Components/mainInput/input";
import Sidebar from "../Components/SideBar";
import TopNav from "../Components/TopNavBar/Navbar";
import LoginPage from "../Pages/Login-page/Login";
function App () {
  return (
    <div>
      <Routes>
        <Route exact path="login" element={<LoginPage />} />
        <Route exact path="side" element= {<Sidebar/>}/>
        <Route exact path="nav" element= {<TopNav/>}/>
        <Route exact path="card" element= {<CardList/>}/>
        <Route exact path="input" element= {<Input/>}/>
      </Routes>
    </div>
  );
  };
  

export default App;
