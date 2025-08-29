import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import BookingForm from "../components/BookingForm";

import package1 from "../img/package-1.jpg";
import package2 from "../img/package-2.jpg";
import package3 from "../img/package-3.jpg";
import package4 from "../img/package-4.jpg";
import package5 from "../img/package-5.jpg";
import package6 from "../img/package-6.jpg";

import destination1 from "../img/destination-1.jpg";
import destination2 from "../img/destination-2.jpg";
import destination3 from "../img/destination-3.jpg";
import destination4 from "../img/destination-4.jpg";
import destination5 from "../img/destination-5.jpg";
import destination6 from "../img/destination-6.jpg";


import Footer from "../components/Footer";
import "../css/style.css"; 
import { useTranslation } from "react-i18next"; // 👈 importar hook

export default function Home() {
  const { t } = useTranslation(); // 👈 inicializar traducción
    return (

        <>
            <Topbar />
            <Navbar />
            {/* Header Start */}
            <div className="container-fluid page-header">
                <div className="container">
                    <div
                        className="d-flex flex-column align-items-center justify-content-center"
                        style={{ minHeight: "400px" }}
                    >
                        <h3 className="display-4 text-white text-uppercase">Opciones de viaje</h3>
                        <div className="d-inline-flex text-white">
                            <p className="m-0 text-uppercase">
                                <a className="text-white" href="">Inicio</a>
                            </p>
                            <i className="fa fa-angle-double-right pt-1 px-3"></i>
                            <p className="m-0 text-uppercase">Opciones de viaje</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}
      <BookingForm />




      {/* Packages Start */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Opciones de viaje
            </h6>
            <h1>Opciones de viajes Colombia</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="package-item bg-white mb-2">
                <img className="img-fluid" src={package1} alt="" />
                <div className="p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0">
                      <i className="fa fa-map-marker-alt text-primary mr-2"></i>
                      San andres
                    </small>
                    <small className="m-0">
                      <i className="fa fa-calendar-alt text-primary mr-2"></i>
                      3 days
                    </small>
                    <small className="m-0">
                      <i className="fa fa-user text-primary mr-2"></i>
                      2 Person
                    </small>
                  </div>
                  <a className="h5 text-decoration-none" href="">
                    Lugar chevere para disfrutar en pareja
                  </a>
                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="m-0">
                        <i className="fa fa-star text-primary mr-2"></i>4.5{" "}
                        <small>(250)</small>
                      </h6>
                      <h5 className="m-0">$400.000</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="package-item bg-white mb-2">
                <img className="img-fluid" src={package2} alt="" />
                <div className="p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0">
                      <i className="fa fa-map-marker-alt text-primary mr-2"></i>
                      Melgar
                    </small>
                    <small className="m-0">
                      <i className="fa fa-calendar-alt text-primary mr-2"></i>
                      3 days
                    </small>
                    <small className="m-0">
                      <i className="fa fa-user text-primary mr-2"></i>
                      2 Person
                    </small>
                  </div>
                  <a className="h5 text-decoration-none" href="">
                    Lugar para tomar unas relajadas vacaciones
                  </a>
                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="m-0">
                        <i className="fa fa-star text-primary mr-2"></i>4.5{" "}
                        <small>(250)</small>
                      </h6>
                      <h5 className="m-0">$200.000</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="package-item bg-white mb-2">
                <img className="img-fluid" src={package3} alt="" />
                <div className="p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0">
                      <i className="fa fa-map-marker-alt text-primary mr-2"></i>
                      Santa Marta
                    </small>
                    <small className="m-0">
                      <i className="fa fa-calendar-alt text-primary mr-2"></i>
                      3 days
                    </small>
                    <small className="m-0">
                      <i className="fa fa-user text-primary mr-2"></i>
                      2 Person
                    </small>
                  </div>
                  <a className="h5 text-decoration-none" href="">
                    Lugar con buena vista al mara para estar en compañia
                  </a>
                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="m-0">
                        <i className="fa fa-star text-primary mr-2"></i>4.5{" "}
                        <small>(250)</small>
                      </h6>
                      <h5 className="m-0">$350.000</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="package-item bg-white mb-2">
                <img className="img-fluid" src={package4} alt="" />
                <div className="p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0">
                      <i className="fa fa-map-marker-alt text-primary mr-2"></i>
                      Cali
                    </small>
                    <small className="m-0">
                      <i className="fa fa-calendar-alt text-primary mr-2"></i>
                      3 days
                    </small>
                    <small className="m-0">
                      <i className="fa fa-user text-primary mr-2"></i>
                      4 Person
                    </small>
                  </div>
                  <a className="h5 text-decoration-none" href="">
                    Para pasar un fin de semana en familia
                  </a>
                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="m-0">
                        <i className="fa fa-star text-primary mr-2"></i>4.5{" "}
                        <small>(250)</small>
                      </h6>
                      <h5 className="m-0">$150.000</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="package-item bg-white mb-2">
                <img className="img-fluid" src={package5} alt="" />
                <div className="p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0">
                      <i className="fa fa-map-marker-alt text-primary mr-2"></i>
                      Coveñas
                    </small>
                    <small className="m-0">
                      <i className="fa fa-calendar-alt text-primary mr-2"></i>
                      3 days
                    </small>
                    <small className="m-0">
                      <i className="fa fa-user text-primary mr-2"></i>
                      2 Person
                    </small>
                  </div>
                  <a className="h5 text-decoration-none" href="">
                    Lugar exotico para nuevas experiencias
                  </a>
                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="m-0">
                        <i className="fa fa-star text-primary mr-2"></i>4.5{" "}
                        <small>(250)</small>
                      </h6>
                      <h5 className="m-0">$200.000</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="package-item bg-white mb-2">
                <img className="img-fluid" src={package6} alt="" />
                <div className="p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0">
                      <i className="fa fa-map-marker-alt text-primary mr-2"></i>
                      Villavicencio
                    </small>
                    <small className="m-0">
                      <i className="fa fa-calendar-alt text-primary mr-2"></i>
                      3 days
                    </small>
                    <small className="m-0">
                      <i className="fa fa-user text-primary mr-2"></i>
                      1 Person
                    </small>
                  </div>
                  <a className="h5 text-decoration-none" href="">
                    Lugar para disfrutar y tener nuevas experiencias !QUE RICO¡
                  </a>
                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="m-0">
                        <i className="fa fa-star text-primary mr-2"></i>4.5{" "}
                        <small>(250)</small>
                      </h6>
                      <h5 className="m-0">$350.000</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Packages End */}


      {/* Destination Start */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Destinos
            </h6>
            <h1>Explorar Destinos TOP</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item position-relative overflow-hidden mb-2">
                <img className="img-fluid" src={destination1} alt="Alemania" />
                <a
                  className="destination-overlay text-white text-decoration-none"
                  href=""
                >
                  <h5 className="text-white">Alemania</h5>
                  <span>100 Ciudades</span>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item position-relative overflow-hidden mb-2">
                <img className="img-fluid" src={destination2} alt="Inglaterra" />
                <a
                  className="destination-overlay text-white text-decoration-none"
                  href=""
                >
                  <h5 className="text-white">Inglaterra</h5>
                  <span>100 Ciudades</span>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item position-relative overflow-hidden mb-2">
                <img className="img-fluid" src={destination3} alt="Australia" />
                <a
                  className="destination-overlay text-white text-decoration-none"
                  href=""
                >
                  <h5 className="text-white">Australia</h5>
                  <span>100 Ciudades</span>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item position-relative overflow-hidden mb-2">
                <img className="img-fluid" src={destination4} alt="India" />
                <a
                  className="destination-overlay text-white text-decoration-none"
                  href=""
                >
                  <h5 className="text-white">India</h5>
                  <span>58 Ciudades</span>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item position-relative overflow-hidden mb-2">
                <img className="img-fluid" src={destination5} alt="Sudán" />
                <a
                  className="destination-overlay text-white text-decoration-none"
                  href=""
                >
                  <h5 className="text-white">Sudán</h5>
                  <span>48 Ciudades</span>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="destination-item position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid"
                  src={destination6}
                  alt="Indonesia"
                />
                <a
                  className="destination-overlay text-white text-decoration-none"
                  href=""
                >
                  <h5 className="text-white">Indonesia</h5>
                  <span>100 Ciudades</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Destination End */}
    
            <Footer />
        </>
    );
}
