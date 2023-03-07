import React, { useState, useEffect }from 'react'
import Footer from '../Footer/Footer'
import "./Home.css"
import Swal from 'sweetalert2'

function Home() {

  window.addEventListener('scroll', function() {
    var scrollTop = document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight;
    
    if (scrollTop + window.innerHeight >= scrollHeight) {
      // el usuario ha llegado al final de la página, llame a su función aquí
      miFuncion();
    }
  });
  
  function miFuncion() {
    console.log("LLEGOALFINAL")
  Swal.fire({
    icon: 'info',
    html:
      'Si tenes dudas adicionales comunicate con nuestro chatbox',
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Entendido!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
  })}

  return (
    <div>
      <header class = "pb-5 overflow-hidden bg-green">
            <div class = "container">
                {/* <div class = "row py-5">
                    {/* <div class = "col-sm-6 text-lg-start">
                        <p class = "navbar-brand text-black fs-1">
                            Destiny <i class = "fa fa-cube"></i>
                        </p>
                    </div> */}
                    {/* <div class = "col-sm-6 d-none d-md-flex text-black align-items-center nav-icons justify-content-end">
                        <p class = "fw-bold mb-0">Available for:</p>
                        <a href = "#">
                            <i class = "fa fa-robot text-black px-2"></i>
                        </a>
                        <a href = "#">
                            <i class = "fab fa-apple text-black px-2"></i>
                        </a>
                        <a href = "#">
                            <i class = "fab fa-windows text-black px-2"></i>
                        </a>
                    </div> */}
                {/* </div> */}

                <div class = "row">
                    <div class = "col-lg-6 text-black text-center text-lg-start">
                        <h1 class = "display-1 fw-normal mt-5">Explore our Application!</h1>
                        <p class = "my-4 lead fs-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora possimus quam aperiam hic. Consequatur eum atque molestias exercitationem quos!</p>
                        <button type = "button" class = "btn fw-bold text-black mt-4 btn-header">Explore now!</button>
                    </div>
                    <div class = "col-lg-6 phone-img d-none d-lg-flex justify-content-end gx-0 mt-5">
                        <img src = "https://cdn.pixabay.com/photo/2022/06/21/08/57/male-7275449_1280.jpg"/>
                    </div>
                </div>
            </div>
        </header>
      <section id = "sec-1" class = "py-5 bg-grey">
           <div class = "container my-3">
               <div class = "row">
                   <div class = "col-md-4 text-center sec-1-item mb-5">
                        <span class = "d-flex align-items-center justify-content-center mx-auto text-black mb-4 circle-icon">
                            <i class = "far fa-heart fs-3"></i>
                        </span>
                        <p class = "lead fw-bold">Quality</p>
                        <p class = "fw-light mx-3 lh-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ducimus dolorum necessitatibus veritatis molestias exercitationem non earum quod dicta temporibus architecto.</p>
                   </div>
                   <div class = "col-md-4 text-center sec-1-item mb-5">
                        <span class = "d-flex align-items-center justify-content-center mx-auto text-black mb-4 circle-icon">
                            <i class = "far fa-flag fs-2"></i>
                        </span>
                        <p class = "lead fw-bold">Reliability</p>
                        <p class = "fw-light mx-3 lh-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ducimus dolorum necessitatibus veritatis molestias exercitationem non earum quod dicta temporibus.</p>
                    </div>
                    <div class = "col-md-4 text-center sec-1-item mb-5">
                        <span class = "d-flex align-items-center justify-content-center mx-auto text-black mb-4 circle-icon">
                            <i class = "far fa-star fs-2"></i>
                        </span>
                        <p class = "lead fw-bold">Affordability</p>
                        <p class = "fw-light mx-3 lh-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ducimus dolorum necessitatibus veritatis molestias exercitationem non earum quod dicta temporibus.</p>
                    </div>
               </div>
           </div>
       </section>

       <section id = "sec-2" class = "py-5">
           <div class = "container my-4">
               <div class = "row gx-lg-5">
                   <div class = "col-lg-6 mb-5">
                        <img src = "images/section-2-bg.jpg" class = "img-fluid"/>
                   </div>
                   <div class = "col-lg-6">
                       <h3>Our product will amaze you</h3>
                       <p class = "text-muted fw-light lh-lg my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sequi iste accusamus blanditiis sit ex voluptates et qui iusto fugit, alias quod eveniet eum quidem culpa odio tenetur ea? Earum iste maiores vero tempora aperiam, quia perspiciatis eligendi nihil odit debitis eum, itaque dolorum cumque ad? Id expedita fugiat ut!</p>
                       <button type = "button" class = "btn btn-green mt-2">Read more</button>
                   </div>
               </div>
           </div>
       </section>

       <section id = "sec-3" class = "py-5 text-black bg-green">
           <div class = "container my-4">
               <div class = "row mb-5">
                   <div class = "col text-center">
                       <h3 class = "mb-4">Browse the features in detail</h3>
                       <p class = "lh-lg fw-light pt-2 w-75 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, alias a natus deleniti neque ad cupiditate dicta explicabo nemo vel?</p>
                   </div>
               </div>
               <div class = "row">
                   <div class = "col-lg-6 text-center text-sm-start mb-4">
                       <div class = "row">
                            <div class = "col-sm-2 d-sm-flex justify-content-sm-end">
                                <span class = "d-flex align-items-center justify-content-center circle-icon bg-white text-green mx-sm-0 mx-auto mb-4">
                                    <i class = "fa fa-dot-circle fs-2"></i>
                                </span>
                            </div>
                            <div class = "col-sm-10">
                                <h4>100% Vectors</h4>
                                <p class = "lh-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptatum ab a inventore neque. Tempora?</p>
                            </div>
                       </div>
                   </div>

                   <div class = "col-lg-6 text-center text-sm-start mb-4">
                       <div class = "row">
                            <div class = "col-sm-2 d-sm-flex justify-content-sm-end">
                                <span class = "d-flex align-items-center justify-content-center circle-icon bg-white text-green mx-sm-0 mx-auto mb-4">
                                    <i class = "fa fa-cog fs-2"></i>
                                </span>
                            </div>
                            <div class = "col-sm-10">
                                <h4>Preference Panel</h4>
                                <p class = "lh-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptatum ab a inventore neque. Tempora?</p>
                            </div>
                       </div>
                   </div>

                   <div class = "col-lg-6 text-center text-sm-start mb-4">
                       <div class = "row">
                            <div class = "col-sm-2 d-sm-flex justify-content-sm-end">
                                <span class = "d-flex align-items-center justify-content-center circle-icon bg-white text-green mx-sm-0 mx-auto mb-4">
                                    <i class = "fa fa-tv fs-2"></i>
                                </span>
                            </div>
                            <div class = "col-sm-10">
                                <h4>Retina Ready</h4>
                                <p class = "lh-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptatum ab a inventore neque. Tempora?</p>
                            </div>
                       </div>
                   </div>

                   <div class = "col-lg-6 text-center text-sm-start mb-4">
                       <div class = "row">
                            <div class = "col-sm-2 d-sm-flex justify-content-sm-end">
                                <span class = "d-flex align-items-center justify-content-center circle-icon bg-white text-green mx-sm-0 mx-auto mb-4">
                                    <i class = "fa fa-crop fs-2"></i>
                                </span>
                            </div>
                            <div class = "col-sm-10">
                                <h4>Pixel Perfect</h4>
                                <p class = "lh-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptatum ab a inventore neque. Tempora?</p>
                            </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>

       <section id = "sec-4" class = "py-5">
        <div class = "container my-4">
            <div class = "row gx-lg-5">
                <div class = "col-lg-6 mb-5">
                     <h3>Fully Responsive!</h3>
                    <p class = "text-muted fw-light lh-lg my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sequi iste accusamus blanditiis sit ex voluptates et qui iusto fugit, alias quod eveniet eum quidem culpa odio tenetur ea? Earum iste maiores vero tempora aperiam, quia perspiciatis eligendi nihil odit debitis eum, itaque dolorum cumque ad? Id expedita fugiat ut!</p>
                    <p class = "text-muted fw-light lh-lg my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet error id qui labore dolorem omnis?</p>
                    <button type = "button" class = "btn btn-green mt-2">Read more</button>
                </div>
                <div class = "col-lg-6">
                    <img src = "images/section-4-bg.jpg" class = "img-fluid"/>
                </div>
            </div>
        </div>
    </section>

    <section id = "sec-5" class = "py-5">
        <div class = "container my-4">
            <div class = "row mb-5">
                <div class = "col text-center">
                    <h3 class = "mb-4">Promotional Video</h3>
                    {/* <p class = "lh-lg fw-light pt-2 w-75 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, alias a natus deleniti neque ad cupiditate dicta explicabo nemo vel?</p> */}
                </div>
            </div>

            <div class = "row">
            <iframe width="560" height="500" src="https://www.youtube.com/embed/VlDQdFA7-7c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
        </div>
    </section>

    <section id = "sec-6" class = "py-5">
        <div class = "container my-4">
            <div class = "row mb-5">
                <div class = "col-12 text-center text-black">
                    <h3 class = "mb-4">App Statistics</h3>
                    <p class = "lh-lg fw-light pt-2 w-75 mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci aut nemo exercitationem qui numquam aliquid natus explicabo, deserunt repudiandae sit in animi cupiditate rem quia?</p>
                </div>
            </div>
            <div class = "row text-uppercase text-center text-black">
                <div class = "col-md-6 col-lg-3 mb-5">
                    <div class = "circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
                        200+
                    </div>
                    <h6>projects</h6>
                </div>

                <div class = "col-md-6 col-lg-3 mb-5">
                    <div class = "circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
                        50+
                    </div>
                    <h6>happy clients</h6>
                </div>

                <div class = "col-md-6 col-lg-3 mb-5">
                    <div class = "circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
                        90%
                    </div>
                    <h6>repeat </h6>
                </div>

                <div class = "col-md-6 col-lg-3 mb-5">
                    <div class = "circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
                        9/10
                    </div>
                    <h6>average rating</h6>
                </div>
            </div>
        </div>
    </section>

    <section id = "sec-7" class = "py-5">
        <div class = "container my-4">
            <div class = "row gx-md-5">
                <div class = "col-md-6 my-3">
                    <div class = "card text-center">
                        <img class = "card-img-top" src = "images/blog-1-img.jpg"/>
                        <div class = "card-body py-5">
                            <h4 class = "card-title">How to deal with Clients</h4>
                            <p class = "card-text py-3 lh-lg text-muted fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis libero reprehenderit, enim iure debitis doloremque nulla perspiciatis natus impedit obcaecati molestias sunt voluptate sed ipsa?</p>
                            <a href = "#" class = "btn btn-green">Learn more</a>
                        </div>
                    </div>
                </div>

                <div class = "col-md-6 my-3">
                    <div class = "card text-center">
                        <img class = "card-img-top" src = "images/blog-2-img.jpg"/>
                        <div class = "card-body py-5">
                            <h4 class = "card-title">Best ideas for task completion</h4>
                            <p class = "card-text py-3 lh-lg text-muted fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis libero reprehenderit, enim iure debitis doloremque nulla perspiciatis natus impedit obcaecati molestias sunt voluptate sed ipsa?</p>
                            <a href = "#" class = "btn btn-green">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id = "sec-8" class = "py-5 bg-grey">
        <div class = "container my-4">
            <div class = "row">
                <div class = "col-12 text-center">
                    <h3 class = "mb-5">Testimonials</h3>
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
                                    <img src = "images/tes-img-1.jpg" class = "col-lg-3 mx-auto rounded-circle"/>
                                    <div class = "py-4 col-lg-9">
                                        <p class = "text-muted lh-lg fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente exercitationem natus, fugit fuga ducimus nihil? Corporis, voluptatibus repudiandae. At rem consectetur, nemo nisi aperiam iusto!</p>
                                        <p class = "text-green">Christine Walter, LA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class = "carousel-item">
                            <div class = "col-12 row mx-auto">
                                <div class = "row text-center text-lg-start">
                                    <img src = "images/tes-img-2.jpg" class = "col-lg-3 mx-auto rounded-circle"/>
                                    <div class = "py-4 col-lg-9">
                                        <p class = "text-muted lh-lg fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente exercitationem natus, fugit fuga ducimus nihil? Corporis, voluptatibus repudiandae. At rem consectetur, nemo nisi aperiam iusto!</p>
                                        <p class = "text-green">Christine Walter, LA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class = "carousel-item">
                            <div class = "col-12 row mx-auto">
                                <div class = "row text-center text-lg-start">
                                    <img src = "images/tes-img-3.jpg" class = "col-lg-3 mx-auto rounded-circle"/>
                                    <div class = "py-4 col-lg-9">
                                        <p class = "text-muted lh-lg fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente exercitationem natus, fugit fuga ducimus nihil? Corporis, voluptatibus repudiandae. At rem consectetur, nemo nisi aperiam iusto!</p>
                                        <p class = "text-green">Christine Walter, LA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id = "sec-9" class = "py-5">
        <div class = "container my-5">
            <div class = "row">
                <div class = "col-12 text-center">
                    <h3 class = "mb-4">Pricing</h3>
                </div>
            </div>

            <div class = "row px-3 my-4">
                <div class = "col-lg-4 pricing-item bg-green text-black text-center p-0 mb-5 mx-auto">
                    <div class = "pricing-title text-uppercase py-3 fs-5">trial</div>
                    <div class = "pricing-price fs-1 fw-bold">Free</div>
                    <ul class = "px-0">
                        <li>Bandwidth</li>
                        <li>Disk Space</li>
                        <li>Storage</li>
                    </ul>
                    <div class = "pricing-footer pt-3 pb-5">
                        <button type = "button" class = "btn bg-white text-green">Add to Cart</button>
                    </div>
                </div>

                <div class = "col-lg-4 pricing-item bg-green text-black text-center p-0 mb-5 mx-auto">
                    <div class = "pricing-title text-uppercase py-3 fs-5">trial</div>
                    <div class = "pricing-price fs-1 fw-bold">$29<sup>99</sup></div>
                    <ul class = "px-0">
                        <li>Bandwidth</li>
                        <li>Disk Space</li>
                        <li>Storage</li>
                    </ul>
                    <div class = "pricing-footer pt-3 pb-5">
                        <button type = "button" class = "btn bg-white text-green">Add to Cart</button>
                    </div>
                </div>

                <div class = "col-lg-4 pricing-item bg-green text-black text-center p-0 mb-5 mx-auto">
                    <div class = "pricing-title text-uppercase py-3 fs-5">trial</div>
                    <div class = "pricing-price fs-1 fw-bold">$49<sup>99</sup></div>
                    <ul class = "px-0">
                        <li>Bandwidth</li>
                        <li>Disk Space</li>
                        <li>Storage</li>
                    </ul>
                    <div class = "pricing-footer pt-3 pb-5">
                        <button type = "button" class = "btn bg-white text-green">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class = "bg-green">
        <div class = "container">
            <div class = "row pt-4 text-black">
                <div class = "col-md-6 text-center text-md-start">
                    <p><span class = "fw-bold">Destiny &copy;</span> Copyright 2021</p>
                </div>
                <div class = "col-md-6 d-flex justify-content-center justify-content-md-end">
                    <ul class = "d-flex p-0">
                        <li><i class = "fab fa-facebook-f px-2"></i></li>
                        <li><i class = "fab fa-twitter px-2"></i></li>
                        <li><i class = "fab fa-instagram px-2"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

      <Footer/>
    </div>
  )
}

export default Home