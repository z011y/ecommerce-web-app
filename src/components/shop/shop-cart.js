import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CartProduct from "./cart-product";

function CartButton({ className, icon }) {
  return (
    <div className={`${className} cart-button`}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}

function CartContent({ className, products }) {
  let count = products.length;
  let productsJSX = products.map(product => <CartProduct key={product} />);
  return (
    <div className={`${className} cart-content`}>
      <div className="cart-content__title">Cart ({count})</div>
      <div className="cart-content__products">{productsJSX}</div>
      <CartFooter className="cart-content__footer" products={products} />
    </div>
  );
}

function CartFooter({ className, products }) {
  const price = 7.96;
  return (
    <div className={`${className} cart-footer`}>
      <a className="cart-footer__checkout">Checkout</a>
      <div className="cart-footer__subtotal">Subtotal</div>
      <div className="cart-footer__price">${price}</div>
    </div>
  );
}

class ShopCart extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} shop-cart`}>
        <CartButton className="shop-cart__toggle" icon="times" />
        <CartContent
          className="shop-cart__content"
          products={[4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3]}
        />
      </div>
    );
  }
}

export default ShopCart;
