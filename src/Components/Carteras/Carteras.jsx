import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./Carteras.css"

function Carteras() {

  const [carteras, setCarteras] = useState(() => {
    const arrayEnLocalStorage = JSON.parse(localStorage.getItem('carteras')) || [];
    return arrayEnLocalStorage;
  });
  console.log("CARTERAS",carteras)
const arrayEnLocalStorage = JSON.parse(localStorage.getItem("carteras"));
useEffect(() => {
  localStorage.setItem("carteras", JSON.stringify(carteras));
}, [carteras]);



function handleEdit(e){
  Swal.fire({
    title: "Cambiar el nombre",
    input: "text",
    showCancelButton: true,
    confirmButtonText: "Guardar",
    cancelButtonText: "Cancelar",
})
.then(resultado => {
  if (resultado.value) {
    let newObject = resultado.value
    const indiceObjetoAEditar = arrayEnLocalStorage.findIndex(objeto => objeto.nombre === e);
    carteras[indiceObjetoAEditar].nombre = newObject;
    localStorage.setItem("carteras", JSON.stringify(carteras));
    setCarteras([...carteras]);
    Swal.fire("Modificado con exito!", "", "success");
  }
})}

  function handleDelete(e){
    Swal.fire({
      title: '¿Seguro de eliminar esta cartera completa?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevoArray = carteras.filter(objeto => objeto.nombre !== e);
        localStorage.setItem("carteras", JSON.stringify(nuevoArray));
        setCarteras([...nuevoArray]);
        Swal.fire(
          'Eliminado con exito!',
          'Tu cartera ha sido eliminada.',
          'success'
        ).then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 5);
        })
      }
    })
  }

//   let resultado = carteras.map(cartera => {
//     let criptomonedas = {};
//     let precioTotal = 0;
//     for (let transaccion of cartera.transacciones) {
//         let criptomoneda = transaccion.criptomoneda;
//         let cantidad = parseInt(transaccion.cantidad);
//         let precio= parseFloat(transaccion.precio)
//         if (transaccion.tipo === 'compra') {
//             criptomonedas[criptomoneda] = (criptomonedas[criptomoneda] || 0) + cantidad;
            
//             precioTotal += cantidad * parseFloat(transaccion.precio); 
//         } else if (transaccion.tipo === 'venta') {
//             criptomonedas[criptomoneda] = (criptomonedas[criptomoneda] || 0) - cantidad;
//             precioTotal -= cantidad * parseFloat(transaccion.precio); 
//         }
//     }
//     let total = 0;
//     for (let cripto in criptomonedas) {
//         total += criptomonedas[cripto];
//     }
//     return {
//         nombre: cartera.nombre,
//         criptomonedas: [criptomonedas],
//         total: total,
//         precioTotal: precioTotal
//     };
// });
// console.log("AAAAA",resultado)





// let criptomonedas = {};

// carteras.forEach((cartera) => {
//   let resultado2 = [];
//   cartera.transacciones.forEach((transaccion) => {

//     if (transaccion.tipo === "compra") {
//       if (transaccion.criptomoneda in criptomonedas) {
//         criptomonedas[transaccion.criptomoneda] += parseInt(transaccion.cantidad);
//       } else {
//         criptomonedas[transaccion.criptomoneda] = parseInt(transaccion.cantidad);
//       }
//     } else {
//       criptomonedas[transaccion.criptomoneda] -= parseInt(transaccion.cantidad);
//     }
//     for (const [criptomoneda, cantidad] of Object.entries(criptomonedas)) {
//       resultado2.push({criptomoneda, "cantidad total": cantidad.toString()});
//     }console.log("TOMAUNMATE",resultado2);
//   });
  


// });


let resultado5 = [];
for (let cartera of carteras) {
  let activos = {};
  for (let transaccion of cartera.transacciones) {
    if (!(transaccion.criptomoneda in activos)) {
      activos[transaccion.criptomoneda] = {
        cantidad: 0,
        total: 0
      };
    }
    if (transaccion.tipo === 'compra') {
      activos[transaccion.criptomoneda].cantidad += Number(transaccion.cantidad);
      activos[transaccion.criptomoneda].total += Number(transaccion.total);
    } else if (transaccion.tipo === 'venta') {
      activos[transaccion.criptomoneda].cantidad -= Number(transaccion.cantidad);
      activos[transaccion.criptomoneda].total -= Number(transaccion.total);
    }
  }
  let activosArray = [];
  let totalActivos = 0;
  for (let criptomoneda in activos) {
    let cantidad = activos[criptomoneda].cantidad;
    let total = activos[criptomoneda].total;
    activosArray.push({
      criptomoneda,
      cantidad,
      total
    });
    totalActivos += total;
  }
  resultado5.push({
    nombre: cartera.nombre,
    activos: activosArray,
    totalActivos
  });
}

  return (
    <div>
      <section id = "sec-8" class = "py-5 bg-grey">
        <div class = "container my-4">
            <div class = "row">
                <div class = "col-12 text-center">
                    <h3 class = "mb-5">Manejá tus carteras</h3>
                </div>
            </div>

            <div class = "row">
                <div id = "carouselInd" class = "carousel slide" data-bs-ride = "carousel">
                    <div class = "carousel-indicators">
                        <button type = "button" data-bs-target = "#carouselInd" data-bs-slide-to = "0" class = "active bg-green"></button>
                        <button type = "button" data-bs-target = "#carouselInd" data-bs-slide-to = "1" class = "bg-green"></button>
                        <button type = "button" data-bs-target = "#carouselInd" data-bs-slide-to = "2" class = "bg-green"></button>
                    </div>

                    <div class = "carousel-inner">
                        <div class = "carousel-item active">
                            <div class = "col-12 row mx-auto">
                                <div class = "row text-center text-lg-start">
                                    {/* <img src = "images/tes-img-1.jpg" class = "col-lg-3 mx-auto rounded-circle"/> */}
                                    <div class = "py-4 col-lg-9">
                                        <p class = "text-muted lh-lg fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente exercitationem natus, fugit fuga ducimus nihil? Corporis, voluptatibus repudiandae. At rem consectetur, nemo nisi aperiam iusto!</p>
                                        <p class = "text-green">HACE TUS TRANSACCIONES</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class = "carousel-item">
                            <div class = "col-12 row mx-auto">
                                <div class = "row text-center text-lg-start">
                                    {/* <img src = "images/tes-img-2.jpg" class = "col-lg-3 mx-auto rounded-circle"/> */}
                                    <div class = "py-4 col-lg-9">
                                        <p class = "text-muted lh-lg fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente exercitationem natus, fugit fuga ducimus nihil? Corporis, voluptatibus repudiandae. At rem consectetur, nemo nisi aperiam iusto!</p>
                                        <p class = "text-green">EDITÁ</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class = "carousel-item">
                            <div class = "col-12 row mx-auto">
                                <div class = "row text-center text-lg-start">
                                    {/* <img src = "images/tes-img-3.jpg" class = "col-lg-3 mx-auto rounded-circle"/> */}
                                    <div class = "py-4 col-lg-9">
                                        <p class = "text-muted lh-lg fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente exercitationem natus, fugit fuga ducimus nihil? Corporis, voluptatibus repudiandae. At rem consectetur, nemo nisi aperiam iusto!</p>
                                        <p class = "text-green">ELIMINÁ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <div class="container mb-5">
            {carteras.length > 0 ? carteras.map((e,index) => 
              <div class="row col-md-10 m-5 justify-content-center purple-bg-color">
                <div class="row">
                    <div class="col-md-5 col-sm-6">
                        <div class="p-4 d-flex flex-column purple-bg-color round-corner">
                            <span class="text-uppercase font-30 weight-700 white-color-2">{e.nombre}</span>
                            <span class="font-28 weight-500 white-color mt-4">Total US$ {resultado5[index].totalActivos.toFixed(2)}</span>
                            
                            <div class="d-flex flex-row justify-content-between mt-4">
                                <div class="d-flex flex-column">
                                    {/* <span class="font-16 weight-600 white-color">$3,742.00</span>
                                    <span class="font-12 weight-300 white-color-2">Income</span> */}
                                </div>
                                <div class="d-flex flex-column">
                                  {resultado5[index].activos.map((e) => <span class="font-15 weight-500 white-color">{e.criptomoneda} | cantidad {e.cantidad} | {e.total} US$</span>)}
                                </div>
                            </div>
                            <div class="d-flex flex-row mt-4 mb-4">
                                <button class="flex-grow-1 me-1 py-2 text-uppercase font-12 weight-700 purple-color-2 grey-bg-color" onClick={() => handleEdit(e.nombre)}>Editar cartera</button>
                                <button class="flex-grow-1 me-1 py-2 text-uppercase font-12 weight-700 purple-color-2 grey-bg-color" onClick={() => handleDelete(e.nombre)}>Eliminar cartera</button>
                                {/* <Link to={"/transacciones/"+e.nombre}><button class="flex-grow-1 ms-1 py-2 text-uppercase font-12 weight-700 white-color orange-bg-color">Hacer una transaccion</button></Link> */}
                            </div >
                            <div class="justify-content-center"><Link to={"/transacciones/"+e.nombre}><button class="flex-grow-1 ms-1 py-2 text-uppercase font-12 weight-700 white-color orange-bg-color">Hacer una transaccion</button></Link></div>
                            
                        </div>
                    </div>
                  </div>
                  </div>) : <h1 class="text-center">Aun no tienes carteras creadas</h1>}
    </div>
    <div class="margingeneral"></div>

    <Footer/>        
    </div>
  )
}

export default Carteras