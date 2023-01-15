import React, { useContext, useEffect, useState } from "react";
import Cart from "../../components/Cart/Cart";
import { TotalAmount } from "../../components/utils/TotalAmount";
import { CreateContextApp } from "../../context/ContextProvider";
import "./Products.css";
export default function Products() {
  const { cart, setCart } = useContext(CreateContextApp);

  
 
  function handleDelete(id) {
    let deleteItems = cart.filter((e) => e.id !== id);

    setCart(deleteItems);
  }
 
  function handQty(id,qty){
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === id) {
          return { ...item, qty:item.qty+ qty };
        }
        return item;
      })
    );
  }
  return (
    <div className="products">
      <h1>Shopping Cart</h1>
      <div className="cartList">
        {cart.length <= 0 ? (
          <h1>No cart available...</h1>
        ) : (
          cart?.map((e) => (
            <Cart
            handQty={handQty}
              handleDelete={handleDelete}
              key={e.id}
              {...e}
            />
          ))
        )}
      </div>

      <div className="total">
        <h3>
          Total Amount: <span>Rs {TotalAmount(cart)}</span>
        </h3>
      </div>
    </div>
  );
}
