import React, { Component } from "react";
import logoNavbar from "../assets/img/atlassian.svg";
import app from "../base";

class Navigation extends Component {
  render() {
    return (
      <header className="header">
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top header__info"
          id="navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                className="d-inline-block align-top"
                height="30"
                src={logoNavbar}
                width="30"
              />
              Atlassian Software
            </a>
            <button
              aria-controls="navbar-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-menu"
              data-toggle="collapse"
              type="button"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse header__info--items"
              id="navbar-menu"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Profile
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <button
                      className="dropdown-item"
                      onClick={() => app.auth().signOut()}
                    >
                      Sign out
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navigation;
