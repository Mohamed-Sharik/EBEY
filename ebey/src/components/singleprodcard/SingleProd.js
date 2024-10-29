import React from "react";
import "../singleprodcard/SingleProd.css";

function SingleProd(props) {
  return (
    <div className="prod-con-wrap">
      <h5 className="prod-cat">
        {props.tag1}/{props.tag2}/{props.title}
      </h5>
      <div className="single-prod-con">
        <div className="prod-lft-cnt">
          <div className="single-prod-imgs">
            <img src={props.img} alt="" />
          </div>
        </div>
        <div className="prod-rgt-cnt">
          <div className="rgt-cnt-wrap">
            <div className="prod-det-cnt">
              <div className="prod-det-lst">
                <div className="prod-ttl">
                  <h1>{props.title}</h1>
                </div>
                <div className="prod-desc">
                  <p>
                    {props.desc}
                    <span>...See more</span>
                  </p>
                </div>
                <div className="rating">
                  <p className="sold">4K+ sold</p>
                  <p>•</p>
                  <p className="reviews">⭐ {props.rating}</p>
                </div>
                <div className="rs-ds">
                  <h4>${props.price}</h4>
                  <h6>
                    <s>$120.00</s>
                  </h6>
                </div>
                <div className="add-btn">
                  <button>Add to Cart</button>
                </div>
              </div>
              <div className="share-cnt">
                <div className="fav-shre">
                  <div className="favicon">
                    <img src="./icons/fav-icon.svg" alt="heart icon" />
                  </div>
                  <div className="shre-icon">
                    <img src="./icons/share-icon.svg" alt="share icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProd;
