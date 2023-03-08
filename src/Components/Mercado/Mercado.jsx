import React from 'react'
import { useState } from 'react'
import ListCryptos from '../ListCryptos/ListCryptos'
import Footer from '../Footer/Footer'
import Tendencias from '../Tendencias/Tendencias'
import "./Mercado.css"


function Mercado({ trend, btc, crypto }) {

  const [search, setSearch] = useState("");

  return (
    <div>
      <section id="sec-4" class="py-5">
        <div class="container my-4">
          <div class="row gx-lg-5">
            <div class="col-lg-6 mb-5">
              <h3>Analizá el mercado</h3>
              <p class="text-muted fw-light lh-lg my-4">No subestimes la importancia de analizar las gráficas de criptomonedas antes de realizar una inversión. Al hacerlo, estarás mejor equipado para tomar decisiones informadas y maximizar tus ganancias potenciales en el mercado de criptomonedas.</p>
              <p class="text-muted fw-light lh-lg my-4">Mas abajo podras ver las ultimas tendencias y las criptomonedas disponible, desliza y hace click en una de ellas para ver su variacion de precio en las ultimas 24hs!</p>
              <a href="#tendencias"><button type="button" class="btn btn-green mt-2">Analizar</button></a>
            </div>
            <div class="col-lg-6">
              <img src="https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg" class="img-fluid" alt="imagen" />
            </div>
          </div>
        </div>
      </section>

      <h1 class="text-center">Tendencia entre los inversores</h1>
      <Tendencias trend={trend} price_btc_usd={btc} />
      <h1 class="text-center">Precios de las criptomonedas según la capitalización de mercado</h1>
      <div className="container">
        <div className="row m-4">
          <input
            type="text"
            placeholder="Busqueda ..."
            className="form-control border-0 mt-4 text-center text-light"
            style={{ backgroundColor: "#46A683", color: "white" }}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div class="mb-4 mt-4" id="tendencias">
            <ListCryptos coins={crypto} search={search} />
          </div>
          <p class="mb-5 text-center">Navega y encontrá</p>
        </div>
      </div>
      <div class="margingeneral"></div>
      <Footer />
    </div>


  )
}

export default Mercado