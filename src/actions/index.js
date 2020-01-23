import {
  setHeaderLinks,
  setNavbarLinks,
  changeNavbarActive
} from "./header-navbar";

import {
  fetchUserPurchases,
  setPurchaseDetail,
  fetchCartProducts,
  addCartProduct
} from "./user";

import {
  fetchShopCategories,
  fetchShopProducts,
  filterProductsWithCategoryId,
  filterProductsWithQuery
} from "./shop";

export {
  // HEADER NAVBAR
  setHeaderLinks,
  setNavbarLinks,
  changeNavbarActive,
  // USER
  fetchUserPurchases,
  setPurchaseDetail,
  fetchCartProducts,
  addCartProduct,
  // SHOP
  fetchShopCategories,
  fetchShopProducts,
  filterProductsWithCategoryId,
  filterProductsWithQuery
};
