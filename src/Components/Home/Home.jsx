import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import "./Home.css"

function Home() {

  return (
    <div class="prueba">
      <header class="pb-5 overflow-hidden bg-grey">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 text-black text-center text-lg-start">
              <h1 class="display-1 fw-normal mt-5 text-black">Buenvenido a CriptoApp!</h1>
              <p class="my-4 lead fs-5 text-black">¡Bienvenido a nuestra aplicación de criptomonedas! Aquí podrás comprar, vender y almacenar tus criptos de manera segura y fácil. ¡Comencemos!</p>
              <a href="#sec-1"><button type="button" class="btn btn-green fw-bold mt-4 btn-header text-light">Explorar ahora!</button></a>
            </div>
            <div class="col-lg-6 phone-img d-none d-lg-flex justify-content-end gx-0 mt-5">
              <img src="https://cdn.pixabay.com/photo/2022/08/25/09/35/germany-7409782_1280.jpg" alt="imagen" />
            </div>
          </div>
        </div>
      </header>
      <section id="sec-1" data-testid="section-1" class="py-5 bg-dark">
        <div class="container my-3">
          <div class="row">
            <div class="col-md-4 text-center sec-1-item mb-5">
              <span class="d-flex align-items-center justify-content-center mx-auto text-black mb-4 circle-icon bg-white">
                <i class="far fa-heart fs-3">✓</i>
              </span>
              <p class="lead fw-bold text-light">Seguridad</p>
              <p class="fw-light mx-3 lh-lg text-light">Nuestra aplicación de criptomonedas se enfoca en la seguridad de tus activos digitales a través de billeteras y autenticación de dos factores donde podras operar con tranquilidad.</p>
            </div>
            <div class="col-md-4 text-center sec-1-item mb-5">
              <span class="d-flex align-items-center justify-content-center mx-auto text-black mb-4 circle-icon bg-white">
                <i class="far fa-flag fs-2">✓</i>
              </span>
              <p class="lead fw-bold text-light">Accesibilidad</p>
              <p class="fw-light mx-3 lh-lg text-light">Nuestra aplicación de criptomonedas está diseñada con una interfaz intuitiva y fácil de usar, para que cualquier persona pueda acceder y gestionar sus activos digitales.</p>
            </div>
            <div class="col-md-4 text-center sec-1-item mb-5">
              <span class="d-flex align-items-center justify-content-center mx-auto text-black mb-4 circle-icon bg-white">
                <i class="far fa-star fs-2">✓</i>
              </span>
              <p class="lead fw-bold text-light">Variedad</p>
              <p class="fw-light mx-3 lh-lg text-light">Nuestra aplicación de criptomonedas ofrece una amplia variedad de criptodivisas para que puedas diversificar tu portafolio de inversión y asegurarte de tener una cartera diversa.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sec-2" data-testid="section-2" class="py-5">
        <div class="container my-4">
          <div class="row gx-lg-5">
            <div class="col-lg-6 mb-5">
              <img src="https://cdn.pixabay.com/photo/2021/08/08/15/06/stock-market-6531146_1280.jpg" class="img-fluid" alt="imagen" />
            </div>
            <div class="col-lg-6">
              <h3>Analizá las tendencias</h3>
              <p class="text-muted fw-light lh-lg my-4">En nuestra aplicación podrás estar al tanto de las tendencias de precio de las criptomonedas. Podrás ver los movimientos del mercado y seguir la cotización de tus monedas favoritas en tiempo real. ¡No te pierdas la oportunidad de estar siempre informado!</p>
              <Link to="/mercado"><button type="button" class="btn btn-green mt-2">Ver mas</button></Link>
            </div>
          </div>
        </div>
      </section>

      <section id="sec-3" data-testid="section-3" class="py-5 text-black bg-blue">
        <div class="container my-4">
          <div class="row mb-5">
            <div class="col text-center">
              <h3 class="mb-4 text-light">Explore las características en detalle</h3>
              <p class="lh-lg fw-light pt-2 w-75 mx-auto text-light">Si estás buscando una aplicación de criptomonedas, debes conocer estas cuatro características esenciales para una experiencia de usuario satisfactoria.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 text-center text-sm-start mb-4">
              <div class="row">
                <div class="col-sm-2 d-sm-flex justify-content-sm-end">
                  <span class="d-flex align-items-center justify-content-center circle-icon bg-white text-green mx-sm-0 mx-auto mb-4">
                    <i class="fa fa-dot-circle fs-2">✓</i>
                  </span>
                </div>
                <div class="col-sm-10">
                  <h4 class="text-light">Actualizaciones</h4>
                  <p class="lh-lg text-light">Se actualiza constantemente para mejorar la experiencia del usuario y añadir nuevas características.</p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 text-center text-sm-start mb-4">
              <div class="row">
                <div class="col-sm-2 d-sm-flex justify-content-sm-end">
                  <span class="d-flex align-items-center justify-content-center circle-icon bg-white text-green mx-sm-0 mx-auto mb-4">
                    <i class="fa fa-cog fs-2">✓</i>
                  </span>
                </div>
                <div class="col-sm-10">
                  <h4 class="text-light">Integración</h4>
                  <p class="lh-lg text-light">Permite comprar y vender criptomonedas directamente desde la aplicación.</p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 text-center text-sm-start mb-4">
              <div class="row">
                <div class="col-sm-2 d-sm-flex justify-content-sm-end">
                  <span class="d-flex align-items-center justify-content-center circle-icon bg-white text-green mx-sm-0 mx-auto mb-4">
                    <i class="fa fa-tv fs-2">✓</i>
                  </span>
                </div>
                <div class="col-sm-10">
                  <h4 class="text-light">Monitorización</h4>
                  <p class="lh-lg text-light">Proporciona información en tiempo real sobre los precios y tendencias del mercado de criptomonedas.</p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 text-center text-sm-start mb-4">
              <div class="row">
                <div class="col-sm-2 d-sm-flex justify-content-sm-end">
                  <span class="d-flex align-items-center justify-content-center circle-icon bg-white text-green mx-sm-0 mx-auto mb-4">
                    <i class="fa fa-crop fs-2">✓</i>
                  </span>
                </div>
                <div class="col-sm-10">
                  <h4 class="text-light">Soporte al cliente</h4>
                  <p class="lh-lg text-light">Ofrece soporte al cliente a través de nuestro chatbox para resolver cualquier problema rápidamente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="sec-5" class="py-5">
        <div class="container my-2">
          <div class="row mb-2">
            <div class="col text-center">
              <h3 class="mb-1">Aprendé a identificar tendencias</h3>
            </div>
          </div>

          <div class="row">
            <iframe width="560" height="500" src="https://www.youtube.com/embed/VlDQdFA7-7c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
        </div>
      </section>

      <section id="sec-6" class="py-5">
        <div class="container my-4">
          <div class="row mb-5">
            <div class="col-12 text-center text-black">
              <h3 class="mb-4 text-light">Estadísticas</h3>
              <p class="lh-lg fw-light pt-2 w-75 mx-auto text-light">Sabemos lo importante que es tener confianza en los productos que elegis, por eso te contamos nuestras estadisticas!</p>
            </div>
          </div>
          <div class="row text-uppercase text-center text-black">
            <div class="col-md-6 col-lg-3 mb-5">
              <div class="circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
                200+
              </div>
              <h6 class="text-light">criptomonedas</h6>
            </div>

            <div class="col-md-6 col-lg-3 mb-5">
              <div class="circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
                50+
              </div>
              <h6 class="text-light">clientes felices</h6>
            </div>

            <div class="col-md-6 col-lg-3 mb-5">
              <div class="circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
                90%
              </div>
              <h6 class="text-light">transacciones</h6>
            </div>

            <div class="col-md-6 col-lg-3 mb-5">
              <div class="circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
                9/10
              </div>
              <h6 class="text-light">nos recomiendan</h6>
            </div>
          </div>
        </div>
      </section>

      <section id="sec-7" class="py-5">
        <div class="container my-4">
          <div class="row gx-md-5">
            <div class="col-md-6 my-3">
              <div class="card text-center">
                <img class="card-img-top" src="https://cdn.pixabay.com/photo/2017/08/15/08/53/bitcoin-2643159_1280.jpg" alt="imagen" />
                <div class="card-body py-5">
                  <h4 class="card-title">Maneja tus carteras en un solo lugar</h4>
                  <p class="card-text py-3 lh-lg text-muted fw-light">Con nuestra aplicación, puedes manejar todas las criptomonedas que desees. Administra tus carteras digitales de forma sencilla y segura desde la comodidad de tu dispositivo móvil.</p>
                  <Link to="carteras"><button class="btn btn-green">Empezar!</button></Link>
                </div>
              </div>
            </div>

            <div class="col-md-6 my-3">
              <div class="card text-center">
                <img class="card-img-top" src="https://cdn.pixabay.com/photo/2019/12/01/05/02/keyboard-4664732_1280.jpg" alt="imagen" />
                <div class="card-body py-5">
                  <h4 class="card-title">Estamos para ayudarte</h4>
                  <p class="card-text py-3 lh-lg text-muted fw-light">En la parte inferior de la pantalla de nuestra aplicación puedes utilizar el chatbox para hacer cualquier consulta que necesites. ¡Estamos aquí para ayudarte!</p>
                  <button class="btn btn-green">Conversar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home