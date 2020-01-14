import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";

import AccountInformation from "./account-information";
import PurchaseHistory from "./purchase-history";

class Account extends Component {
  componentDidMount() {
    const navbarLinks = [
      {
        _id: 0,
        title: "Purchase History",
        active: false,
        component: <PurchaseHistory />
      },
      {
        _id: 1,
        title: "Account Information",
        active: false,
        component: <AccountInformation />
      }
    ];

    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks([]);
  }

  renderContent() {
    let jsx;
    if (this.props.navbarLinks) {
      this.props.navbarLinks.map(link => {
        if (link.active) {
          jsx = link.component;
        }
      });
    }
    return jsx;
  }
  render() {
    return <div className="account">{this.renderContent()}</div>;
  }
}

function mapStateToProps(state) {
  const { headerLinks, navbarLinks } = state.headerNavbar;
  return { headerLink, navbarLink };
}

Account = connect(
  mapStateToProps,
  actions
)(Account);

export default Account;
