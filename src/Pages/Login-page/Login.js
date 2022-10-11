import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as LogoIcon } from "../../assests/icon/logo.svg";
import { ReactComponent as Image } from "../../assests/image/image.svg";
import Button from "../../Components/Button/Button";
import Dashboard from "../Dashboard-page/Dashboard";
import "./Login.scss";

const LoginPage = () => {
  const email = useRef();
  const password = useRef();
  const [showDashboard, setShowDashboard] = useState(false);
  const [show, setShow] = useState(false);
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  useEffect(() => {
    if (localSignUp) {
        setShowDashboard(true);
    }
    if (localEmail) {
      setShow(true);
    }
  }, []);
  const handleClick = () => {
    if ( email.current.value && password.current.value) {
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert("Account created successfully!!");
      window.location.reload();
    }
  };

  const handleSignIn = () => {
    if (
      email.current.value ===localEmail &&
      password.current.value === localPassword
    ) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
    } else {
      alert("Please Enter valid Credential");
    }
  };

  return (
    <div className="login-page">
      <div className="logo-container">
        <LogoIcon />
        <div className="image-container">
          <Image />
        </div>
      </div>
      <div className="input-container">
        <div className="form-text">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
        </div>
        <div>
          <form className="form">
            {showDashboard ? (
              <Dashboard />
            ) : show ? (
              <div className="container">
                <div className="input_space">
                  <input placeholder="Email" type="text" ref={email} />
                </div>
                <div className="input_space">
                  <input
                    placeholder="Password"
                    type="password"
                    ref={password}
                  />
                </div>
                <p>Forgot PASSWORD?</p>
                <Button onClick={handleSignIn}>Login In</Button>
              </div>
            ) : (
              <div className="container">
                <div className="input_space">
                  <input placeholder="Email" type="text" ref={email} />
                </div>
                <div className="input_space">
                  <input
                    placeholder="Password"
                    type="password"
                    ref={password}
                  />
                </div>
                
                <Button onClick={handleClick}>Sign Up</Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
