import React, { useState } from "react";
import "./Search.css";
import { BiSearch, BiFilterAlt } from "react-icons/bi";
export default function Search({ text, setText, handleSearch }) {
  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search for products..."
        />

        <button type="submit">
          <BiSearch color="white" fontSize={"30px"} />
        </button>
        <button id="filterBtn">
          <BiFilterAlt color="white" fontSize={"30px"} />
        </button>
      </form>
    </div>
  );
}
