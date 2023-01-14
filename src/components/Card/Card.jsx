import React from 'react'
import "./Card.css"
export default function Card(props) {
  return (
    <div className='card'>
        <img src={props.imageURL} alt={props.name} />
        <h3>{props.name}</h3>
        <div>
            <h3>Rs. {props.price}</h3>
            <button  >Add to cart</button>
        </div>
    </div>
  )
}
