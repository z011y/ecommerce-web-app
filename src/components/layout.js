import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <div className="app">
        <h1>Ecomm</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
