import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../Footer/Footer';
import "./Transacciones.css"
import { Link } from 'react-router-dom';

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
        ${crypto.map((e) => `<option name=${e.name} value=${e.name}>${e.symbol.toUpperCase()} ${e.name}→${e.current_price}US$</option>`
        )}
        </select>
        <input type="number" id="cantidad" name="cantidad" placeholder="cantidad" min="0" value="1">Cantidad</input>
        <input type="number" id="price" name="precio" placeholder="Precio unitario US$" min="0"></input>
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
      ${crypto.map((e) => `<option name=${e.name} value=${e.name}>${e.symbol.toUpperCase()} ${e.name}→${e.current_price}</option>`
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
  const titles = ["#","Tipo", "Criptomoneda", "cantidad", "Precio USD", "Total USD","Fecha", "Modificar", "Eliminar"];
    return (
    <div>
      <div class="container">
      <div>
        
        <h1 class="fw-bold">{carteras[indice].nombre}</h1>
        <button onClick={(e) => handleAdd()} type = "button" class = "btn btn-green mt-2 mb-4">Agregar Transaccion</button>
        <h5>Historial de transacciones</h5>
        
      </div>
      <div class="divCripto">
      <table className="table mt-4 table-dark table-hover">
        <thead>
          <tr class="fw-bold text-light">
            {titles.map((title, i) => (
              <td key={i}>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
        { carteras[indice].transacciones.map((e,index) => 
        <tr>
          <td className="text-muted">{index}</td>
          <td className={e.tipo === "compra"? "text-success" : "text-danger"}><span>{e.tipo}</span></td>
          <td><span>{e.criptomoneda}</span></td>
          <td className={e.tipo === "compra"? "text-success" : "text-danger"}><span>{e.tipo === "compra"? e.cantidad : -e.cantidad}</span></td>
          <td><span>{e.precio}</span></td>
          <td><span>{e.total}</span></td>
          <td><span>{e.fecha}</span></td>
          <td><button onClick={(e) => handleUpdate(index)} class = "btn1-green">Modificar</button></td>
          <td><button onClick={(e) =>handleDeleteTransaccion(index)} class = "btn1-green">Eliminar</button></td>
        </tr>
        )
    }
        </tbody>
      </table>
      <Link to="/carteras"><button type = "button" class = "btn btn-green mt-2">Volver</button></Link>
      </div>
      
      </div>
      
      <Footer/>
    </div>
  )
}

export default Transacciones