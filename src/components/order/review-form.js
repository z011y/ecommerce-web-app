import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import history from "../../history";

import { FormButton } from "../form-fields";
import ReviewProducts from "./review-products";

class ReviewForm extends Component {
  constructor() {
    super();
  }

  render() {
    const { className, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={`${className} review-form`}>
        <div className="review-form__legend">
          <div className="review-form__legend__name">Name</div>
          <div className="review-form__legend__quantity">Quantity</div>
          <div className="review-form__legend__price">Price</div>
        </div>
        <ReviewProducts className="review-form__products" />
        <div className="review-form__line"></div>
        <Field
          className="review-form__proceed"
          component={FormButton}
          onClick={() => history.push("/signin")}
          type="submit"
          title="Proceed to Checkout"
          name="proceed"
        />
        <Field
          className="review-form__back"
          component={FormButton}
          onClick={() => history.push("/shop")}
          type="button"
          title="Back"
          name="back"
          short={true}
        />
      </form>
    );
  }
}

ReviewForm = reduxForm({
  form: "ReviewForm"
})(ReviewForm);

export default ReviewForm;
