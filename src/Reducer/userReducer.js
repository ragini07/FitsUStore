import { initialUserDataState } from "../Utils/data";

export const userReducerFtn = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((el) => el._id !== action.payload._id),
      };
    }
    case "INCREMENT_QUANTITY": {
      return {
        ...state,
        cart: state.cart.map((el) => {
          if (el._id === action.payload._id) return { ...el, qty: el.qty + 1 };
          return el;
        }),
      };
    }
    case "DECREMENT_QUANTITY": {
      return {
        ...state,
        cart: state.cart.map((el) => {
          if (el._id === action.payload._id) return { ...el, qty: el.qty - 1 };
          return el;
        }),
      };
    }
    case "ADD_TO_WISHLIST": {
      return { ...state, wishlist: [...state.wishlist, { ...action.payload }] };
    }
    case "REMOVE_FROM_WISHLIST": {
      return {
        ...state,
        wishlist: state.wishlist.filter((el) => el._id !== action.payload._id),
      };
    }
    case "SET_CART": {
      return { ...state, cart: [...action.payload] };
    }
    case "SET_WISHLIST": {
      return { ...state, wishlist: [...action.payload] };
    }
    case "SET_ORDER_DATA" : {
        return {...state , orders : [...state.orders ,{...action.payload}]}
    }
    case "CLEAR_CART" : {
        return {...state , cart : []}
    }
    case "CLEAR_USER_DATA": {
      return initialUserDataState;
    }

    default:
        return state
  }
};
