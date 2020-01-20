import {
  // SET_SHOP_CATEGORIES
  SET_NAVBAR_LINKS,
  SET_SHOP_PRODUCTS
} from "./types";

export function fetchShopCategories() {
  return {
    type: SET_NAVBAR_LINKS,
    payload: [
      {
        _id: 0,
        title: "All"
      },
      {
        _id: 1,
        title: "Rain"
      },
      {
        _id: 2,
        title: "Sport"
      },
      {
        _id: 3,
        title: "Casual"
      }
    ]
  };
}

export function fetchShopProducts() {
  return {
    type: SET_SHOP_PRODUCTS,
    payload: [
      {
        _id: 0,
        title: "Parrot",
        description: "The Parrot style poncho",
        price: 24.99,
        belongsTo: [0, 1]
      },
      {
        _id: 1,
        title: "Quetzal",
        description: "The Quetzal style poncho",
        price: 24.99,
        belongsTo: [0, 3]
      },
      {
        _id: 2,
        title: "Peacock",
        description: "The Peacock style poncho",
        price: 24.99,
        belongsTo: [0, 1]
      },
      {
        _id: 3,
        title: "Eagle",
        description: "The Eagle style poncho",
        price: 24.99,
        belongsTo: [0, 2]
      }
    ]
  };
}
