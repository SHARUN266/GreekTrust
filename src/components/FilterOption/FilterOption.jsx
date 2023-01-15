import React, { useContext, useState } from "react";
import { CreateContextApp } from "../../context/ContextProvider";
import "./FilterOption.css";
export default function FilterOption() {
  const { data, setData } = useContext(CreateContextApp);
  function handleFilter(e) {
    let { name, value } = e.target;
    if (name == "gender") {
      let filterData = data.filter((e) => e.gender == value);
      setData(filterData);
    } else if (name == "color") {
      let filterData = data.filter((e) => e.color == value);
      setData(filterData);
    } else if (name === "type") {
      let filterData = data.filter((e) => e.type == value);
      setData(filterData);
    } else if (name == "price") {
      let [min, max] = value.split("-").map(Number);

      let filterData = data.filter((e) => e.price >= min && e.price <= max);
      filterData.sort((a, b) => a.price - b.price);
      setData(filterData);
    }
  }
  console.log(data);
  return (
    <div className="filter">
      <p>Colour</p>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          name="color"
          onChange={(e) => handleFilter(e)}
          value="Red"
        />
        <label htmlFor="checkbox1">Red</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="color"
          onChange={(e) => handleFilter(e)}
          value="Blue"
        />
        <label htmlFor="checkbox2">Blue</label>
        <input
          type="checkbox"
          id="checkbox3"
          name="color"
          onChange={(e) => handleFilter(e)}
          value="Green"
        />
        <label htmlFor="checkbox3">Green</label>
      </div>
      <p>Gender</p>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          name="gender"
          value="Men"
          onChange={(e) => handleFilter(e)}
        />
        <label htmlFor="checkbox1">Men</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="gender"
          value="Women"
          onChange={(e) => handleFilter(e)}
        />
        <label htmlFor="checkbox2">Women</label>
      </div>
      <p>Price</p>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          name="price"
          onChange={(e) => handleFilter(e)}
          value="0-250"
        />
        <label htmlFor="checkbox1">0-Rs250</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="price"
          onChange={(e) => handleFilter(e)}
          value="251-450"
        />
        <label htmlFor="checkbox2">Rs251-450</label>
        <input
          type="checkbox"
          id="checkbox3"
          name="price"
          onChange={(e) => handleFilter(e)}
          value="450"
        />
        <label htmlFor="checkbox3">Rs450</label>
      </div>
      <p>Type</p>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          name="type"
          onChange={(e) => handleFilter(e)}
          value="Polo"
        />
        <label htmlFor="checkbox1">Polo</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="type"
          onChange={(e) => handleFilter(e)}
          value="Hoodie"
        />
        <label htmlFor="checkbox2">Hoodie</label>
        <input
          type="checkbox"
          id="checkbox3"
          name="type"
          onChange={(e) => handleFilter(e)}
          value="Basic"
        />
        <label htmlFor="checkbox3">Basic</label>
      </div>
    </div>
  );
}
