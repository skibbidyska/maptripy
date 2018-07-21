import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import world from "./world.gif";
import login from "./login.PNG";
import logout from "./logout.PNG";
import dashboard from "./dashboard.PNG";
import feed from "./Group Copy 3.PNG";
import logo from "./maptripylogo2.png";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/feed">
            <img
              src={feed}
              style={{ width: "150px", margin: "auto", display: "block" }}
              alt="Loading..."
            />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <img
              src={dashboard}
              style={{ width: "150px", margin: "auto", display: "block" }}
              alt="Loading..."
            />
          </Link>
        </li>
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a Gravatar connected to your email to display an image"
            />{" "}
            <img
              src={logout}
              style={{ width: "150px", margin: "auto", display: "block" }}
              alt="Loading..."
            />
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            <img
              src={login}
              style={{ width: "150px", margin: "auto", display: "block" }}
              alt="Loading..."
            />
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <img
            src={world}
            style={{ width: "50px", marginRight: "6px", display: "block" }}
            alt="Loading..."
          />
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              style={{ width: "150px", margin: "auto", display: "block" }}
              alt="Loading..."
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item" />
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
