import React from "react";
import "./FilterOption.css";
export default function FilterOption() {
  return (
    <div className="filter">
      <p>Colour</p>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          name="checkbox-group"
          value="red"
        />
        <label htmlFor="checkbox1">Red</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="checkbox-group"
          value="blue"
        />
        <label htmlFor="checkbox2">Blue</label>
        <input
          type="checkbox"
          id="checkbox3"
          name="checkbox-group"
          value="green"
        />
        <label htmlFor="checkbox3">Green</label>
      </div>
      <p>Gender</p>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          name="checkbox-group"
          value="men"
        />
        <label htmlFor="checkbox1">Men</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="checkbox-group"
          value="women"
        />
        <label htmlFor="checkbox2">Women</label>
      </div>
      <p>Price</p>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          name="checkbox-group"
          value="0-250"
        />
        <label htmlFor="checkbox1">0-Rs250</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="checkbox-group"
          value="251-450"
        />
        <label htmlFor="checkbox2">Rs251-450</label>
        <input
          type="checkbox"
          id="checkbox3"
          name="checkbox-group"
          value="450"
        />
        <label htmlFor="checkbox3">Rs450</label>
      </div>
      <p>Type</p>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          name="checkbox-group"
          value="polo"
        />
        <label htmlFor="checkbox1">Polo</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="checkbox-group"
          value="hoodies"
        />
        <label htmlFor="checkbox2">Hoodie</label>
        <input
          type="checkbox"
          id="checkbox3"
          name="checkbox-group"
          value="basic"
        />
        <label htmlFor="checkbox3">Basic</label>
      </div>
    </div>
  );
}
