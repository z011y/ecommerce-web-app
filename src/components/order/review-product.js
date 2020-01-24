import React, { Component } from "react";

import { connect } from "react-redux";

import PurplePriceTag from "../purple-price-tag";

class ReviewProduct extends Component {
  render() {
    const { product, quantity } = this.props;
    const { imageUrl, title, price } = product;
    return (
      <div className="review-product">
        <img className="review-product__image" src={imageUrl} />
        <div className="review-product__title">{title}</div>
        <div className="review-product__quantity">{quantity}</div>
        <PurplePriceTag
          className="review-product__price"
          title={price * quantity}
        />
      </div>
    );
  }
}

export default ReviewProduct;
