import { Link } from "react-router-dom";
import Logo from "../img/Logo1.png";
import "../CSS/style.css";

export default function Navbar() {
  return (
    <div className="container-fluid position-relative nav-bar p-0">
      <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
        <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src={Logo} alt="Logo" style={{ height: "45px", marginRight: "10px" }} />
            <h1 className="text-primary ">
              <span className="text-dark">Viaja</span>Fácil
            </h1>
          </Link>

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
              <Link to="/" className="nav-item nav-link active">Inicio</Link>
              <Link to="/services" className="nav-item nav-link">Servicios</Link>
              <Link to="/package" className="nav-item nav-link">Opciones de Viaje</Link>

              <div className="nav-item dropdown">
                {/* 👇 Aquí cambiamos el <a> por Link para que también use React Router */}
                <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                  Detalles
                </Link>
                <div className="dropdown-menu border-0 rounded-0 m-0">
                  <Link to="/blog" className="dropdown-item">Blog</Link>
                  <Link to="/single" className="dropdown-item">Detalles Blog</Link>
                  <Link to="/guide" className="dropdown-item">Guía de Viajes</Link>
                </div>
              </div>

              <Link to="/contact" className="nav-item nav-link">Contacto</Link>
              <Link to="/pagoseguro" className="nav-item nav-link">Pago Seguro</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
