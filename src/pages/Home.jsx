import React, { useContext, useEffect, useState } from "react";
import FilterOption from "../components/FilterOption/FilterOption";
import Search from "../components/Search/Search";
import { CreateContextApp } from "../context/ContextProvider";
import CardList from "./CardsList/CardList";
export default function Home() {
  const { data, setData } = useContext(CreateContextApp);
  const [text, setText] = useState("");

  useEffect(() => {
    GetTee();
  }, []);
  async function GetTee() {
    try {
      let res = await fetch(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      let data1 = await res.json();
      setData(data1);
    } catch (e) {
      console.log(e.message);
    }
  }
  function handleSearch(e) {
    e.preventDefault();
    let search = data.filter((e) =>
      e.name.toLowerCase().includes(text.toLowerCase())
    );
    setText("");
    setData(search);
  }

  return (
    <>
      <Search text={text} setText={setText} handleSearch={handleSearch} />
      <FilterOption />
      <CardList data={data} />
    </>
  );
}
