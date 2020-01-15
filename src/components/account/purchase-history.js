import React, { Component } from "react";

import PageTitle from "../page-title";

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
      </div>
    );
  }
}

export default PurchaseHistory;
