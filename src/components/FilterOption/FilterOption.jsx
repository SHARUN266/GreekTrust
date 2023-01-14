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
        <label for="checkbox1">Red</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="checkbox-group"
          value="blue"
        />
        <label for="checkbox2">Blue</label>
        <input
          type="checkbox"
          id="checkbox3"
          name="checkbox-group"
          value="green"
        />
        <label for="checkbox3">Green</label>
      </div>
      <p>Gender</p>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          name="checkbox-group"
          value="men"
        />
        <label for="checkbox1">Men</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="checkbox-group"
          value="women"
        />
        <label for="checkbox2">Women</label>
      </div>
      <p>Price</p>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          name="checkbox-group"
          value="0-250"
        />
        <label for="checkbox1">0-Rs250</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="checkbox-group"
          value="251-450"
        />
        <label for="checkbox2">Rs251-450</label>
        <input
          type="checkbox"
          id="checkbox3"
          name="checkbox-group"
          value="450"
        />
        <label for="checkbox3">Rs450</label>
      </div>
      <p>Type</p>
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          name="checkbox-group"
          value="polo"
        />
        <label for="checkbox1">Polo</label>
        <input
          type="checkbox"
          id="checkbox2"
          name="checkbox-group"
          value="hoodies"
        />
        <label for="checkbox2">Hoodie</label>
        <input
          type="checkbox"
          id="checkbox3"
          name="checkbox-group"
          value="basic"
        />
        <label for="checkbox3">Basic</label>
      </div>
    </div>
  );
}
