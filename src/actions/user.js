import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS
} from "./types";

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
        orderDate: new Date().toDateString(),
        creditCard: "Visa 1740",
        user: {
          name: "Cameron Zollinger",
          shippingAddress: "1234 West State St"
        }
      },
      {
        _id: 1,
        total: 17.93,
        orderNumber: "A00429723",
        orderDate: new Date().toDateString(),
        creditCard: "Visa 1740",
        user: {
          name: "Nicole Couture",
          shippingAddress: "1544 S Easter Ave"
        }
      },
      {
        _id: 2,
        total: 14.21,
        orderNumber: "A00429841",
        orderDate: new Date().toDateString(),
        creditCard: "Visa 1740",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State St"
        }
      },
      {
        _id: 3,
        total: 3.47,
        orderNumber: "A00429853",
        orderDate: new Date().toDateString(),
        creditCard: "Visa 1740",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State St"
        }
      },
      {
        _id: 4,
        total: 4.22,
        orderNumber: "A00429866",
        orderDate: new Date().toDateString(),
        creditCard: "Visa 1740",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State St"
        }
      },
      {
        _id: 5,
        total: 21.46,
        orderNumber: "A00429874",
        orderDate: new Date().toDateString(),
        creditCard: "Visa 1740",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State St"
        }
      },
      {
        _id: 6,
        total: 12.33,
        orderNumber: "A00429911",
        orderDate: new Date().toDateString(),
        creditCard: "Visa 1740",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State St"
        }
      }
    ]
  };
}

export function fetchCartProducts() {
  return {
    type: SET_CART_PRODUCTS,
    payload: [
      {
        _id: 0,
        product: {
          _id: 0,
          title: "Parrot",
          description: "The Parrot style poncho",
          price: 24.99,
          belongsTo: [0, 1]
        },
        quantity: 2
      },
      {
        _id: 1,
        product: {
          _id: 1,
          title: "Quetzal",
          description: "The Quetzal style poncho",
          price: 24.99,
          belongsTo: [0, 3]
        },
        quantity: 1
      },
      {
        _id: 2,
        product: {
          _id: 2,
          title: "Peacock",
          description: "The Peacock style poncho",
          price: 24.99,
          belongsTo: [0, 1]
        },
        quantity: 3
      },
      {
        _id: 3,
        product: {
          _id: 3,
          title: "Eagle",
          description: "The Eagle style poncho",
          price: 24.99,
          belongsTo: [0, 2]
        },
        quantity: 1
      }
    ]
  };
}
