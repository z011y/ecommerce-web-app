import React, { Component } from "react";

import Header from "./header-nav/header";
import Navbar from "./header-nav/navbar";
import Footer from "./footer";

class Layout extends Component {
  constructor() {
    super();

    this.state = {
      className: ""
    };
  }

  render() {
    return (
      <div className="layout">
        {location.pathname === "/" ? (
          <div className="hero-layout">
            {this.props.children}
            <Header />
            <Navbar />
            <Footer />
          </div>
        ) : (
          <div className="site-layout">
            {this.props.children}
            <Header />
            <Navbar />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default Layout;
