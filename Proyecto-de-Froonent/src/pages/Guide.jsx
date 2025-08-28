import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css";
import "../css/style.css"; // tu estilo personalizado

const Guia = () => {
  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-light pt-3 d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <p>
                  <i className="fa fa-envelope mr-2"></i>Contactos@ViajaFacil.com
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
                  <i className="fab fa-linkedin-in"></i>
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
        <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
          <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <img src="img/Logo1.png" alt="Logo" style={{ height: 45, marginRight: 10 }} />
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
            <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
              <div className="navbar-nav ml-auto py-0">
                <a href="index.html" className="nav-item nav-link">Inicio</a>
                <a href="about.html" className="nav-item nav-link">Nosotros</a>
                <a href="service.html" className="nav-item nav-link active">Servicios</a>
                <a href="package.html" className="nav-item nav-link">Opciones de Viaje</a>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Detalles</a>
                  <div className="dropdown-menu border-0 rounded-0 m-0">
                    <a href="blog.html" className="dropdown-item">Blog</a>
                    <a href="single.html" className="dropdown-item">Detalles Blog</a>
                    <a href="guide.html" className="dropdown-item">Guia de viajes</a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contacto</a>
                <a href="pagoseguro.html" className="nav-item nav-link">Pago Seguro</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}

      {/* Header Start */}
      <div className="container-fluid page-header">
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 400 }}>
            <h3 className="display-4 text-white text-uppercase">Guia de viajes</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><a className="text-white" href="#">Inicio</a></p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase">Guia de viajes</p>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Booking Start */}
      <div className="container-fluid booking mt-5 pb-5">
        <div className="container pb-5">
          <div className="bg-light shadow" style={{ padding: 30 }}>
            <div className="row align-items-center" style={{ minHeight: 60 }}>
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-3">
                    <select className="custom-select px-4" style={{ height: 47 }}>
                      <option value="" disabled selected hidden>Origen</option>
                      <option value="1">Cartagena</option>
                      <option value="2">Barranquilla</option>
                      <option value="3">Medellin</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <input type="text" className="form-control p-4" placeholder="Depart Date" />
                  </div>
                  <div className="col-md-3">
                    <input type="text" className="form-control p-4" placeholder="Return Date" />
                  </div>
                  <div className="col-md-3">
                    <select className="custom-select px-4" style={{ height: 47 }}>
                      <option value="" disabled selected hidden>Destino</option>
                      <option value="1">Cali</option>
                      <option value="2">Villavicencio</option>
                      <option value="3">Bucaramanga</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary btn-block" type="submit" style={{ height: 47, marginTop: -2 }}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking End */}

      {/* Team Start */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>Guias de viajes</h6>
            <h1>Nuestras Guias</h1>
          </div>
          <div className="row">
            {[
              { name: "Mariangel Perilla", role: "Consultaria", img: "img/team-1.jpg" },
              { name: "Santiago Camacho", role: "Asesor", img: "img/team-2.jpg" },
              { name: "Ericka Criolla", role: "Atencion al cliente y servicios Generales", img: "img/team-3.jpg" },
              { name: "David Paez", role: "Promocion turistica", img: "img/team-4.jpg" },
            ].map((member, i) => (
              <div key={i} className="col-lg-3 col-md-4 col-sm-6 pb-2">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={member.img} alt={member.name} />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                      <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">{member.name}</h5>
                    <p className="m-0">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team End */}

      {/* Footer Start */}
      <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{ marginTop: 90 }}>
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <a href="#" className="navbar-brand">
              <h1 className="text-primary"><span className="text-white">Viaja</span>Fácil</h1>
            </a>
            <p>Somos una agencia que busca hacer tus viajes mas faciles y especiales para todos ustedes</p>
            <h6 className="text-white text-uppercase mt-4 mb-3" style={{ letterSpacing: 5 }}>Siguenos</h6>
            <div className="d-flex justify-content-start">
              <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

    </div>
  );
};

export default Guia;
