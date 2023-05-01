import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form-header">
          <h2 className="app-logo">Chat Now!</h2>
          <p className="form-title">Login</p>
        </div>
        <div className="form">
          <div className="label-input">
            <label>Email: </label>
            <input type="text" />
          </div>
          <div className="label-input">
            <label>Password: </label>
            <input type="text" />
          </div>
          <button>Login</button>
        </div>
        <div>
          <p>
            Don't have an account <a href="#">register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
