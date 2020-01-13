import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import SignUpForm from "./signup-form";
import PageTitle from "../page-title";

class SignUp extends Component {
  constructor() {
    super();
  }

  onSubmit = fields => {
    console.log(fields);
  };

  render() {
    return (
      <div className="sign-up">
        <PageTitle className="sign-up__page-title" title="Register" />
        <SignUpForm onSubmit={this.onSubmit} className="sign-up__form" />
      </div>
    );
  }
}

export default SignUp;
