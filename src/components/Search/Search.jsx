import React, { useState } from "react";
import "./Search.css";
import { BiSearch, BiFilterAlt } from "react-icons/bi";
export default function Search() {
   function handleModel(){
    console.log("Hello")
    document.getElementsByClassName("filter").style=""
   }
 
  return (
    <div className="search">
      <input type="text" placeholder="Search for products..." />
      <button>
        <BiSearch color="white" fontSize={"30px"} />
      </button>
      <button onClick={handleModel} id="filterBtn">
        <BiFilterAlt color="white" fontSize={"30px"} />
      </button>
    </div>
  );
}
