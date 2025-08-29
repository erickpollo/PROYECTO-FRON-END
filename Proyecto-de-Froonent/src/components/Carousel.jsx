import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../img/carousel-1.jpg";
import img2 from "../img/carousel-2.jpg";
import "../CSS/style.css";

export default function Carousel() {
  const { t } = useTranslation();

  return (
    <div className="container-fluid p-0">
      <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {/* Primer slide */}
          <div className="carousel-item active">
            <img className="w-100" src={img1} alt={t("carousel.alt")} />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h4 className="text-white text-uppercase mb-md-3">
                  {t("carousel.subtitle1")}
                </h4>
                <h1 className="display-3 text-white mb-md-4">
                  {t("carousel.title1")}
                </h1>
                <a href="#" className="btn btn-primary py-md-3 px-md-5 mt-2">
                  {t("carousel.button")}
                </a>
              </div>
            </div>
          </div>

          {/* Segundo slide */}
          <div className="carousel-item">
            <img className="w-100" src={img2} alt={t("carousel.alt")} />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h4 className="text-white text-uppercase mb-md-3">
                  {t("carousel.subtitle2")}
                </h4>
                <h1 className="display-3 text-white mb-md-4">
                  {t("carousel.title2")}
                </h1>
                <a href="#" className="btn btn-primary py-md-3 px-md-5 mt-2">
                  {t("carousel.button")}
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
  );
}
