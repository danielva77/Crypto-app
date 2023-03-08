import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import Swal from 'sweetalert2';

function NavBar({ onAddCartera }) {


  function handleClick() {
    Swal.fire({
      title: "Nombre de la cartera",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
    })
      .then(resultado => {
        if (resultado.value) {
          let newObject = {
            nombre: resultado.value,
            transacciones: []
          };
          onAddCartera(newObject);
          Swal.fire("Creado con exito!", "", "success").then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 1);
          });
        }
      });
  }
  return (
    <nav id="navbar" class="navbar navbar-expand-lg bg-body-tertiary bg-blue bg-dark">
      <div id="navbar-content" class="container-fluid bg-blue">
        <p class="navbar-brand text-center bg-blue">Crypto App</p>
        <button class="navbar-toggler text-bg-primary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon text-light"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto align-middle">
            <li class="nav-item text-center align-middle">
              <Link to="/" class="text-decoration-none bg-blue"><p class="nav-link active text-center text-light align-middle" id="navlink" aria-current="page">INICIO</p></Link>
            </li>
            <li class="nav-item text-center">
              <Link to="/mercado" class="text-decoration-none"><p class="nav-link active text-center text-light" id="navlink" aria-current="page">MERCADO</p></Link>
            </li>
            <li class="nav-item">
              <Link to="/carteras" class="text-decoration-none"><p class="nav-link active text-center text-light" id="navlink">MIS CARTERAS</p></Link>
            </li>
          </ul>
          <div class="text-center">
            <button class="m-1 align-content-center btn fw-bold bg-orange btn-header text-light" onClick={(e) => handleClick()}>Crear cartera</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar