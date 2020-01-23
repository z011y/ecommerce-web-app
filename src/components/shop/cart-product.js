import React, { Component } from "react";
import Quantity from "../quantity";
import PurplePriceTag from "../purple-price-tag";

class CartProduct extends Component {
  render() {
    const { className, product, quantity } = this.props;
    const { title, price } = product;
    return (
      <div className={`${className} cart-product`}>
        <img
          className="cart-product__image"
          src="../../../static/assets/poncho.jpg"
        />
        <div className="cart-product__title">{title}</div>
        <Quantity className="cart-product__quantity" quantity={quantity} />
        <a className="cart-product__remove">Remove</a>
        <PurplePriceTag className="cart-product__price" title={price} />
      </div>
    );
  }
}

export default CartProduct;
