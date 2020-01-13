import React, { Component } from "react";

import { connect } from "react-redux";

class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="navbar">
        {this.props.navbarLinks.map((link, index) => {
          return (
            <a
              className={`navbar__link ${link.active ? "purple-text" : ""}`}
              key={index}
              onClick={() => console.log("tryna swith tab")}
            >
              {link.title}
            </a>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { navbarLinks } = state.headerNavbar;
  return {
    navbarLinks
  };
}

Navbar = connect(mapStateToProps)(Navbar);

export default Navbar;
