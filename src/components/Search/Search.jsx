import React from "react";
import "./Search.css";
import { BiSearch } from "react-icons/bi";
export default function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search for products..." />
      <button>
        <BiSearch color="white" fontSize={"30px"} />
      </button>
    </div>
  );
}
