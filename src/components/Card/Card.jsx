import React from 'react'
import "./Card.css"
export default function Card() {
  return (
    <div className='card'>
        <img src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png" alt="hello" />
        <div>
            <h3>Rs. 300</h3>
            <button>Add to cart</button>
        </div>
    </div>
  )
}
