import "./auth.css";
import { useState } from "react";
import { useAuth } from "../../Context/auth-context";
import { useNavigate, Link, Navigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { loginUser, token } = useAuth();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    loginUser(email, password);
  };

  const loginWithAdminHandler = () => {
    setEmail("test@gmail.com");
    setPassword("Test@123");
    loginUser(email, password);
  };

  return (
    <>
      {token ? (
        <Navigate to="/products" replace />
      ) : (
        <div className="container">
          <div className="form-container sign-in">
            <form action="#" className="form-data" onSubmit={submitHandler}>
              <h1>Login</h1>
              <span className="span-txt">Please enter you credentials</span>
              <div>
                {" "}
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-with-eye">
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className="fa fa-eye btn-icon eye-icon"></i>
              </div>
              <div className="left-content">
                <label for="check-1">
                  <input type="checkbox" name="checkbox" id="check-1" />{" "}
                  Remember me
                </label>
              </div>

              <button className="btn sign-in-btn">Login</button>
              <button
                className="btn secondary sign-in-btn"
                onClick={loginWithAdminHandler}
              >
                Login with Admin credential
              </button>
              <span className="span-txt">Forgot Password ?</span>
            </form>
            <span className="span-txt">
              Dont have an account?{" "}
              <Link to="/signup">
                <strong>Sign Up</strong>{" "}
              </Link>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export { Login };
