import "../css/style.css";
import { logout, auth } from "../firebase"; 
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom"; 
import { useTranslation } from "react-i18next"; // 👈 i18n hook

export default function Topbar() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate(); 
  const { t } = useTranslation(); // 👈 inicializa traducción

  const handleLogout = async () => {
    await logout();
    navigate("/"); 
  };

  return (
    <div className="container-fluid bg-light pt-3 d-none d-lg-block">
      <div className="container">
        <div className="row">
          {/* 📌 contacto */}
          <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <p><i className="fa fa-envelope mr-2"></i>{t("topbar.email")}</p>
              <p className="text-body px-3">|</p>
              <p><i className="fa fa-phone-alt mr-2"></i>{t("topbar.phone")}</p>
            </div>
          </div>

          {/* 📌 redes sociales + logout */}
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-primary px-3" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="text-primary px-3" href="#"><i className="fab fa-twitter"></i></a>
              <a className="text-primary px-3" href="#"><i className="fab fa-instagram"></i></a>
              <a className="text-primary pl-3" href="#"><i className="fab fa-youtube"></i></a>

              {/* Botón cerrar sesión */}
              {user && (
                <button 
                  onClick={handleLogout} 
                  className="btn btn-sm btn-outline-danger ml-3"
                >
                  {t("topbar.logout")}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
