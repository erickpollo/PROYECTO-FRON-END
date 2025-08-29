import React from "react";
import { useTranslation } from "react-i18next"; // 👈 Importamos hook

// 👇 importa desde src/img/
import testimonial1 from "../img/testimonial-1.jpg";
import testimonial2 from "../img/testimonial-2.jpg";
import testimonial3 from "../img/testimonial-3.jpg";
import testimonial4 from "../img/testimonial-4.jpg";

import "../css/style.css";

export default function Testimonial() {
  const { t } = useTranslation();

  const testimonials = [
    { img: testimonial1, text: t("testimonials.1.text"), name: t("testimonials.1.name"), job: t("testimonials.1.job") },
    { img: testimonial2, text: t("testimonials.2.text"), name: t("testimonials.2.name"), job: t("testimonials.2.job") },
    { img: testimonial3, text: t("testimonials.3.text"), name: t("testimonials.3.name"), job: t("testimonials.3.job") },
    { img: testimonial4, text: t("testimonials.4.text"), name: t("testimonials.4.name"), job: t("testimonials.4.job") }
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mb-3 pb-3">
          <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>
            {t("testimonials.section")}
          </h6>
          <h1>{t("testimonials.title")}</h1>
        </div>

        {/* uso flex de bootstrap */}
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {testimonials.map((item, idx) => (
            <div className="text-center pb-4" key={idx}>
              <img
                className="img-fluid mx-auto rounded-circle"
                src={item.img}
                alt={item.name}
                style={{ width: 100, height: 100, objectFit: "cover" }}
              />
              <div className="testimonial-text bg-white p-4 mt-n5">
                <p className="mt-5">{item.text}</p>
                <h5 className="text-truncate">{item.name}</h5>
                <span>{item.job}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
