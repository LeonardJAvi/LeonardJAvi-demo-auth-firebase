import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import { Link } from "react-router-dom";
const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <section className="hero hero--scotch hero--scotch gradient--sunset">
      <form className="form-signin form-login" onSubmit={handleLogin}>
        <div className="form-login__box">
          <div className="form-login__box--info mb-3 mt-3">
            <div className="circle-image">
              <i className="icon-user icons icon"></i>
            </div>
            <h2 className=" mb-2 mt-2 text-capitalize text-center">sign in</h2>
          </div>
          <div className="form-login__box--form">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-label-group">
                    <input
                      name="email"
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                    <label for="inputEmail">E-mail</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-label-group">
                    <input
                      name="password"
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <label for="inputPassword">Password</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button
                    className="btn btn-lg btn-primary btn-block mb-2 text-capitalize"
                    type="submit"
                  >
                    login in
                  </button>
                </div>
                <div className="col-lg-12"></div>
                <div className="col-lg-12">
                  <div className="row mt-3 mb-3">
                    <div className="text-center mt-1 mb-1 col-md-6 text-md-left mt-md-0 mb-md-0"></div>
                    <div className="text-center mt-1 mb-1 col-12 text-center mt-md-0 mb-md-0">
                      <Link to="/login/recovery" className="text-center">
                        ¿Forgot Password?
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-login__item">
          ¿Not a member?{" "}
          <Link to="/login/signup" className="nav-link">
            Create Account
          </Link>
        </div>
      </form>
    </section>
  );
};

export default withRouter(Login);
