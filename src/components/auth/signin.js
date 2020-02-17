import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import SignInForm from "./signin-form";
import PageTitle from "../page-title";

import { connect } from "react-redux";
import * as actions from "../../actions";

class SignIn extends Component {
  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks([]);
  }

  onSubmit = fields => {
    this.props.signIn(fields);
    this.props.history.push("/account");
  };

  render() {
    return (
      <div className="sign-in">
        <PageTitle className="sign-in__page-title" title="Login" />
        <SignInForm onSubmit={this.onSubmit} className="sign-in__form" />
      </div>
    );
  }
}

SignIn = connect(
  null,
  actions
)(SignIn);

export default SignIn;
