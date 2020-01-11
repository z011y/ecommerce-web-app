import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import SignInForm from "./signin-form";

class SignIn extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="sign-in">
        <SignInForm className="sign-in__form" />
      </div>
    );
  }
}

export default SignIn;
