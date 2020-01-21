import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "../../helpers/icons";

function FormSearchBar(props) {
  Icons();
  return (
    <div className="search-bar-grid">
      <FontAwesomeIcon icon="search" className="search-bar-grid__icon" />
      <input
        className={`${props.className} search-bar-grid__input`}
        {...props.input}
        type="text"
        placeholder={`${props.placeholder}`}
      />
    </div>
  );
}

class ShopSearchBar extends Component {
  constructor() {
    super();
  }
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
        <Field
          className="shop-search-bar__form-search-bar"
          placeholder="Search"
          component={FormSearchBar}
          name="query"
        />
      </form>
    );
  }
}

ShopSearchBar = reduxForm({
  form: "ShopSearchBar"
})(ShopSearchBar);

export default ShopSearchBar;
