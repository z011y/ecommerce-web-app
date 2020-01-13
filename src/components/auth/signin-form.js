import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";
import Details from "../details";

import history from "../../history";

class SignInForm extends Component {
  constructor() {
    super();
  }

  render() {
    const { className, handleSubmit } = this.props;
    const links = [
      {
        _id: 0,
        title: "Not Registered? Create Account",
        onClick: () => history.push("/signup")
      },
      {
        _id: 1,
        title: "Forgot Account Email?",
        onClick: () => console.log("forgot email")
      },
      {
        _id: 2,
        title: "Forgot Password?",
        onClick: () => console.log("forgot password")
      }
    ];
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
        <div className="sign-in-form__line"></div>
        <Field
          className="sign-in-form__login"
          component={FormButton}
          onClick={() => history.push("/account")}
          type="submit"
          title="Login"
          name="login"
        />
        <Details
          className="sign-in-form__details"
          title="Quick Links"
          links={links}
        />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "SignInForm"
})(SignInForm);

export default SignInForm;
