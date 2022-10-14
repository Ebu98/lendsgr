import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from ".";
import LoginPage from "../Pages/Login-page/Login";

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
