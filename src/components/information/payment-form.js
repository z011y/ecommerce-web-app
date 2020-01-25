import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";
import Details from "../details";

import history from "../../history";

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    const info = [
      {
        _id: 0,
        title: "At least 6 characters"
      },
      {
        _id: 1,
        title: "At least one number"
      },
      {
        _id: 2,
        title: "At least one symbol"
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
          title="Create Account"
          name="login"
        />
        <Field
          className="sign-up-form__back"
          component={FormButton}
          onClick={() => history.push("/signin")}
          type="button"
          title="Back"
          name="back"
          short={true}
        />
        <Details
          className="sign-up-form__details"
          title="Password Requirements"
          info={info}
        />
      </form>
    );
  }
}

PaymentForm = reduxForm({
  form: "PaymentForm"
})(PaymentForm);

export default PaymentForm;
