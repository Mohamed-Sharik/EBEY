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
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

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
      <h1>My Cart</h1>
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
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
              <div className="cart-rgt">
                <p>Brand: {item.brand}</p>
                <p>Category: {item.catg}</p>
                <p>Price: ${item.price}</p>
                <div className="quantity">
                  <button className="plus">+</button>
                  {item.quantity} <button className="minus">-</button>
                  <DeleteForeverIcon onClick={() => handleRemove(item.id)} />
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
