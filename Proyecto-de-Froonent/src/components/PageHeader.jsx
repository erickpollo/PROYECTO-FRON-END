import React from "react";
import "../css/style.css";
export default function PageHeader({ title }) {
  return (
    <div className="container-fluid page-header">
      <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 400 }}>
          <h3 className="display-4 text-white text-uppercase">{title}</h3>
          <div className="d-inline-flex text-white">
            <p className="m-0 text-uppercase"><a className="text-white" href="/">Inicio</a></p>
            <i className="fa fa-angle-double-right pt-1 px-3"></i>
            <p className="m-0 text-uppercase">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
