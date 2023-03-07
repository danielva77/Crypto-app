import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';

function Transacciones({crypto}) {

  const [carteras, setCarteras] = useState(() => {
    const arrayEnLocalStorage = JSON.parse(localStorage.getItem('carteras')) || [];
    return arrayEnLocalStorage;
  });
const arrayEnLocalStorage = JSON.parse(localStorage.getItem("carteras"));
useEffect(() => {
  localStorage.setItem("carteras", JSON.stringify(carteras));
}, [carteras]);




  const ruta=useParams().id;
  const indice = carteras.findIndex(objeto => objeto.nombre === ruta)
  // const [formValues, setFormValues] = useState({
  //   tipo: '',
  //   criptomoneda: '',
  //   precio: 0,
  //   cantidad: '',
  //   fecha: ''
  // });
  // function handleInputChange(e) {
  //   setFormValues({
  //     ...formValues,
  //     [e.target.name]: e.target.value
  //   });
  // }

  // function updatePrice() {
  //   const selectedCurrency = document.getElementById("currency").value;
  //   const selectedCrypto = crypto.find((e) => e.name === selectedCurrency);

  //   setFormValues({
  //     ...formValues,
  //     precio: selectedCrypto.current_price
  //   });

  //   const currentPriceElement = document.getElementById("current-price");
  //   currentPriceElement.innerHTML = `Precio actual: US$ ${selectedCrypto.current_price.toLocaleString()}`;


  // }

  // function handleSubmit(e){
  //   e.preventDefault()
  //   const indiceObjetoAEditar = arrayEnLocalStorage.findIndex(objeto => objeto.nombre === ruta);
  //   carteras[indiceObjetoAEditar].transacciones.push(formValues);
  //   localStorage.setItem("carteras", JSON.stringify(carteras));
  //   setCarteras([...carteras]);
  //   setFormValues({
  //     tipo: '',
  //     criptomoneda: '',
  //     precio: 0,
  //     cantidad: '',
  //     fecha: ''
  //   })
  //   Swal.fire("Transaccion realizada con exito!", "", "success");
    
  // }

  function handleAdd(){

    Swal.fire({
      title: 'Agregar una transaccion',
      html: `
        <form>
        <select name="tipo" id="tipo">
          <option value="" disabled selected>Seleccionar operacion</option>
          <option value="compra">Compra</option>
          <option value="venta">Venta</option>
        </select>

        <select name="criptomoneda" id="criptomoneda">
        <option value="" disabled selected>Seleccionar criptomoneda</option>
        ${crypto.map((e) => `<option name=${e.name} value=${e.name}>${e.symbol.toUpperCase()} ${e.name}</option>`
        )}
        </select>
        <input type="number" id="cantidad" name="cantidad" placeholder="cantidad" min="0" value="1">Cantidad</input>
        <input type="number" id="price" name="precio" placeholder="precio" min="0" value="1">Precio US$</input>
        <input type="date" id="fecha" name="fecha" value="${new Date().toISOString().substr(0, 10)}"></input>
        </form>
      `,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Enviar'
    }).then((result) => {
      if (result.isConfirmed) {
        const type = document.getElementById('tipo').value;
        const currency = document.getElementById('criptomoneda').value;
        const quantity = document.getElementById('cantidad').value;
        const price = document.getElementById('price').value;
        const date = document.getElementById('fecha').value;


        if (!type || !currency || !quantity || !price || !date) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo efectuar la operacion, datos faltantes',
          });
          return;
        }else{       
          const formValues = {
          tipo: type,
          criptomoneda: currency,
          cantidad: quantity,
          precio: price,
          total: quantity*price,
          fecha: date
        };
        const indiceObjetoAEditar = arrayEnLocalStorage.findIndex(objeto => objeto.nombre === ruta);
        carteras[indiceObjetoAEditar].transacciones.push(formValues);
        localStorage.setItem("carteras", JSON.stringify(carteras));
        setCarteras([...carteras]);
        Swal.fire({
          icon: 'success',
          title: 'Transaccion realizada con exito!',
          showConfirmButton: false,
          timer: 1000
        })
      }
      }
    });
  }



  function handleDeleteTransaccion(index){
    Swal.fire({
      title: 'Desea eliminar esta transaccion?',
      text: "No podrás revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        carteras[indice].transacciones.splice(index,1)
        localStorage.setItem("carteras", JSON.stringify(carteras));
        setCarteras([...carteras]);
        Swal.fire(
          'Eliminado!',
          'Tu transaccion ha sido borrada.',
          'success'
        )
      }
    })
  }


  function handleUpdate(index){
    const indiceObjetoAEditar = arrayEnLocalStorage.findIndex(objeto => objeto.nombre === ruta);
    Swal.fire({
      title: 'Modificar una transaccion',
      html: `
      <form>
      <select name="tipo" id="tipo">
        <option value=${carteras[indiceObjetoAEditar].transacciones[index].tipo} disabled selected>${carteras[indiceObjetoAEditar].transacciones[index].tipo}</option>
        <option value="compra">Compra</option>
        <option value="venta">Venta</option>
      </select>

      <select name="criptomoneda" id="criptomoneda">
      <option value=${carteras[indiceObjetoAEditar].transacciones[index].criptomoneda} disabled selected>${carteras[indiceObjetoAEditar].transacciones[index].criptomoneda}</option>
      ${crypto.map((e) => `<option name=${e.name} value=${e.name}>${e.symbol.toUpperCase()} ${e.name}</option>`
      )}
      </select>
      <input type="number" id="cantidad" name="cantidad" placeholder="cantidad" min="0" value=${carteras[indiceObjetoAEditar].transacciones[index].cantidad}>Cantidad</input>
      <input type="number" id="price" name="precio" placeholder="precio" min="0" value=${carteras[indiceObjetoAEditar].transacciones[index].precio}>Precio US$</input>
      <input type="date" id="fecha" name="fecha" value=${carteras[indiceObjetoAEditar].transacciones[index].fecha}></input>
      </form>
      `,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Enviar'
    }).then((result) => {
      if (result.isConfirmed) {
        const type = document.getElementById('tipo').value;
        const currency = document.getElementById('criptomoneda').value;
        const quantity = document.getElementById('cantidad').value;
        const price = document.getElementById('price').value;
        const date = document.getElementById('fecha').value;

        const formValues = {
          tipo: type,
          criptomoneda: currency,
          cantidad: quantity,
          precio: price,
          total: quantity*price,
          fecha: date
        };
       
        carteras[indiceObjetoAEditar].transacciones[index] = formValues;
        localStorage.setItem("carteras", JSON.stringify(carteras));
        setCarteras([...carteras]);
        Swal.fire(
          'Actualizado!',
          'Tu transaccion ha sido modificada.',
          'success'
        )
      }
    });

  }
  
    return (
    <div>
      <button onClick={(e) => handleAdd()}>Agregar Transaccion</button>
      {/* <form onSubmit={handleSubmit}>
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
            </form> */}


      <div>
        <h1>Historial de transacciones</h1>
        { carteras[indice].transacciones.map((e,index) => 
        <div>
          <p>#{index}</p>
          <p>{e.tipo}</p>
          <p>{e.criptomoneda}</p>
          <p>{e.cantidad}</p>
          <p>{e.precio}</p>
          <p>Total:{e.total}</p>
          <p>{e.fecha}</p>
          <button onClick={(e) => handleUpdate(index)}>Modificar</button>
          <button onClick={(e) =>handleDeleteTransaccion(index)}>Eliminar</button>
        </div>)
    }
      </div>

    </div>
  )
}

export default Transacciones