// import { useContext} from "react";
// import { SearchCon } from "../../contexts/SearchContext/SearchContext";
// import '../cartpage/MyCart.css'

// function MyCart() {
//   const { cartData } = useContext(SearchCon);

//   return (
//     <div>
//       <h1>My Cart</h1>
//       {cartData.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cartData.map((item) => (
//           <div key={item.id} className="cart-wrap">
//             <div className="cart-img">
//               <img src={item.thumbnail} alt="" />
//             </div>
//             <h3>{item.title}</h3>
//             <p>Price: ${item.price}</p>
//             <h5>{item.quantity}</h5>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default MyCart;

import "../cartpage/MyCart.css";
import { useContext } from "react";
import { SearchCon } from "../../contexts/SearchContext/SearchContext";

function MyCart() {
  const { cartData, removeFromCart, clearCart } = useContext(SearchCon);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="my-cart container">
      <h1>Shopping Cart</h1>
      {cartData.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartData.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-lft">
                <div className="cart-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <h2>{item.title}</h2>
              </div>
              <div className="cart-rgt">
                <p>Price: ${item.price}</p>
                <p>
                  Quantity: <button className="plus">+</button>
                  {item.quantity}
                  <button className="minus">-</button>
                </p>
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button className="btn btn-warning" onClick={handleClearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default MyCart;
