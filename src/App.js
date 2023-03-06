import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Carteras from './Components/Carteras/Carteras';
import Home from "./Components/Home/Home";
import Mercado from './Components/Mercado/Mercado';
import NavBar from "./Components/NavBar/NavBar";
import Transacciones from "./Components/Transacciones/Transacciones";
import axios from "axios";

function App() {

const [crypto, setCrypto] = useState([])
const [trend, setTrend] = useState([])
const [btc, setBtc] = useState(1)

const getCrypto = async () => {
  const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  setCrypto(res.data)
  const trending = await axios.get("https://api.coingecko.com/api/v3/search/trending")
  setTrend(trending.data.coins)
  const bitcoin = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=0")
  setBtc(bitcoin.data.prices[0][1])
}
useEffect(() => {
  getCrypto()
}, [])





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
  }, [carteras]);

  function handleAddCartera(cartera) {
    setCarteras((prevCarteras) => [...prevCarteras, cartera]);
  }

  return (
    <BrowserRouter>
    <NavBar onAddCartera={handleAddCartera} />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/mercado" element={<Mercado trend={trend} btc={btc} crypto={crypto}/>}/>
        <Route path="/carteras" element={<Carteras props={carteras}/>}/>
        <Route path="/transacciones/:id" element={<Transacciones crypto={crypto}/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
