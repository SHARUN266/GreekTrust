import React from "react";
import Card from "../../components/Card/Card";
import "./CardList.css"
export default function CardList() {
  return (
    <div className="cardList">
      {
        new Array(200).fill(0).map((e)=>(
            <Card/>
        ))
      }
    </div>
  );
}
