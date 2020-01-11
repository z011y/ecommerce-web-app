import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

class SignInForm extends Component {
  constructor() {
    super();
  }

  render() {
    const { className } = this.props;
    return <form className={`${className} sign-in-form`}></form>;
  }
}

SignInForm = reduxForm({
  form: "SignInForm"
})(SignInForm);

export default SignInForm;
