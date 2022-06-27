import React from "react";
import "./LoginUi.css";
import image from "./prespective.png";

function Login() {
  const toggleForm = () => {
    const container = document.querySelector(".container");
    container.classList.toggle("active");
  };
  return (
    <section className="Login_root">
      <div className="Login_container">
        <div className="Login_user signinBx">
          <div className="Login_imgBx">
            <img src={image} alt="" />
          </div>
          <div className="Login_formBx">
            <form clasName="Login_form" action="" onSubmit="return false;">
              <h2>Welcome to Prespective</h2>

              <input
                className="Login_Login_input"
                type="text"
                name=""
                placeholder="Username"
              />
              <input
                className="Login_Login_input"
                type="password"
                name=""
                placeholder="Password"
              />
              <input
                className="Login_Login_input"
                type="submit"
                name=""
                value="Login"
              />
              <p className="Login_signup">
                Don't have an account ?
                <a href="#" onClick="toggleForm();">
                  {"   "}
                  Sign Up.
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
