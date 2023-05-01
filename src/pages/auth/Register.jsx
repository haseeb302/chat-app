import "./style.scss";

const Register = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form-header">
          <h2 className="app-logo">Chat Now!</h2>
          <p className="form-title">Register</p>
        </div>
        <div className="form">
          <div className="label-input">
            <label>First Name: </label>
            <input type="text" />
          </div>
          <div className="label-input">
            <label>Last Name: </label>
            <input type="text" />
          </div>
          <div className="label-input">
            <label>Email: </label>
            <input type="text" />
          </div>
          <div className="label-input">
            <label>Password: </label>
            <input type="text" />
          </div>
          <button>Register</button>
        </div>
        <div>
          <p>
            Already have an account <a href="#">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
