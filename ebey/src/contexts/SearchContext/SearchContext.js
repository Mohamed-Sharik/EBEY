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

  const addToCart = async (product) => {
    try {
      const response = await axios.post("https://dummyjson.com/carts/add", {
        userId: 4,
        products: [{ id: product.id, quantity: 1 }],
      });
      console.log(product);
      if (response.status === 200) {
        dispatch({ type: ProdActions.SET_ADD_TO_CART, payload: product });
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const fetchCart = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/carts");
      if (response.status === 200) {
        console.log(response.data.carts[1]?.products);
        dispatch({
          type: ProdActions.SET_CART_DATA,
          payload: response.data.carts[1]?.products || [],
        });
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  return (
    <SearchCon.Provider
      value={{
        ...state,
        getData,
        fetchSingleProduct,
        addToCart,
        fetchCart,
      }}
    >
      {children}
    </SearchCon.Provider>
  );
};
export default SCProvider;
