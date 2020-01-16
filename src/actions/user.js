import { SET_USER_PURCHASES } from "./types";

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        title: "purchase 1",
        amount: 8.02
      },
      {
        _id: 2,
        title: "purchase 2",
        amount: 14.82
      }
    ]
  };
}
