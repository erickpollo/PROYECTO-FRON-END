import "../CSS/style.css";
import { useTranslation } from "react-i18next";

export default function BookingForm() {
  const { t } = useTranslation();

  return (
    <div className="container-fluid booking mt-5 pb-5">
      <div className="container pb-5">
        <div className="bg-light shadow" style={{ padding: "30px" }}>
          <div className="row align-items-center" style={{ minHeight: "60px" }}>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3">
                  <div className="mb-3 mb-md-0">
                    <select
                      className="custom-select px-4"
                      style={{ height: "47px" }}
                      defaultValue=""
                    >
                      <option value="" disabled hidden>
                        {t("booking.origin")}
                      </option>
                      <option value="1">Cartagena</option>
                      <option value="2">Barranquilla</option>
                      <option value="3">Medellín</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3 mb-md-0">
                    <div className="date" id="date1" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control p-4 datetimepicker-input"
                        placeholder={t("booking.departureDate")}
                        data-target="#date1"
                        data-toggle="datetimepicker"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3 mb-md-0">
                    <div className="date" id="date2" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control p-4 datetimepicker-input"
                        placeholder={t("booking.returnDate")}
                        data-target="#date2"
                        data-toggle="datetimepicker"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3 mb-md-0">
                    <select
                      className="custom-select px-4"
                      style={{ height: "47px" }}
                      defaultValue=""
                    >
                      <option value="" disabled hidden>
                        {t("booking.destination")}
                      </option>
                      <option value="1">Cali</option>
                      <option value="2">Villavicencio</option>
                      <option value="3">Bucaramanga</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button
                className="btn btn-primary btn-block"
                type="submit"
                style={{ height: "47px", marginTop: "-2px" }}
              >
                {t("booking.search")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
