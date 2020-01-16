import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";

import history from "../../history";

class AccountInformationForm extends Component {
  constructor() {
    super();

    this.state = {
      showPasswords: false
    };
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

        {this.state.showPasswords ? (
          [
            <Field
              key={0}
              className="account-information-form__current"
              component={FormInput}
              type="password"
              title="Current Password"
              placeholder="Current Password"
              name="current"
            />,
            <Field
              key={1}
              className="account-information-form__new"
              component={FormInput}
              type="password"
              title="New Password "
              placeholder="New Password"
              name="new"
            />,
            <Field
              key={2}
              className="account-information-form__confirm"
              component={FormInput}
              type="password"
              title="Confirm Password"
              placeholder="Confirm Password"
              name="confirm"
            />,
            <div key={3} className="account-information-form__line"></div>,
            <Field
              key={4}
              className="account-information-form__update-information"
              component={FormButton}
              onClick={() => this.setState({ showPasswords: false })}
              type="submit"
              title="Update Information"
              name="update-information"
            />,
            <Field
              key={5}
              className="account-information-form__cancel"
              component={FormButton}
              onClick={() => this.setState({ showPasswords: false })}
              type="button"
              title="Cancel"
              name="cancel"
              short={true}
            />
          ]
        ) : (
          <Field
            className="account-information-form__change-password"
            component={FormButton}
            onClick={() => this.setState({ showPasswords: true })}
            type="button"
            title="Change Password"
            name="change-password"
          />
        )}

        <div className="account-information-form__line"></div>
      </form>
    );
  }
}

AccountInformationForm = reduxForm({
  form: "AccountInformationForm"
})(AccountInformationForm);

export default AccountInformationForm;
