import React, { Component } from "react";

import { UnderlinedTitle, InfoTitle } from "./info-help";

class OrderSummary extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} order-summary`}>
        <UnderlinedTitle className="order-summary__title" />
        <InfoTitle
          className="order-summary__subtotal"
          title="4 items"
          value="24.99"
        />
        <InfoTitle
          className="order-summary__tax-shipping"
          title="Taxes & Shipping"
          value="3.15"
        />
        <InfoTitle
          className="order-summary__total"
          title="Total"
          value="28.14"
        />
      </div>
    );
  }
}
export default OrderSummary;
