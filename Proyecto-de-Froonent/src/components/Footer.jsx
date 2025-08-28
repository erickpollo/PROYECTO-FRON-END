import React from "react";
import "../css/style.css";
export default function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5"
        style={{ marginTop: 90 }}
      >
        <div className="row pt-5">
          {/* LOGO + REDES */}
          <div className="col-lg-3 col-md-6 mb-5">
            <a href="/" className="navbar-brand">
              <h1 className="text-primary">
                <span className="text-white">Viaja</span>Fácil
              </h1>
            </a>
            <p>
              Somos una agencia que busca hacer tus viajes más fáciles y
              especiales para todos ustedes
            </p>
            <h6
              className="text-white text-uppercase mt-4 mb-3"
              style={{ letterSpacing: 5 }}
            >
              Síguenos
            </h6>
            <div className="d-flex justify-content-start">
              <a
                className="btn btn-outline-primary btn-square mr-2"
                href="#"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-primary btn-square mr-2"
                href="#"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-outline-primary btn-square mr-2"
                href="#"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-outline-primary btn-square" href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* SERVICIOS */}
          <div className="col-lg-3 col-md-6 mb-5">
            <h5
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: 5 }}
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
                <i className="fa fa-angle-right mr-2"></i>Guías
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Testimonios
              </a>
              <a className="text-white-50" href="#">
                <i className="fa fa-angle-right mr-2"></i>Blog
              </a>
            </div>
          </div>

          {/* CONTACTO */}
          <div className="col-lg-3 col-md-6 mb-5">
            <h5
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: 5 }}
            >
              Contáctanos
            </h5>
            <p>
              <i className="fa fa-map-marker-alt mr-2"></i>
              Carrera 30 57-36, Bogotá, COL
            </p>
            <p>
              <i className="fa fa-phone-alt mr-2"></i>+57 313 8804769
            </p>
            <p>
              <i className="fa fa-envelope mr-2"></i>
              Contacto@ViajaFácil.com
            </p>
            <h6
              className="text-white text-uppercase mt-4 mb-3"
              style={{ letterSpacing: 5 }}
            >
              Información
            </h6>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: 25 }}
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

      {/* COPYRIGHT */}
      <div
        className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
        style={{ borderColor: "rgba(256, 256, 256, .1)" }}
      >
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white-50">
              Copyright &copy; <a href="/">ViajaFácil</a>. Todos los Derechos
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
    </>
  );
}
