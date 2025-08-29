import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../img/Logo1.png";
import "../CSS/style.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container-fluid position-relative nav-bar p-0">
      <div
        className="container-lg position-relative p-0 px-lg-3"
        style={{ zIndex: 9 }}
      >
        <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src={Logo}
              alt="Logo"
              style={{ height: "45px", marginRight: "10px" }}
            />
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

          <div
            className="collapse navbar-collapse justify-content-between px-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto py-0">
              <Link to="/" className="nav-item nav-link active">
                {t("navbar.home")}
              </Link>
              <Link to="/services" className="nav-item nav-link">
                {t("navbar.services")}
              </Link>
              <Link to="/package" className="nav-item nav-link">
                {t("navbar.packages")}
              </Link>

              <div className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  {t("navbar.details")}
                </Link>
                <div className="dropdown-menu border-0 rounded-0 m-0">
                  <Link to="/blog" className="dropdown-item">
                    {t("navbar.blog")}
                  </Link>
                  <Link to="/single" className="dropdown-item">
                    {t("navbar.blogDetails")}
                  </Link>
                  <Link to="/guide" className="dropdown-item">
                    {t("navbar.travelGuide")}
                  </Link>
                </div>
              </div>

              <Link to="/contact" className="nav-item nav-link">
                {t("navbar.contact")}
              </Link>
              <Link to="/pagoseguro" className="nav-item nav-link">
                {t("navbar.payment")}
              </Link>

              {/* 🔥 Dropdown de Idiomas */}
              <div className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  🌐 {t("navbar.language")}
                </Link>
                <div className="dropdown-menu border-0 rounded-0 m-0">
                  <button
                    className="dropdown-item"
                    onClick={() => changeLanguage("es")}
                  >
                    🇪🇸 Español
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => changeLanguage("en")}
                  >
                    🇬🇧 English
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => changeLanguage("fr")}
                  >
                    🇫🇷 Français
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
