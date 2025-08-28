import "../CSS/style.css";


export default function BookingForm() {
  
    return (
      <div className="container-fluid booking mt-5 pb-5">
        <div className="container pb-5">
          <div className="bg-light shadow" style={{ padding: "30px" }}>
            <div className="row align-items-center" style={{ minHeight: "60px" }}>
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-3">
                    <div className="mb-3 mb-md-0">
                      <select className="custom-select px-4" style={{ height: "47px" }}>
                        <option value="" disabled hidden selected>Origen</option>
                        <option value="1">Cartagena</option>
                        <option value="2">Barranquilla</option>
                        <option value="3">Medellin</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3 mb-md-0">
                      <div className="date" id="date1" data-target-input="nearest">
                        <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Fecha Ida" data-target="#date1" data-toggle="datetimepicker"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3 mb-md-0">
                      <div className="date" id="date2" data-target-input="nearest">
                        <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Fecha Vuelta" data-target="#date2" data-toggle="datetimepicker"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3 mb-md-0">
                      <select className="custom-select px-4" style={{ height: "47px" }}>
                        <option value="" disabled hidden selected>Destino</option>
                        <option value="1">Cali</option>
                        <option value="2">Villavicencio</option>
                        <option value="3">Bucaramanga</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary btn-block" type="submit" style={{ height: "47px", marginTop: "-2px" }}>
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  