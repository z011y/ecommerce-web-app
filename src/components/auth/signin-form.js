import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput } from "../form-fields";

class SignInForm extends Component {
  constructor() {
    super();
  }

  render() {
    const { className } = this.props;
    return (
      <form className={`${className} sign-in-form`}>
        <Field
          className="sign-in-form__email"
          component={FormInput}
          type="email"
          title="Email"
          placeholder="Email"
          name="email"
        />
        <Field
          className="sign-in-form__password"
          type="password"
          title="Password"
          placeholder="Password"
          name="password"
        />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "SignInForm"
})(SignInForm);

export default SignInForm;
