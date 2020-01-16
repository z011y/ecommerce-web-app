import React, { Component } from "react";

import PageTitle from "../page-title";
import Purchases from "./purchases";
import PurchaseDetail from "./purchase-detail";

class PurchaseHistory extends Component {
  render() {
    return (
      <div className="purchase-history">
        {/* <div className="bird-banner">
          <h1>Bird</h1>
          <h2>ponchos</h2>
        </div> */}
        <PageTitle
          className="purchase-history__page-title"
          title="Purchase History"
        />
        <div className="purchase-history__content">
          <Purchases className="purchase-history__purchases" />
          <PurchaseDetail className="purchase-history__detail" />
        </div>
        <div className="purchase-history__border-bottom"></div>
      </div>
    );
  }
}

export default PurchaseHistory;
