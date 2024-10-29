import { useContext, useEffect } from "react";
import { SearchCon } from "../../contexts/SearchContext/SearchContext";
import '../cartpage/MyCart.css'

function MyCart() {
  const { fetchCart, cartData } = useContext(SearchCon);

  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <div>
      <h1>My Cart</h1>
      {cartData.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartData.map((item) => (
          <div key={item.id} className="cart-wrap">
            <div className="cart-img">
              <img src={item.thumbnail} alt="" />
            </div>
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <h5>{item.quantity}</h5>
          </div>
        ))
      )}
    </div>
  );
}

export default MyCart;
