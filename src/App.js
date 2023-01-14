import FilterOption from "./components/FilterOption/FilterOption";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import CardList from "./pages/CardsList/CardList";


function App() {
  return (
    <>
    <Navbar/>
    <Search/>
    <FilterOption/>
    <CardList/>
    </>
  );
}

export default App;
