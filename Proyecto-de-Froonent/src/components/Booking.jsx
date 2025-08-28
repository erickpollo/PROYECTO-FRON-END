import React from "react";
import "../CSS/style.css";

export default function Booking() {
  return (
    <div className="container-fluid booking mt-5 pb-5">
      <div className="container pb-5">
        <div className="bg-light shadow" style={{ padding: "30px" }}>
          <div className="row align-items-center" style={{ minHeight: "60px" }}>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 mb-3 mb-md-0">
                  <select className="custom-select px-4" style={{ height: "47px" }} defaultValue="">
                    <option value="" disabled hidden>Origen</option>
                    <option value="1">Cartagena</option>
                    <option value="2">Barranquilla</option>
                    <option value="3">Medellin</option>
                  </select>
                </div>
                <div className="col-md-3 mb-3 mb-md-0">
                  <input type="text" className="form-control p-4" placeholder="Fecha Ida" />
                </div>
                <div className="col-md-3 mb-3 mb-md-0">
                  <input type="text" className="form-control p-4" placeholder="Fecha Vuelta" />
                </div>
                <div className="col-md-3 mb-3 mb-md-0">
                  <select className="custom-select px-4" style={{ height: "47px" }} defaultValue="">
                    <option value="" disabled hidden>Destino</option>
                    <option value="1">Cali</option>
                    <option value="2">Villavicencio</option>
                    <option value="3">Bucaramanga</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-block" style={{ height: "47px", marginTop: "-2px" }}>Buscar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
