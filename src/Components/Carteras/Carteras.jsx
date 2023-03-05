import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer'
import Swal from 'sweetalert2';

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
        )
      }
    })
  }


  return (
    <div>
      <h1>Carteras</h1>
      {carteras.length > 0 ? carteras.map((e,index) => 
        <div key={index+1}>
          <h1>nombre: {e.nombre}</h1>
          <button onClick={() => handleEdit(e.nombre)}>Editar</button>
          <button onClick={() => handleDelete(e.nombre)}>Eliminar</button>
          <button>Detalles</button>
        </div>) : <h1>Aun no tienes carteras creadas</h1>
      }


      <Footer/>
    </div>
  )
}

export default Carteras