import React, { Component } from "react";
import Quantity from "../quantity";
import PurplePriceTag from "../purple-price-tag";

import ProductImg from "../../../static/assets/poncho.jpg";

import * as actions from "../../actions";
import { connect } from "react-redux";

class ShopProduct extends Component {
  handleAddToCart = () => {
    if (
      document.getElementById("shop-cart").classList.contains("cart-hidden")
    ) {
      const { _id, title, description, price, belongsTo } = this.props;
      this.props.addCartProduct({ _id, title, description, price, belongsTo });
      document.getElementById("shop-cart").classList.remove("cart-hidden");
    } else {
      document.getElementById("shop-cart").classList.add("cart-hidden");
    }
  };

  render() {
    const { _id, title, description, price } = this.props;
    return (
      <div className="shop-product">
        <div className="shop-product__front">
          <img
            className="shop-product__front__image"
            src={ProductImg}
            alt="poncho"
          />
          <div className="shop-product__front__title">{title}</div>
        </div>
        <div className="shop-product__back">
          <div className="shop-product__back__title">{title}</div>
          <div className="shop-product__back__description">{description}</div>
          <PurplePriceTag
            className="shop-product__back__price"
            title="$24.99"
          />
          <Quantity className="shop-product__back__quantity" quantity={1} />
          <a
            onClick={this.handleAddToCart}
            className="shop-product__back__add-to-cart"
          >
            Add To Cart
          </a>
        </div>
      </div>
    );
  }
}

ShopProduct = connect(
  null,
  actions
)(ShopProduct);

export default ShopProduct;
