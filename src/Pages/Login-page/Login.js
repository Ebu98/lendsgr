import React, { useState } from "react";
import { ReactComponent as LogoIcon } from "../../assests/icon/logo.svg";
import { ReactComponent as Image } from "../../assests/image/image.svg";
import Button from "../../Components/Button/Button";
import "./Login.scss";

const LoginPage = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
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
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={inputs.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              autocomplete="current-password"
              value={inputs.password}
              onChange={handleChange}
            />
            <p>Forgot PASSWORD?</p>
            <Button>Log in</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
