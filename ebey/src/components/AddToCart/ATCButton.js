import { useContext} from "react";
import "../AddToCart/ATCButton.css";
import { SearchCon } from "../../contexts/SearchContext/SearchContext";
import { useNavigate } from "react-router-dom";

export default function ATC({ prods }) {
  const { addToCart } = useContext(SearchCon);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    console.log(prods);
    addToCart(prods);
    navigate("/cart");
  };

  return (
    <div className="cart-btn">
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
