import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import ShopSearchBar from "./shop-search-bar";
import ShopProduct from "./shop-product";
import ShopCart from "./shop-cart";
import CartButton from "./cart-button";

class Shop extends Component {
  componentDidMount() {
    const headerLinks = [
      {
        _id: 0,
        title: "Shop",
        path: "/shop"
      },
      {
        _id: 1,
        title: "Logout",
        path: "/"
      }
    ];
    this.props.setHeaderLinks(headerLinks);
    this.props.fetchShopCategories();
    this.props.setNavbarLinks(this.props.categories);

    this.props.fetchShopProducts();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props != nextProps) {
      this.props.setNavbarLinks(nextProps.categories, _id =>
        this.props.filterProductsWithCategoryId(_id)
      );
    }
    return true;
  }

  onSubmit = fields => {
    console.log(fields);
    this.props.filterProductsWithQuery(fields);
  };

  handleToggleCart = () => {
    if (
      document.getElementById("shop-cart").classList.contains("cart-hidden")
    ) {
      document.getElementById("shop-cart").classList.remove("cart-hidden");
    } else {
      document.getElementById("shop-cart").classList.add("cart-hidden");
    }
  };

  render() {
    return (
      <div className="shop">
        <ShopSearchBar onSubmit={this.onSubmit} className="shop__search-bar" />
        {/* shop search bar  */}
        <div className="shop__products">
          {this.props.filteredProducts.map(product => {
            return <ShopProduct {...product} key={product._id} />;
          })}
        </div>
        <ShopCart className="shop__cart" />

        <CartButton
          onClick={this.handleToggleCart}
          className="shop__cart-button"
          icon={"shopping-cart"}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { categories, filteredProducts } = state.shop;
  return { categories, filteredProducts };
}

Shop = connect(
  mapStateToProps,
  actions
)(Shop);

export default Shop;
