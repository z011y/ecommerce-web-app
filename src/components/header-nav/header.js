import React, { Component } from "react";

import Logo from "../../../static/assets/4x/bird-logo.png";

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header">
        <img src={Logo} />
      </div>
    );
  }
}

export default Header;
