import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 8.02,
        orderNumber: "A00429434",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State St"
        }
      },
      {
        _id: 1,
        total: 17.93,
        orderNumber: "A00429723",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State St"
        }
      },
      {
        _id: 2,
        total: 14.21,
        orderNumber: "A00429841",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State St"
        }
      },
      {
        _id: 3,
        total: 3.47,
        orderNumber: "A00429853",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State St"
        }
      },
      {
        _id: 4,
        total: 4.22,
        orderNumber: "A00429866",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State St"
        }
      },
      {
        _id: 5,
        total: 21.46,
        orderNumber: "A00429874",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State St"
        }
      },
      {
        _id: 6,
        total: 12.33,
        orderNumber: "A00429911",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State St"
        }
      }
    ]
  };
}
