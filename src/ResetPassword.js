import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import app from "./base";

const ResetPassword = ({ history }) => {
  const handleResetPassword = useCallback(async event => {
    event.preventDefault();
    const { email } = event.target.elements;
    try {
      await app
        .auth()
        .sendPasswordResetEmail(email.value);
      history.push("/login/signin");
      alert('An account recovery link has been successfully sent to your email');

    } catch (error) {
      alert(error);
    }
  }, [history]);
  return (
    <section className="hero hero--scotch hero--scotch gradient--sunset" onSubmit={handleResetPassword}>
      <form className="form-signin form-login">
        <div className="form-login__box">
          <div className="form-login__box--info mb-3 mt-3">
            <div className="circle-image">
              <i className="icon-pencil icons icon"></i>
            </div>
            <h2 className=" mb-2 mt-2 text-capitalize text-center">Reset Password</h2>
          </div>
          <div className="form-login__box--form">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-label-group">
                    <input name="email" type="email" id="inputEmail" className="form-control" placeholder="Email" required />
                    <label for="inputEmail">E-mail</label>
                  </div>
                </div>
                <div class="col-lg-12">
                  <button class="btn btn-lg btn-primary btn-block mb-2 text-capitalize" type="submit">recovery account</button>
                </div>
                <div class="col-lg-12">
                  <div class="mt-3 mb-3">
                    <center>
                      <span>By creating an account, you agree to our terms</span>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-login__item">
          ¿Already a member?{'\u00A0'} <Link to="/login/signin" className="text-capitalize">
            login here
          </Link>
        </div>
      </form>
    </section>
  );
};

export default withRouter(ResetPassword);
