import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img src="../../static/assets/4x/bird-logo.png" />
        <a
          href="https://zollinger.tech"
          target="blank"
          className="signature-wrapper"
        >
          <FontAwesomeIcon className="signature-icon" icon="code" />
          <h1 className="signature">by Cameron Zollinger</h1>
        </a>
      </div>
    );
  }
}
