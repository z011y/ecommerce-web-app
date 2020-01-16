import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";

import history from "../../history";

class AccountInformationForm extends Component {
  constructor() {
    super();
  }

  render() {
    const { className, handleSubmit } = this.props;

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
          className="sign-up-form__confirm"
          component={FormInput}
          type="password"
          title="Confirm Password"
          placeholder="Confirm Password"
          name="confirm"
        />
        <div className="sign-up-form__line"></div>
        <Field
          className="sign-up-form__login"
          component={FormButton}
          onClick={() => history.push("/account")}
          type="submit"
          title="Login"
          name="login"
        />
      </form>
    );
  }
}

AccountInformationForm = reduxForm({
  form: "AccountInformationForm"
})(AccountInformationForm);

export default AccountInformationForm;
