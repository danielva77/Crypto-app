import React from 'react'
import CoinRow from './CoinRow';
import "./ListCriptos.css"

const titles = ["#", "Criptomoneda", "Precio USD", "Cambio de precio","Volumen en 24Hs"];
function ListCryptos({ coins, search }) {
    const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) || 
    coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

  if (!coins) return <div>no coins</div>

  return (
    <div class="divCripto">
      <table className="table mt-4 table-dark table-hover">
        <thead>
          <tr>
            {titles.map((title, i) => (
              <td key={i}>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin, index) => (
            <CoinRow key={coin.id} coin={coin} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCryptos