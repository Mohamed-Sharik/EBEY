import React from "react";
import "../footer/Foot.css";

function FootCnt() {
  return (
    <div className="foot-out">
      <div className="container">
        <div className="foot-inn">
          <div className="foot-top-cnt">
            <div className="foot-brand">
              {/* <div className="logo-cnt">
                <div className="com-log">
                  <img src="./imgs/foot-icon.png" alt="" />
                </div>
                <div className="com-name">
                  <h3>Sports World</h3>
                </div>
              </div> */}
              <div className="logo-cnt">
                <div className="com-log">
                  <img src="/imgs/logo1.svg" alt="" />
                </div>
                <div className="com-name">
                  <h3>bey</h3>
                </div>
              </div>
              <div className="com-det">
                <p>
                  Founded in 2002, we focus on delivering the best sports driven
                  products from world renowned brands to accelerate your
                  performance and fitness growth.
                </p>
              </div>
            </div>
            <div className="about-cnt">
              <div className="abt-ttl">
                <h5>About Us</h5>
              </div>
              <div className="abt-lst">
                <ul>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Partnerships</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="about-cnt">
              <div className="abt-ttl">
                <h5>Help</h5>
              </div>
              <div className="abt-lst">
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Size Guide</a>
                  </li>
                  <li>
                    <a href="#">Delivery & Returns</a>
                  </li>
                  <li>
                    <a href="#">Orders & Payments</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="about-cnt">
              <div className="abt-ttl">
                <h5>Account</h5>
              </div>
              <div className="abt-lst">
                <ul>
                  <li>
                    <a href="#">Profile</a>
                  </li>
                  <li>
                    <a href="#">Coupons</a>
                  </li>
                  <li>
                    <a href="#">Wish List</a>
                  </li>
                  <li>
                    <a href="#">Notifications</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="about-cnt">
              <div className="abt-ttl">
                <h5>Social Media</h5>
              </div>
              <div className="abt-lst">
                <ul>
                  <li className="scm-lst">
                    <img src="/icons/fb.svg" alt="" className="scm-img" />
                    <a href="#">Facebook</a>
                  </li>
                  <li className="scm-lst">
                    <img src="/icons/insta.svg" alt="" className="scm-img" />
                    <a href="#">Instagram</a>
                  </li>
                  <li className="scm-lst">
                    <img src="/icons/yt.svg" alt="" className="scm-img" />
                    <a href="#">Youtube</a>
                  </li>
                  <li className="scm-lst">
                    <img src="/icons/tw.svg" alt="" className="scm-img" />
                    <a href="#">Twitter</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="foot-bot-cnt">
            <div className="cpy">
              <p>@SportsWorld 2002. All rights reserved</p>
            </div>
            <div className="policy">
              <p>
                <a href="#">Privacy Policy</a>
              </p>
              <p>•</p>
              <p>
                <a href="#">Sitemap</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FootCnt;
