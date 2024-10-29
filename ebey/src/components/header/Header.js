import React, { useContext } from "react";
import "./Header.css";
import { SearchCon } from "../../contexts/SearchContext/SearchContext";
import { NavLink } from "react-router-dom";

function Header() {
  const { getData, cartData } = useContext(SearchCon);

  const GetInput = (event) => {
    if (event.key === "Enter") {
      const find = event.target.value;
      getData(find);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="brand-con">
          <div className="brand-cnt">
            <div className="logo">
              <img src="/imgs/logo1.svg" alt="" />
            </div>
            <div className="brand-name">
              <h2>bey</h2>
            </div>
          </div>
          <div className="brand-nav">
            <ul>
              <NavLink
                to="/Home"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <li className="nav-link">Home </li>
                <span className="page-indicator"></span>
              </NavLink>

              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <li className="nav-link">Search </li>
                <span className="page-indicator"></span>
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="funtc">
          <div className="search">
            <input type="text" onKeyDown={GetInput} />
            {/* <IoSearch /> */}
            <button>
              <img src="/icons/search-icon.svg" alt="" width={20} height={20} />
            </button>
          </div>
          <div className="cart">
            <button>
              <img src="/icons/cart-icon.svg" alt="" width={30} height={30} />
              {cartData.length > 0 && (
                <span className="cart-count">{cartData.length}</span>
              )}
            </button>
          </div>
          <div className="user">
            <button>
              <img src="/icons/user-icon.svg" alt="" width={20} height={20} />
            </button>
            <div className="user-arrow">
              <button>
                <img src="/icons/user-change-icon.svg" alt="" width={7} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
