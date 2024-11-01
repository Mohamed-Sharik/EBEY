// import "../cartpage/MyCart.css";
// import { useContext } from "react";
// import { SearchCon } from "../../contexts/SearchContext/SearchContext";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// function MyCart() {
//   const {
//     cartData,
//     removeFromCart,
//     clearCart,
//     updateQuantity,
//     calculateTotalPrice,
//   } = useContext(SearchCon);

//   const handleRemove = (id) => {
//     removeFromCart(id);
//   };

//   const handleClearCart = () => {
//     clearCart();
//   };

//   const handleQuantityChange = (id, amount) => {
//     updateQuantity(id, amount);
//   };

//   const totalPrice = calculateTotalPrice();

//   return (
//     <div className="my-cart container">
//       <div className="cart-det">
//         <h1>My Cart</h1>
//         <button className="btn btn-warning" onClick={handleClearCart}>
//           Clear Cart
//         </button>
//       </div>
//       {cartData.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cart-card">
//           {cartData.map((item) => (
//             <div key={item.id} className="cart-item">
//               <div className="cart-lft">
//                 <div className="cart-img">
//                   <img src={item.img} alt={item.title} />
//                 </div>
//                 <h5>{item.title}</h5>
//               </div>
//               <div className="cart-rgt">
//                 <p>Brand: {item.brand}</p>
//                 <p>Category: {item.catg}</p>
//                 <p>Price: ${item.price}</p>
//                 <div className="quantity">
//                   <button
//                     className="plus"
//                     onClick={() => handleQuantityChange(item.id, 1)}
//                   >
//                     +
//                   </button>
//                   {item.quantity}{" "}
//                   <button
//                     className="minus"
//                     onClick={() => handleQuantityChange(item.id, -1)}
//                   >
//                     -
//                   </button>
//                   <DeleteForeverIcon onClick={() => handleRemove(item.id)} />
//                 </div>
//               </div>
//             </div>
//           ))}
//           <h2 className="crt-tot">Total: ${totalPrice}</h2>
//         </div>
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
  const {
    cartData,
    removeFromCart,
    clearCart,
    updateQuantity,
    calculateTotalPrice,
  } = useContext(SearchCon);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleQuantityChange = (id, amount) => {
    updateQuantity(id, amount);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="my-cart container">
      <div className="cart-det">
        <h1>My Cart</h1>
        <button className="btn btn-warning" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      {cartData.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-card">
          {cartData.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-lft">
                <div className="cart-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <h5>{item.title}</h5>
              </div>
              <div className="cart-rgt">
                <p>Brand: {item.brand}</p>
                <p>Category: {item.catg}</p>
                <p>Price: ${item.price}</p>
                <div className="quantity">
                  <button
                    className="plus"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                  {item.quantity}{" "}
                  <button
                    className="minus"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    -
                  </button>
                  <DeleteForeverIcon onClick={() => handleRemove(item.id)} />
                </div>
              </div>
            </div>
          ))}
          <h2 className="crt-tot">Total: ${totalPrice}</h2>
        </div>
      )}
    </div>
  );
}

export default MyCart;
