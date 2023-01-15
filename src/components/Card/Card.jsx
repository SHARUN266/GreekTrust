import React, { useContext, useState } from "react";
import { CreateContextApp } from "../../context/ContextProvider";
import "./Card.css";
export default function Card(props) {
  const {imageURL,name,price}=props
  const [qty, setQty] = useState(false);
  const {cart,setCart}=useContext(CreateContextApp)
  function handleAddToCart(item){
     setCart([...cart,item])
    setQty(true)
  }
  return (
    <div className="card">
      <img src={imageURL} alt={name} />
      <h3>{name}</h3>
      <div>
        <h3>Rs. {price}</h3>
        {!qty ? (
          <button onClick={()=>handleAddToCart(props)}>Add to cart</button>
        ) : (
          <div className="qty">
            <button>+</button>
            <span>5</span>
            <button>-</button>
          </div>
        )}
      </div>
    </div>
  );
}
