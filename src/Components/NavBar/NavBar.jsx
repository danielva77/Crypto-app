import React from 'react'
import { Link } from 'react-router-dom'
import { FaMoon } from "react-icons/fa";
import "./NavBar.css"

function NavBar() {
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <p class="navbar-brand text-center">Crypto App</p>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item text-center">
        <Link to="/" class="text-decoration-none"><p class="nav-link active text-center" id="navlink" aria-current="page">Inicio</p></Link>
        </li>
        <li class="nav-item text-center">
        <Link to="/mercado" class="text-decoration-none"><p class="nav-link active text-center" id="navlink" aria-current="page">Mercado</p></Link>
        </li>
        <li class="nav-item">
          <Link to="/carteras" class="text-decoration-none"><p class="nav-link active text-center" id="navlink">Mis carteras</p></Link>
        </li>
      </ul>
        <div class="text-center">
        <button class="m-1 align-content-center">Crear cartera</button>
        </div>

        <div class="text-center"><FaMoon class="ms-1"/></div>
        
    </div>

  </div>
</nav>

    // <div>
    //     Acá un logo
    //     <Link to="/"><p>Inicio</p></Link>
    //     <Link to="/carteras"><p>Mis carteras</p></Link>
    //     <button class="m-1">Crear cartera</button>
    //     <FaMoon class="ms-3"/>

    // </div>
  )
}

export default NavBar