import React from "react";
import "./LoginUi.css";

const LoginUi = () => {
  return (
    <div className="login-login-root">
    <div className="login-login_form">
      <div className="login-details">
        <div className="login-Login">Log in..</div>
        <div className="login-google-btn">
          <div className="login-google-icon-wrapper">
            <img
              className="login-google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
          </div>
          <p className="login-btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
        <form action="/" method="post">
          <div className="login-wrap">
            <label className="login-Email">Email</label>
            <input
              type="text"
              className="login-input"
              placeholder="eg : abc@gmail.com"
            />
          </div>
          <div className="login-wrap">
            <label className="login-Password">Password</label>
            <input
              type="password"
              className="login-input"
              data-type="password"
              placeholder="eg : *****"
            />
          </div>
          <div className="login-wrap">
            <label>Forgot password?</label>
          </div>
          <button type="submit" className="login-button">
            <h1 className="login-sign">Sign in!</h1>
          </button>
        </form>
      </div>
      <div className="login-details-two">
        <h1 className="login-back">Welcome to </h1>
        <img className="login-prespective" src={require("./prespective.PNG")} />
      </div>
    </div>
    </div>
  );
};
export default LoginUi;
