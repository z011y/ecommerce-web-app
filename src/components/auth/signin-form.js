import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";

class SignInForm extends Component {
  constructor() {
    super();
  }

  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
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
          component={FormInput}
          type="password"
          title="Password"
          placeholder="Password"
          name="password"
        />
        <Field
          className="sign-in-form__login"
          component={FormButton}
          onClick={() => console.log("tryna submit")}
          type="submit"
          title="Login"
          name="login"
        />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "SignInForm"
})(SignInForm);

export default SignInForm;
