import React from 'react'

export default function Cart() {
  return (
    <div>
    <img
      src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png"
      alt=""
    />
    <div>
      <label>Title</label>
      <span>Rs. 250$</span>
    </div>
    <select name="" id="">
      <option value="">Qty:1</option>
      <option value="">Qty:2</option>
      <option value="">Qty:3</option>
    </select>
    <button>Delete</button>
  </div>
  )
}
