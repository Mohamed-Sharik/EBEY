// import React from "react";
// import { useNavigate } from "react-router-dom";
// import ATC from "../AddToCart/ATCButton";

// function CustCard(props) {
//   const navigate = useNavigate();
//   return (
//     <div className="card-wrap">
//       <div
//         className="card-nav"
//         onClick={() => navigate(`/viewproduct/${props.id}`)}
//       >
//         <div className="prod-img">
//           <img src={props.img} alt="" />
//         </div>
//         <div className="ttl">
//           <p>{props.title}</p>
//         </div>
//         <div className="price">
//           <h5>$ {props.price}</h5>
//         </div>
//       </div>
//       <ATC
//         product={{
//           id: props.id,
//           title: props.title,
//           catg: props.catg,
//           brand: props.brand,
//           price: props.price,
//           img: props.img,
//         }}
//       />

//       <div className="fav-icon">
//         <button>
//           <img src="./icons/fav-icon.svg" alt="" width={25} height={25} />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CustCard;

import React from "react";
import { useNavigate } from "react-router-dom";
import ATC from "../AddToCart/ATCButton";

function CustCard(props) {
  const navigate = useNavigate();
  return (
    <div className="card-wrap">
      <div
        className="card-nav"
        onClick={() => navigate(`/viewproduct/${props.id}`)}
      >
        <div className="prod-img">
          <img src={props.img} alt="" />
        </div>
        <div className="ttl">
          <p>{props.title}</p>
        </div>
        <div className="price">
          <h5>$ {props.price}</h5>
        </div>
      </div>
      <ATC
        product={{
          id: props.id,
          title: props.title,
          catg: props.catg,
          brand: props.brand,
          price: props.price,
          img: props.img,
        }}
      />

      <div className="fav-icon">
        <button>
          <img src="./icons/fav-icon.svg" alt="" width={25} height={25} />
        </button>
      </div>
    </div>
  );
}

export default CustCard;
