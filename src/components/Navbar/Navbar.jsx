import React from "react";
import "./Navbar.css";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="nav">
      <div>
        <h2>TeeRex Store</h2>
      </div>
      <div>
        <Link to="/">
          <h3>Products</h3>
        </Link>
        <Link to="/cart">
          <button className="cart">
            <BsCart3 fontSize={"25px"} />
          </button>
        </Link>

        <span className="qty">5</span>
      </div>
    </div>
  );
}
