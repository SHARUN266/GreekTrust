import React from "react";
import Card from "../../components/Card/Card";
import "./CardList.css"
export default function CardList({data}) {
  return (
    <div className="cardList">
      {
        data.length===0 && <h1>No result found...</h1>
      }
      {
        data && data?.map((e,i)=>(
            <Card key={i}  {...e}/>
        ))
      }
    </div>
  );
}
