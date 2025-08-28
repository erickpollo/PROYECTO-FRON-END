import React from "react";
import "../css/style.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
const Contacto = () => {
  return (
    <div>
    <Topbar />
    <Navbar />

      {/* Header Start */}
      <div className="container-fluid page-header">
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 400 }}>
            <h3 className="display-4 text-white text-uppercase">Contacto</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><a className="text-white" href="#">Inicio</a></p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase">Contacto</p>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}



      {/* Contact Start */}
      <div className="container-fluid py-5" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container py-5">
          <div className="text-center mb-4">
            <h6 className="text-uppercase text-primary" style={{ letterSpacing: 20 }}> PQRS</h6>
            <h2 className="font-weight-bold">¿Tienes alguna Petición, Queja, Reclamo o Sugerencia?</h2>
            <p className="text-muted">¡Queremos escucharte!</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="pqrs-form bg-white shadow-sm rounded p-4 p-md-5">
                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <input type="text" className="form-control custom-input" id="name" placeholder="Nombre" required />
                    </div>
                    <div className="form-group col-sm-6">
                      <input type="email" className="form-control custom-input" id="email" placeholder="Correo" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control custom-input" id="subject" placeholder="Título" required />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control custom-input" rows="5" id="message" placeholder="Mensaje" required></textarea>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-pqrs-submit px-5 py-2" type="submit" id="sendMessageButton">Enviar Mensaje</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}

    <Footer />
    
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </div>
  );
};

export default Contacto;
