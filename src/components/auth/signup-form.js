import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";
import Details from "../details";

import history from "../../history";

class SignUpForm extends Component {
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
      <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
        <Field
          className="sign-up-form__name"
          component={FormInput}
          type="name"
          title="Name"
          placeholder="Name"
          name="name"
        />
        <Field
          className="sign-up-form__email"
          component={FormInput}
          type="email"
          title="Email"
          placeholder="Email"
          name="email"
        />
        <Field
          className="sign-up-form__password"
          component={FormInput}
          type="password"
          title="Password"
          placeholder="Password"
          name="password"
        />
        <Field
          className="sign-up-form__confirm-password"
          component={FormInput}
          type="confirm-password"
          title="Confirm Password"
          placeholder="Confirm Password"
          name="confirm"
        />

        <div className="sign-up-form__line"></div>
        <Field
          className="sign-up-form__login"
          component={FormButton}
          onClick={() => console.log("tryna submit")}
          type="submit"
          title="Login"
          name="login"
        />
        <Field
          className="sign-up-form__back"
          component={FormButton}
          onClick={() => console.log("tryna submit")}
          type="button"
          title="Back"
          name="back"
          short={true}
        />
        <Details
          className="sign-up-form__details"
          title="QuickLinks"
          links={links}
        />
      </form>
    );
  }
}

SignUpForm = reduxForm({
  form: "SignUpForm"
})(SignUpForm);

export default SignUpForm;
