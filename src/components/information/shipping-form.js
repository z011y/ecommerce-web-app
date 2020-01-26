import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";
import Details from "../details";

import history from "../../history";

import OrderSummary from "./order-summary";

class ShippingForm extends Component {
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
      <form onSubmit={handleSubmit} className={`${className} shipping-form`}>
        <Field
          className="shipping-form__name"
          component={FormInput}
          type="name"
          title="Name"
          placeholder="Name"
          name="name"
        />
        <Field
          className="shipping-form__address"
          component={FormInput}
          type="address"
          title="Address"
          placeholder="Street Address"
          name="address"
        />
        <Field
          className="shipping-form__city"
          component={FormInput}
          type="city"
          title="City"
          placeholder="City"
          name="city"
        />
        <Field
          className="shipping-form__state"
          component={FormInput}
          type="state"
          title="State"
          placeholder="State"
          name="state"
        />
        <Field
          className="shipping-form__zipcode"
          component={FormInput}
          type="zipcode"
          title="Zipcode"
          placeholder="Zipcode"
          name="zipcode"
        />

        <div className="shipping-form__line"></div>
        <Field
          className="shipping-form__use-this-address"
          component={FormButton}
          onClick={() => history.push("/information/payment")}
          type="submit"
          title="Use This Address"
          name="use-this-address"
        />
        <Field
          className="shipping-form__back"
          component={FormButton}
          onClick={() => history.push("/shop")}
          type="button"
          title="Back"
          name="back"
          short={true}
        />
        <OrderSummary className="shipping-form__order-summary" />
      </form>
    );
  }
}

ShippingForm = reduxForm({
  form: "ShippingForm"
})(ShippingForm);

export default ShippingForm;
