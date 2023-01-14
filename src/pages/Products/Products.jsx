import React from "react";
import Cart from "../../components/Cart/Cart";
import "./Products.css";
export default function Products() {
  return (
    <div className="products">
      <h1 >Shopping Cart</h1>
      <div className="cartList">
        <Cart/>
        <Cart/>
      
      </div>
      <div className="total">
        <h3>
          Total Amount: <span>Rs 2200</span>
        </h3>
      </div>
    </div>
  );
}
