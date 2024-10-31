// import { createContext, useReducer } from "react";
// import { reducer } from "./SearchReducer";
// import { ProdActions } from "./Actions";
// import { APIURL } from "../../components/Apiurl/Url";
// import axios from "axios";

// export const SearchCon = createContext();

// const SCProvider = ({ children }) => {
//   const initialState = {
//     fetchedData: [],
//     singleData: null,
//     cartData: [],
//   };
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // GETTING ALL PRODUCTS
//   const getData = async (items) => {
//     try {
//       const URL = `${APIURL}/search?q=${items ?? ""}&limit=194`;
//       const response = await axios.get(URL);
//       if (response.status === 200) {
//         const products = response.data.products;
//         dispatch({ type: ProdActions.SET_FETCHED_DATA, payload: products });
//       } else {
//         throw new Error(`API Error : ${response.status}`);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // GETTING SINGLE PRODUCT
//   const fetchSingleProduct = async (id) => {
//     try {
//       console.log("Fetching product with ID:", id);
//       const response = await axios.get(`${APIURL}/${id}`).then((resp) => {
//         if (resp.status === 200) {
//           return resp.data;
//         } else {
//           console.error("Error fetching product:", response.status);
//         }
//       });
//       console.log(response);
//       dispatch({ type: ProdActions.SET_SINGLE_DATA, payload: response });
//     } catch (error) {
//       console.error("Error fetching product:", error);
//     }
//   };

//   return (
//     <SearchCon.Provider
//       value={{
//         ...state,
//         getData,
//         fetchSingleProduct,
//       }}
//     >
//       {children}
//     </SearchCon.Provider>
//   );
// };
// export default SCProvider;

import { createContext, useReducer } from "react";
import { reducer } from "./SearchReducer";
import { ProdActions } from "./Actions";
import { APIURL } from "../../components/Apiurl/Url";
import axios from "axios";

export const SearchCon = createContext();

const SCProvider = ({ children }) => {
  const initialState = {
    fetchedData: [],
    singleData: null,
    cartData: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // GETTING ALL PRODUCTS
  const getData = async (items) => {
    try {
      const URL = `${APIURL}/search?q=${items ?? ""}&limit=194`;
      const response = await axios.get(URL);
      if (response.status === 200) {
        const products = response.data.products;
        dispatch({ type: ProdActions.SET_FETCHED_DATA, payload: products });
      } else {
        throw new Error(`API Error : ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // GETTING SINGLE PRODUCT
  const fetchSingleProduct = async (id) => {
    try {
      console.log("Fetching product with ID:", id);
      const response = await axios.get(`${APIURL}/${id}`).then((resp) => {
        if (resp.status === 200) {
          return resp.data;
        } else {
          console.error("Error fetching product:", response.status);
        }
      });
      console.log(response);
      dispatch({ type: ProdActions.SET_SINGLE_DATA, payload: response });
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  // GETTING CART
  const addToCart = (product) => {
    const existingProductIndex = state.cartData.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      // Update quantity
      const updatedCartData = state.cartData.map((item, index) => {
        if (index === existingProductIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      dispatch({ type: ProdActions.UPDATE_CART, payload: updatedCartData });
      console.log(updatedCartData);
    } else {
      // Add new product with quantity 1
      const newProduct = { ...product, quantity: 1 };
      dispatch({ type: ProdActions.ADD_TO_CART, payload: newProduct });
      console.log(newProduct);
    }
  };

  // Remove from Cart
  const removeFromCart = (id) => {
    const updatedCartData = state.cartData.filter((item) => item.id !== id);
    dispatch({ type: ProdActions.REMOVE_FROM_CART, payload: updatedCartData });
  };

  // Clear Cart
  const clearCart = () => {
    dispatch({ type: ProdActions.CLEAR_CART });
  };

  return (
    <SearchCon.Provider
      value={{
        ...state,
        getData,
        fetchSingleProduct,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </SearchCon.Provider>
  );
};
export default SCProvider;
