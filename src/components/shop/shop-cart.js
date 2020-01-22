import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartButton({ className, icon }) {
  return (
    <div className={`${className} cart-button`}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}

function CartContent({ className, products }) {
  let count = products.length;
  return (
    <div className={`${className} cart-content`}>
      <div className="cart-content__title">Cart ({count})</div>
      <div className="cart-content__products"></div>
      <div className="cart-content__footer"></div>
    </div>
  );
}

class ShopCart extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} shop-cart`}>
        <CartButton className="shop-cart__toggle" icon="times" />
        <CartContent className="shop-cart__content" products={[4, 5, 3]} />
      </div>
    );
  }
}

export default ShopCart;
