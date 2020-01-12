import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import SignInForm from "./signin-form";
import PageTitle from "../page-title";

class SignIn extends Component {
  constructor() {
    super();
  }

  onSubmit = fields => {
    console.log(fields);
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

export default SignIn;
