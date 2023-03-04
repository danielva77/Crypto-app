import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ListCryptos from '../ListCryptos/ListCryptos'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

function Carteras() {

const [crypto, setCrypto] = useState([])
const [search, setSearch] = useState("");

const getCrypto = async () => {
  const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  setCrypto(res.data)
}
useEffect(() => {
  getCrypto()
}, [])


  return (
    <div>
    <NavBar/>
    <div className="container">
      <div className="row">
        <input
          type="text"
          placeholder="Busqueda ..."
          className="form-control border-0 mt-4 text-center"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />

        <ListCryptos coins={crypto} search={search} />
      </div>
    </div>
    <Footer/>
    </div>


  )
}

export default Carteras