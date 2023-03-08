import React from 'react'
import { useState } from 'react'
import ListCryptos from '../ListCryptos/ListCryptos'
import Footer from '../Footer/Footer'
import Tendencias from '../Tendencias/Tendencias'
import "./Mercado.css"


function Mercado({trend, btc, crypto} ) {

// const [crypto, setCrypto] = useState([])
// const [trend, setTrend] = useState([])
const [search, setSearch] = useState("");
// const [btc, setBtc] = useState(1)

// const getCrypto = async () => {
//   const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
//   setCrypto(res.data)
//   const trending = await axios.get("https://api.coingecko.com/api/v3/search/trending")
//   setTrend(trending.data.coins)
//   const bitcoin = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=0")
//   setBtc(bitcoin.data.prices[0][1])
// }
// useEffect(() => {
//   getCrypto()
// }, [])


  return (
    <div>
       <section id = "sec-4" class = "py-5">
        <div class = "container my-4">
            <div class = "row gx-lg-5">
                <div class = "col-lg-6 mb-5">
                     <h3>Fully Responsive!</h3>
                    <p class = "text-muted fw-light lh-lg my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sequi iste accusamus blanditiis sit ex voluptates et qui iusto fugit, alias quod eveniet eum quidem culpa odio tenetur ea? Earum iste maiores vero tempora aperiam, quia perspiciatis eligendi nihil odit debitis eum, itaque dolorum cumque ad? Id expedita fugiat ut!</p>
                    <p class = "text-muted fw-light lh-lg my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet error id qui labore dolorem omnis?</p>
                    <a href="#tendencias"><button type = "button" class = "btn btn-green mt-2">Read more</button></a>
                </div>
                <div class = "col-lg-6">
                    <img src = "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg" class = "img-fluid" alt="imagen"/>
                </div>
            </div>
        </div>
    </section>

    <h1 class="text-center">Tendencia entre los inversores</h1>
    <Tendencias trend={trend} price_btc_usd={ btc }/>
    <h1 class="text-center">Precios de las criptomonedas según la capitalización de mercado</h1>
    <div className="container">
      <div className="row m-4">
        <input
          type="text"
          placeholder="Busqueda ..."
          className="form-control border-0 mt-4 text-center text-light"
          style={{ backgroundColor: "#46A683", color:"white" }}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div class="mb-4 mt-4" id="tendencias">
        <ListCryptos coins={crypto} search={search} />
        </div>
        <p class="mb-5 text-center">Navega y encontrá</p>
      </div>
    </div>
    <div class="margingeneral"></div>
    <Footer/>
    </div>


  )
}

export default Mercado