// import "../AddToCart/ATCButton.css";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { SearchCon } from "../../contexts/SearchContext/SearchContext";

// export default function ATC({ product }) {
//   const navigate = useNavigate();
//   const { addToCart } = useContext(SearchCon);

//   const handleAddToCart = () => {
//     addToCart(product);
//     navigate("/cart");
//   };

//   return (
//     <div className="cart-btn">
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// }

import "../AddToCart/ATCButton.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchCon } from "../../contexts/SearchContext/SearchContext";

export default function ATC({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(SearchCon);

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="cart-btn">
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
