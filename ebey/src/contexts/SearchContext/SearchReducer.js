// import { ProdActions } from "./Actions";

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case ProdActions.SET_FETCHED_DATA:
//       return { ...state, fetchedData: action.payload };
//     case ProdActions.SET_SINGLE_DATA:
//       return { ...state, singleData: action.payload };
//     case ProdActions.ADD_TO_CART:
//       return { ...state, cartData: [...state.cartData, action.payload] };
//     case ProdActions.UPDATE_CART:
//       return { ...state, cartData: action.payload };
//     case ProdActions.REMOVE_FROM_CART:
//       return { ...state, cartData: action.payload };
//     case ProdActions.CLEAR_CART:
//       return { ...state, cartData: [] };
//     default:
//       return state;
//   }
// };

import { ProdActions } from "./Actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ProdActions.SET_FETCHED_DATA:
      return { ...state, fetchedData: action.payload };
    case ProdActions.SET_SINGLE_DATA:
      return { ...state, singleData: action.payload };
    case ProdActions.ADD_TO_CART:
      return { ...state, cartData: [...state.cartData, action.payload] };
    case ProdActions.UPDATE_CART:
      return { ...state, cartData: action.payload };
    case ProdActions.REMOVE_FROM_CART:
      return { ...state, cartData: action.payload };
    case ProdActions.CLEAR_CART:
      return { ...state, cartData: [] };
    default:
      return state;
  }
};
