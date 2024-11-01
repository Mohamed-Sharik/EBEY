import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.homePg}>
      <h1 style={styles.slogan}>Unwrap Joy: Shop with Us Today!</h1>
      <NavLink to="/" style={styles.shopNowButton}>
        Shop Now!
      </NavLink>
    </div>
  );
}

const styles = {
  homePg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  slogan: {
    margin: "0",
  },
  shopNowButton: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#ff6347",
    color: "white",
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  shopNowButtonHover: {
    backgroundColor: "#ff4500",
  },
};
