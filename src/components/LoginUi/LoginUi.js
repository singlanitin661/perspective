import "./LoginUi.css";
function LoginUi() {
  return (
    <div className="container">
      <main className="signup-container">
        <h1 className="heading-primary">
          Log in<span className="span-blue">.</span>
        </h1>
        <p className="text-mute">
          Enter your credentials to access your account.
        </p>
        <div className="login-wrapper">
          <a href="/" classNsame="btn btn-google">
            <img src="https://img.icons8.com/fluency/48/000000/google-logo.png" alt="google" />
            Log In with Google
          </a>
          <div className="line-breaker">
            <span className="line"></span>
            <span>or</span>
            <span className="line"></span>
          </div>
        </div>

        <form className="signup-form">
          <label className="inp">
            <input type="email" className="input-text" placeholder="&nbsp;" />
            <span className="label">Email</span>
            <span className="input-icon">
              <i className="fa-solid fa-envelope"></i>
            </span>
          </label>
          <label className="inp">
            <input
              type="password"
              className="input-text"
              placeholder="&nbsp;"
              id="password"
            />
            <span className="label">Password</span>
            <span className="input-icon input-icon-password" data-password>
              <i className="fa-solid fa-eye"></i>
            </span>
          </label>
          <button className="btn btn-login">Login</button>
        </form>
        <p className="text-mute">
          Not a member? <a href="$">Sign up</a>
        </p>
      </main>
      <div className="welcome-container">
      <h1 className="heading-secondary">
          Welcome to <span className="lg">PRESPECTIVE !</span>
        </h1>
        <img  className = "logopic" src={require('./prespective.PNG')} alt='presPECtive' />
        
      </div>
    </div>
  );
}

export default LoginUi;
