import { FaRoute, FaTicketAlt, FaHotel } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // 👈 Importamos hook de traducción
import "../css/style.css";

export default function Service() {
  const { t } = useTranslation(); // 👈 Inicializamos traducción

  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="service-item bg-white text-center mb-2 py-5 px-4">
          <FaRoute size={40} className="text-primary mb-4" />
          <h5 className="mb-2">{t("services.guide.title")}</h5>
          <p className="m-0">{t("services.guide.desc")}</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="service-item bg-white text-center mb-2 py-5 px-4">
          <FaTicketAlt size={40} className="text-primary mb-4" />
          <h5 className="mb-2">{t("services.tickets.title")}</h5>
          <p className="m-0">{t("services.tickets.desc")}</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="service-item bg-white text-center mb-2 py-5 px-4">
          <FaHotel size={40} className="text-primary mb-4" />
          <h5 className="mb-2">{t("services.hotel.title")}</h5>
          <p className="m-0">{t("services.hotel.desc")}</p>
        </div>
      </div>
    </div>
  );
}
