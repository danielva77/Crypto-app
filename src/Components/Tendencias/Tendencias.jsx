import React from 'react';
import { Link } from 'react-router-dom';
import "./Tendencias.css"

function Tendencias({ trend, price_btc_usd }) {

  const trendArray = Array.isArray(trend) ? trend : [trend];


  return (
    <div class="container">
      <div class="row align-items-center" style={{ "margin-top": "30px" }}>
        {trendArray.map(e =>
          <div class="col-md-2 py-3 py-md-0" id="my-custom-class" key={e.item.coin_id}>
            <img src={e.item.small} alt="img"></img>
            <Link to={"/detalles/" + e.item.id}><p>{e.item.name}</p></Link>
            <p>{" US$ " + (e.item.price_btc * price_btc_usd).toLocaleString()}</p>
          </div>)}
      </div>
    </div>
  )
}

export default Tendencias