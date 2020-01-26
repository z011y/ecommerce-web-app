import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";
import Details from "../details";

import history from "../../history";
import OrderSummary from "./order-summary";

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
      <form onSubmit={handleSubmit} className={`${className} payment-form`}>
        {" "}
        <Field
          className="payment-form__name"
          component={FormInput}
          type="name"
          title="Name"
          placeholder="Name"
          name="name"
        />
        <Field
          className="payment-form__card"
          component={FormInput}
          type="card"
          title="Credit Card Number"
          placeholder="____-____-____-____"
          name="card"
        />
        <Field
          className="payment-form__expiration"
          component={FormInput}
          type="expiration"
          title="Expiration Date"
          placeholder="Expiration Date"
          name="expiration"
        />
        <Field
          className="payment-form__ccv"
          component={FormInput}
          type="ccv"
          title="CCV"
          placeholder="CCV"
          name="ccv"
        />
        <div className="payment-form__line"></div>
        <Field
          className="payment-form__pay-complete"
          component={FormButton}
          onClick={() => history.push("/information/payment")}
          type="submit"
          title="Pay & Complete"
          name="pay-complete"
        />
        <Field
          className="payment-form__back"
          component={FormButton}
          onClick={() => history.push("/shop")}
          type="button"
          title="Back"
          name="back"
          short={true}
        />
        <OrderSummary className="payment-form__order-summary" />
      </form>
    );
  }
}

PaymentForm = reduxForm({
  form: "PaymentForm"
})(PaymentForm);

export default PaymentForm;
