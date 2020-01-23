import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormButton } from "../form-fields";

import history from "../../history";

class ReviewForm extends Component {
  constructor() {
    super();
  }

  render() {
    const { className, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={`${className} review-form`}>
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
