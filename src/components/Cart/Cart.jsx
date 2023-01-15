import React from "react";

export default function Cart({handQty,handleDelete,...props}) {
  return (
    <div>
      <img src={props.imageURL} alt={props.name} />
      <div>
        <label>{props.name}</label>
        <span>Rs. {props.price}</span>
      </div>
      <select onChange={()=>handQty(props.id,props.qty)}>
        {new Array(props.quantity).fill(0)?.map((e, i) => (
          <option value={i + 1} >Qty:{i + 1}</option>
        ))}
      </select>
      <button onClick={()=>handleDelete(props.id)}>Delete</button>
    </div>
  );
}
