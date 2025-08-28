import React from "react";

// 👇 importa desde src/img/
import testimonial1 from "../img/testimonial-1.jpg";
import testimonial2 from "../img/testimonial-2.jpg";
import testimonial3 from "../img/testimonial-3.jpg";
import testimonial4 from "../img/testimonial-4.jpg";

import "../css/style.css";

export default function Testimonial() {
  const testimonials = [
    { img: testimonial1, text: "Muy contento con el servicio para disfrutar mis vacaciones", name: "Santiago Camacho", job: "Ing Software" },
    { img: testimonial2, text: "Me gusto la facilidad con la que fui a otros sitios de colombia", name: "Mariangel Perilla", job: "Admin Empresas" },
    { img: testimonial3, text: "Con ViajaFacil pude hacer mis viajes mas faciles", name: "David Paez", job: "Futbolista" },
    { img: testimonial4, text: "Gracias a esta web pude hacer mi trabajo mejor", name: "Erick Criolla", job: "Servicios Generales" },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mb-3 pb-3">
          <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>
            Testimonio
          </h6>
          <h1>Opinión de nuestros Clientes</h1>
        </div>

        {/*  quité owl-carousel y uso flex de bootstrap */}
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
