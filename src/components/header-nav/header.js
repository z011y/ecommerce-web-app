import React, { Component } from "react";

import Logo from "../../../static/assets/4x/bird-logo.png";

import { connect } from "react-redux";

import history from "../../history";

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header">
        <img
          className="header__img"
          src={Logo}
          onClick={() => history.push("/")}
        />

        <div className="header__links">
          {this.props.headerLinks.map((link, index) => {
            return (
              <a
                className="header__link"
                key={index}
                onClick={() => history.push(link.path)}
              >
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { headerLinks } = state.headerNavbar;
  return {
    headerLinks
  };
}

Header = connect(mapStateToProps)(Header);

export default Header;
