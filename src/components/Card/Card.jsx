import React, { useContext, useState } from "react";
import { CreateContextApp } from "../../context/ContextProvider";
import "./Card.css";
export default function Card(props) {
  const { imageURL, name, price } = props;

  const { cart, setCart } = useContext(CreateContextApp);
  function handleAddToCart(item) {
    setCart([...cart, {...item,qty:1}]);
  }

  return (
    <div className="card">
      <img src={imageURL} alt={name} />
      <h3>{name}</h3>
      <div>
        <h3>Rs. {price}</h3>
        
        <button onClick={() => handleAddToCart(props)}>Add to cart</button>
      </div>
    </div>
  );
}
