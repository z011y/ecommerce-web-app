import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PurplePriceTage extends Component {
  render() {
    const { className, title } = this.props;
    return (
      <div className={`${className} purple-price-tag`}>
        <div className="purple-price-tag__count">{title}</div>
      </div>
    );
  }
}

export default PurplePriceTage;
