// import React, { useContext, useEffect, useRef, useState } from "react";
// import "../singleprodcard/SingleProd.css";
// import { SearchCon } from "../../contexts/SearchContext/SearchContext";
// import { useParams } from "react-router-dom";
// import ImgGall from "../../ProdGallery";
// import ATC from "../AddToCart/ATCButton";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import { Link } from "react-router-dom";

// function ViewProduct() {
//   const { id } = useParams();
//   const { singleData, fetchSingleProduct } = useContext(SearchCon);
//   const [seeMore, setSeeMore] = useState(false);
//   const [showSMBtn, setShowSMBtn] = useState(false);
//   const btnRef = useRef(null);

//   function handleClick(event) {
//     event.preventDefault();
//     console.info("You clicked a breadcrumb.");
//   }

//   useEffect(() => {
//     if (btnRef.current) {
//       setShowSMBtn(btnRef.current.scrollHeight !== btnRef.current.clientHeight);
//     }
//   }, [singleData]);

//   const descStyle = {
//     display: "-webkit-box",
//     WebkitBoxOrient: "vertical",
//     WebkitLineClamp: 3,
//     overflow: "hidden",
//   };

//   useEffect(() => {
//     fetchSingleProduct(id);
//   }, [id]);

//   return (
//     <div>
//       {singleData ? (
//         <div className="prod-con-wrap">
//           {/* <h5 className="prod-cat">
//             {singleData.tags[0]}/{singleData.tags[1]}/{singleData.title}
//           </h5> */}
//           <div role="presentation" onClick={handleClick} className="prod-cat">
//             <Breadcrumbs aria-label="breadcrumb">
//               <Link to="/">Search</Link>
//               <Link to="#" className="active">
//                 {singleData.title}
//               </Link>
//             </Breadcrumbs>
//           </div>
//           <div className="single-prod-con">
//             <div className="prod-lft-cnt">
//               <div className="single-prod-imgs">
//                 <ImgGall imgs={singleData.images} />
//                 {/* <img src={singleData.images[0]} alt="" /> */}
//               </div>
//             </div>
//             <div className="prod-rgt-cnt">
//               <div className="rgt-cnt-wrap">
//                 <div className="fav-shre">
//                   <div className="favicon">
//                     <img src="/icons/fav-icon.svg" alt="heart icon" />
//                   </div>
//                   <div className="shre-icon">
//                     <img src="/icons/share-icon.svg" alt="share icon" />
//                   </div>
//                 </div>
//                 <div className="prod-ttl">
//                   <h1>{singleData.title}</h1>
//                 </div>
//                 <div className="prod-desc">
//                   <p style={seeMore ? null : descStyle} ref={btnRef}>
//                     {singleData.description}
//                   </p>
//                   {showSMBtn && (
//                     <button
//                       onClick={() => setSeeMore(!seeMore)}
//                       className="more-btn"
//                     >
//                       {seeMore ? "see less" : "see more"}
//                     </button>
//                   )}
//                 </div>
//                 <div className="rating">
//                   <p className="sold">
//                     4K+ <span> sold</span>
//                   </p>
//                   <p>•</p>
//                   <p className="reviews">
//                     <img src="/icons/star.svg" alt="" /> {singleData.rating}
//                     <span>({singleData.reviews.length} reviews)</span>
//                   </p>
//                 </div>
//                 <div className="rs-ds">
//                   <h4>$ {singleData.price}</h4>

//                   <h6>$120.00</h6>
//                 </div>
//                 <ATC
//                   style={{ visibility: "visible !important" }}
//                   prods={singleData}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default ViewProduct;

import React, { useContext, useEffect, useRef, useState } from "react";
import "../singleprodcard/SingleProd.css";
import { SearchCon } from "../../contexts/SearchContext/SearchContext";
import { useParams } from "react-router-dom";
import ImgGall from "../../ProdGallery";
import ATC from "../AddToCart/ATCButton";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

function ViewProduct() {
  const { id } = useParams();
  const { singleData, fetchSingleProduct } = useContext(SearchCon);
  const [seeMore, setSeeMore] = useState(false);
  const [showSMBtn, setShowSMBtn] = useState(false);
  const btnRef = useRef(null);

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  useEffect(() => {
    if (btnRef.current) {
      setShowSMBtn(btnRef.current.scrollHeight !== btnRef.current.clientHeight);
    }
  }, [singleData]);

  const descStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
  };

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  return (
    <div>
      {singleData ? (
        <div className="prod-con-wrap">
          {/* <h5 className="prod-cat">
            {singleData.tags[0]}/{singleData.tags[1]}/{singleData.title}
          </h5> */}
          <div role="presentation" onClick={handleClick} className="prod-cat">
            <Breadcrumbs aria-label="breadcrumb">
              <Link to="/">Search</Link>
              <Link to="#" className="active">
                {singleData.title}
              </Link>
            </Breadcrumbs>
          </div>
          <div className="single-prod-con">
            <div className="prod-lft-cnt">
              <div className="single-prod-imgs">
                <ImgGall imgs={singleData.images} />
                {/* <img src={singleData.images[0]} alt="" /> */}
              </div>
            </div>
            <div className="prod-rgt-cnt">
              <div className="rgt-cnt-wrap">
                <div className="fav-shre">
                  <div className="favicon">
                    <img src="/icons/fav-icon.svg" alt="heart icon" />
                  </div>
                  <div className="shre-icon">
                    <img src="/icons/share-icon.svg" alt="share icon" />
                  </div>
                </div>
                <div className="prod-ttl">
                  <h1>{singleData.title}</h1>
                </div>
                <div className="prod-desc">
                  <p style={seeMore ? null : descStyle} ref={btnRef}>
                    {singleData.description}
                  </p>
                  {showSMBtn && (
                    <button
                      onClick={() => setSeeMore(!seeMore)}
                      className="more-btn"
                    >
                      {seeMore ? "see less" : "see more"}
                    </button>
                  )}
                </div>
                <div className="rating">
                  <p className="sold">
                    4K+ <span> sold</span>
                  </p>
                  <p>•</p>
                  <p className="reviews">
                    <img src="/icons/star.svg" alt="" /> {singleData.rating}
                    <span>({singleData.reviews.length} reviews)</span>
                  </p>
                </div>
                <div className="rs-ds">
                  <h4>$ {singleData.price}</h4>

                  <h6>$120.00</h6>
                </div>
                <ATC
                  style={{ visibility: "visible !important" }}
                  product={singleData}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ViewProduct;
