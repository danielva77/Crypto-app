import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ListCryptos from '../ListCryptos/ListCryptos'
import Footer from '../Footer/Footer'
import Tendencias from '../Tendencias/Tendencias'

function Mercado() {

const [crypto, setCrypto] = useState([])
const [trend, setTrend] = useState([])
const [search, setSearch] = useState("");
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


  return (
    <div>
    <h1 class="text-center">Tendencia entre los inversores</h1>
    <Tendencias trend={trend} price_btc_usd={ btc }/>
    <h1 class="text-center">Precios de las criptomonedas según la capitalización de mercado</h1>
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

export default Mercado