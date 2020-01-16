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
      <form
        onSubmit={handleSubmit}
        className={`${className} account-information-form`}
      >
        <Field
          className="account-information-form__name"
          component={FormInput}
          type="name"
          title="Name"
          placeholder="Name"
          name="name"
        />
        <Field
          className="account-information-form__email"
          component={FormInput}
          type="email"
          title="Email"
          placeholder="Email"
          name="email"
        />
        <Field
          className="account-information-form__street-address"
          component={FormInput}
          type="address"
          title="Street Address"
          placeholder="Street Address"
          name="address"
        />
        <Field
          className="account-information-form__city"
          component={FormInput}
          type="city"
          title="City"
          placeholder="City"
          name="city"
        />

        <Field
          className="account-information-form__state"
          component={FormInput}
          type="state"
          title="State"
          placeholder="State"
          name="state"
        />
        <Field
          className="account-information-form__zip-code"
          component={FormInput}
          type="zipcode"
          title="Zip Code"
          placeholder="Zip Code"
          name="zipcode"
        />

        {/* <Field
          className="account-information-form__password"
          component={FormInput}
          type="password"
          title="Password"
          placeholder="Password"
          name="password"
        />
        <Field
          className="account-information-form__confirm"
          component={FormInput}
          type="password"
          title="Confirm Password"
          placeholder="Confirm Password"
          name="confirm"
        />
        <div className="account-information-form__line"></div>
        <Field
          className="account-information-form__login"
          component={FormButton}
          onClick={() => history.push("/account")}
          type="submit"
          title="Login"
          name="login"
        /> */}
      </form>
    );
  }
}

AccountInformationForm = reduxForm({
  form: "AccountInformationForm"
})(AccountInformationForm);

export default AccountInformationForm;
