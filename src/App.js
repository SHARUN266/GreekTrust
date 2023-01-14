import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products/Products";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
