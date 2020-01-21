import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Quantity extends Component {
  render() {
    const { className, quantity } = this.props;
    return (
      <div className={`${className} quantity`}>
        <div className="quantity__count">{quantity}</div>
        <div className="quantity__plus">
          <FontAwesomeIcon icon="plus" />
        </div>
        <div className="quantity__minus">
          <FontAwesomeIcon icon="minus" />
        </div>
      </div>
    );
  }
}

export default Quantity;
