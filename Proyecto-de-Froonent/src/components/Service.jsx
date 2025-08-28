import { FaRoute, FaTicketAlt, FaHotel } from "react-icons/fa";
import "../css/style.css";
export default function Service() {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="service-item bg-white text-center mb-2 py-5 px-4">
          <FaRoute size={40} className="text-primary mb-4" />
          <h5 className="mb-2">Guia Turistico</h5>
          <p className="m-0">Opciones para hacer un viaje con recomendaciones plus</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="service-item bg-white text-center mb-2 py-5 px-4">
          <FaTicketAlt size={40} className="text-primary mb-4" />
          <h5 className="mb-2">Reserva de Tiquetes</h5>
          <p className="m-0">Para poder tener tus vuelos con anticipacion</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="service-item bg-white text-center mb-2 py-5 px-4">
          <FaHotel size={40} className="text-primary mb-4" />
          <h5 className="mb-2">Reserva de Hotel</h5>
          <p className="m-0">Para alojarte en cualquier lugar con anticipacion</p>
        </div>
      </div>
    </div>
  );
}
