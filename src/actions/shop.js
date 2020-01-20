import {
  // SET_SHOP_CATEGORIES
  SET_NAVBAR_LINKS
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
