import React, { Component } from "react";
import Quantity from "../quantity";
import PurplePriceTag from "../purple-price-tag";

import ProductImg from "../../../static/assets/poncho.jpg";

class ShopProduct extends Component {
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
          <div className="shop-product__back__add-to-cart">Add To Cart</div>
        </div>
      </div>
    );
  }
}

export default ShopProduct;
