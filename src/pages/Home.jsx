import React from "react";
import FilterOption from "../components/FilterOption/FilterOption";
import Search from "../components/Search/Search";
import CardList from "./CardsList/CardList";
export default function Home() {
  return (
    <>
      <Search />
      <FilterOption />
      <CardList />
    </>
  );
}
