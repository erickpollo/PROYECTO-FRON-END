import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css";
import "./style.css"; // tu hoja de estilos personalizada

function Home() {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-light pt-3 d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <p>
                  <i className="fa fa-envelope mr-2"></i>Contacto@ViajaFacil.com
                </p>
                <p className="text-body px-3">|</p>
                <p>
                  <i className="fa fa-phone-alt mr-2"></i>+57 313 8804769
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <a className="text-primary px-3" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="text-primary px-3" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="text-primary px-3" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="text-primary pl-3" href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid position-relative nav-bar p-0">
        <div
          className="container-lg position-relative p-0 px-lg-3"
          style={{ zIndex: 9 }}
        >
          <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <img
                src="img/Logo1.png"
                alt="Logo"
                style={{ height: "45px", marginRight: "10px" }}
              />
              <h1 className="m-0 text-primary">
                <span className="text-dark">Viaja</span>Fácil
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between px-3"
              id="navbarCollapse"
            >
              <div className="navbar-nav ml-auto py-0">
                <a href="index.html" className="nav-item nav-link active">
                  Inicio
                </a>
                <a href="about.html" className="nav-item nav-link">
                  Sobre
                </a>
                <a href="service.html" className="nav-item nav-link">
                  Servicios
                </a>
                <a href="package.html" className="nav-item nav-link">
                  Opciones de Viaje
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Detalles
                  </a>
                  <div className="dropdown-menu border-0 rounded-0 m-0">
                    <a href="blog.html" className="dropdown-item">
                      Blog Grid
                    </a>
                    <a href="single.html" className="dropdown-item">
                      Blog Detail
                    </a>
                    <a href="destination.html" className="dropdown-item">
                      Destination
                    </a>
                    <a href="guide.html" className="dropdown-item">
                      Travel Guides
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                      Testimonial
                    </a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">
                  Contacto
                </a>
                <a href="pagoseguro.html" className="nav-item nav-link">
                  Pago Seguro
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}

      {/* Carousel Start */}
      <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="text-white text-uppercase mb-md-3">
                    Tours & Viajes
                  </h4>
                  <h1 className="display-3 text-white mb-md-4">
                    Descubramos el Mundo Juntos
                  </h1>
                  <a href="#" className="btn btn-primary py-md-3 px-md-5 mt-2">
                    Buscar
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="text-white text-uppercase mb-md-3">
                    Tours & Viajes
                  </h4>
                  <h1 className="display-3 text-white mb-md-4">
                    Descubre lugares increibles con nosotros
                  </h1>
                  <a href="#" className="btn btn-primary py-md-3 px-md-5 mt-2">
                    Buscar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#header-carousel"
            data-slide="prev"
          >
            <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
              <span className="carousel-control-prev-icon mb-n2"></span>
            </div>
          </a>
          <a
            className="carousel-control-next"
            href="#header-carousel"
            data-slide="next"
          >
            <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
              <span className="carousel-control-next-icon mb-n2"></span>
            </div>
          </a>
        </div>
      </div>
      {/* Carousel End */}

      {/* Booking Start */}
      <div className="container-fluid booking mt-5 pb-5">
        <div className="container pb-5">
          <div className="bg-light shadow" style={{ padding: "30px" }}>
            <div className="row align-items-center" style={{ minHeight: "60px" }}>
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-3">
                    <div className="mb-3 mb-md-0">
                      <select className="custom-select px-4" style={{ height: "47px" }}>
                        <option defaultValue>Origen</option>
                        <option value="1">Cartagena</option>
                        <option value="2">Barranquilla</option>
                        <option value="3">Medellin</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3 mb-md-0">
                      <div className="date" id="date1" data-target-input="nearest">
                        <input
                          type="text"
                          className="form-control p-4 datetimepicker-input"
                          placeholder="Fecha Ida"
                          data-target="#date1"
                          data-toggle="datetimepicker"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3 mb-md-0">
                      <div className="date" id="date2" data-target-input="nearest">
                        <input
                          type="text"
                          className="form-control p-4 datetimepicker-input"
                          placeholder="Fecha Vuelta"
                          data-target="#date2"
                          data-toggle="datetimepicker"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3 mb-md-0">
                      <select className="custom-select px-4" style={{ height: "47px" }}>
                        <option defaultValue>Destino</option>
                        <option value="1">Cali</option>
                        <option value="2">Villavicencio</option>
                        <option value="3">Bucaramanga</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-primary btn-block"
                  type="submit"
                  style={{ height: "47px", marginTop: "-2px" }}
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking End */}

      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5"
        style={{ marginTop: "90px" }}
      >
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <a href="#" className="navbar-brand">
              <h1 className="text-primary">
                <span className="text-white">Viaja</span>Fácil
              </h1>
            </a>
            <p>
              Somos una agencia que busca hacer tus viajes mas faciles y
              especiales para todos ustedes
            </p>
            <h6
              className="text-white text-uppercase mt-4 mb-3"
              style={{ letterSpacing: "5px" }}
            >
              Siguenos
            </h6>
            <div className="d-flex justify-content-start">
              <a className="btn btn-outline-primary btn-square mr-2" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-primary btn-square mr-2" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-primary btn-square mr-2" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-outline-primary btn-square" href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: "5px" }}
            >
              Nuestros Servicios
            </h5>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Sobre
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Services
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Opciones de Viaje
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Guias
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Testimonios
              </a>
              <a className="text-white-50" href="#">
                <i className="fa fa-angle-right mr-2"></i>Blog
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: "5px" }}
            >
              Contáctanos
            </h5>
            <p>
              <i className="fa fa-map-marker-alt mr-2"></i>Carrera 30 57-36,
              Bogotá, COL
            </p>
            <p>
              <i className="fa fa-phone-alt mr-2"></i>+57 313 8804769
            </p>
            <p>
              <i className="fa fa-envelope mr-2"></i>Contacto@ViajaFácil.com
            </p>
            <h6
              className="text-white text-uppercase mt-4 mb-3"
              style={{ letterSpacing: "5px" }}
            >
              Información
            </h6>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: "25px" }}
                  placeholder="Tu Email"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-3">Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
        style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
      >
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white-50">
              Copyright &copy; <a href="#">ViajaFácil</a>. Todos los Derechos
              Reservados.
            </p>
          </div>
          <div className="col-lg-6 text-center text-md-right">
            <p className="m-0 text-white-50">
              <a href="https://htmlcodex.com"></a>
            </p>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
}

export default Home;
