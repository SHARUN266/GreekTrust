import React from "react";
import "./Navbar.css";
import { BsCart3 } from "react-icons/bs";
export default function Navbar() {
  return (
    <div className="nav">
      <div>
        <h2>TeeRex Store</h2>
      </div>
      <div>
        <h3>Products</h3>
        <button>
          <BsCart3 fontSize={"20px"} />
        </button>
        <span>5</span>
      </div>
    </div>
  );
}
