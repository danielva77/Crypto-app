import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function Transacciones({crypto}) {

  const [carteras, setCarteras] = useState(() => {
    const arrayEnLocalStorage = JSON.parse(localStorage.getItem('carteras')) || [];
    return arrayEnLocalStorage;
  });
  console.log("CARTERAS",carteras)
const arrayEnLocalStorage = JSON.parse(localStorage.getItem("carteras"));
useEffect(() => {
  localStorage.setItem("carteras", JSON.stringify(carteras));
}, [carteras]);




  const ruta=useParams().id;
  const indice = carteras.findIndex(objeto => objeto.nombre === ruta)
  const [formValues, setFormValues] = useState({
    tipo: '',
    criptomoneda: '',
    precio: 0,
    cantidad: '',
    fecha: ''
  });
  function handleInputChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }

  function updatePrice() {
    const selectedCurrency = document.getElementById("currency").value;
    const selectedCrypto = crypto.find((e) => e.name === selectedCurrency);

    setFormValues({
      ...formValues,
      precio: selectedCrypto.current_price
    });

    const currentPriceElement = document.getElementById("current-price");
    currentPriceElement.innerHTML = `Precio actual: US$ ${selectedCrypto.current_price.toLocaleString()}`;


  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(formValues)
    const indiceObjetoAEditar = arrayEnLocalStorage.findIndex(objeto => objeto.nombre === ruta);
    carteras[indiceObjetoAEditar].transacciones.push(formValues);
    localStorage.setItem("carteras", JSON.stringify(carteras));
    setCarteras([...carteras]);
    setFormValues({
      tipo: '',
      criptomoneda: '',
      precio: 0,
      cantidad: '',
      fecha: ''
    })
    Swal.fire("Modificado con exito!", "", "success");
  }



  function handleDeleteTransaccion(index){
    // const nuevoArray = carteras[indice].transacciones[index];
    // console.log("aver", nuevoArray)

    carteras[indice].transacciones.splice(index,1)
    console.log("QUEQUEDA?", carteras)
    localStorage.setItem("carteras", JSON.stringify(carteras));
    setCarteras([...carteras]);
  }
  
    return (
    <div>
      <form onSubmit={handleSubmit}>
      <label for="type">Tipo de operación:</label>
  <select name="tipo" id="type" onChange={handleInputChange}>
    <option disabled selected>Seleccionar operacion</option>
    <option value="compra">Compra</option>
    <option value="venta">Venta</option>
  </select>

  <br/>

  <label for="currency">Criptomoneda:</label>
  <select name="criptomoneda" id="currency" onChange={(e) => {updatePrice(); handleInputChange(e)}}>
    <option disabled selected>Seleccionar criptomoneda</option>
    {crypto.map((e) => <option name={e.name} value={e.name}>{e.symbol.toUpperCase()} {e.name}</option>
    )}
  </select>
  <span id="current-price" name="precio"></span>
  

  <br/>

  <label for="quantity">Cantidad:</label>
  <input type="number" id="quantity" name="cantidad" onChange={handleInputChange}/>

  <br/>

  <label for="date">Fecha:</label>
  <input type="date" id="date" name="fecha" onChange={handleInputChange}/>

  <br/>

  <input type="submit" value="Enviar"/>
  <Link to="/carteras"><button>Cancelar</button></Link>
      </form>


      <div>
        <h1>Historial de transacciones</h1>
        { carteras[indice].transacciones.map((e,index) => 
        <div>
          <p>#{index}</p>
          <p>{e.tipo}</p>
          <p>{e.criptomoneda}</p>
          <p>{e.cantidad}</p>
          <p>{e.precio}</p>
          <p>{e.fecha}</p>
          <button>Modificar</button>
          <button onClick={(e) =>handleDeleteTransaccion(index)}>Eliminar</button>
        </div>)
    }
      </div>

    </div>
  )
}

export default Transacciones