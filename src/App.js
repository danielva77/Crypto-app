import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Carteras from './Components/Carteras/Carteras';
import Home from "./Components/Home/Home";
import Mercado from './Components/Mercado/Mercado';
import NavBar from "./Components/NavBar/NavBar";

function App() {
  // const [carteras, setCarteras] = useState([]);
  const [carteras, setCarteras] = useState(() => {
    const localStoragecarteras = localStorage.getItem("carteras");
    return localStoragecarteras ? JSON.parse(localStoragecarteras) : [];
});

  useEffect(() => {
    const storedArray = localStorage.getItem("carteras");
    if (storedArray) {
      setCarteras(JSON.parse(storedArray));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carteras", JSON.stringify(carteras));
    // window.addEventListener("beforeunload", () => {
    //   localStorage.setItem("carteras", JSON.stringify(carteras));
    // });
  }, [carteras]);

  function handleAddCartera(cartera) {
    setCarteras((prevCarteras) => [...prevCarteras, cartera]);
  }

  return (
    <BrowserRouter>
    <NavBar onAddCartera={handleAddCartera} />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/mercado" element={<Mercado/>}/>
        <Route path="/carteras" element={<Carteras carteras={carteras}/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
