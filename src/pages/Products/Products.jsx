import React, { useContext, useEffect, useState } from "react";
import Cart from "../../components/Cart/Cart";
import { CreateContextApp } from "../../context/ContextProvider";
import "./Products.css";
export default function Products() {
  const { cart, setCart } = useContext(CreateContextApp);

  function handleDelete(id) {
    let deleteItems = cart.filter((e) => e.id !== id);

    setCart(deleteItems);
  }
  return (
    <div className="products">
      <h1>Shopping Cart</h1>
      <div className="cartList">
        {cart.length <= 0 ? (
          <h1>No cart available...</h1>
        ) : (
          cart?.map((e) => (
            <Cart handleDelete={handleDelete} key={e.id} {...e} />
          ))
        )}
      </div>
      <div className="total">
        <h3>
          Total Amount: <span>Rs 2200</span>
        </h3>
      </div>
    </div>
  );
}
