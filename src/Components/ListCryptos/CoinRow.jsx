import React from 'react'
import { Link } from 'react-router-dom';

function CoinRow({ coin, index }) {
  return (
    <tr>
      <td className="text-light">{index}</td>
      <td>
        <img
          src={coin.image}
          alt=""
          className="me-4"
          style={{ width: "3%" }}
        />
        <Link to={"/detalles/" + coin.id}><span>{coin.name}</span></Link>
        <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
      </td>

      <td>${coin.current_price.toLocaleString()}</td>

      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {coin.price_change_percentage_24h}
      </td>

      <td>
        ${coin.total_volume.toLocaleString()}
      </td>
    </tr>
  );
};

export default CoinRow