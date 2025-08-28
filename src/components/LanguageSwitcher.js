import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    if (i18n && typeof i18n.changeLanguage === "function") {
      i18n.changeLanguage(lang);
      localStorage.setItem("language", lang);
    } else {
      console.error("i18n.changeLanguage no es una función");
    }
  };

  return (
    <div className="d-flex justify-content-center mb-3">
      <div className="btn-group">
        <button 
          onClick={() => handleLanguageChange("en")} 
          className={`btn btn-sm ${i18n.language === "en" ? "btn-primary" : "btn-outline-secondary"}`}
        >
          🇬🇧 EN
        </button>
        <button 
          onClick={() => handleLanguageChange("es")} 
          className={`btn btn-sm ${i18n.language === "es" ? "btn-primary" : "btn-outline-secondary"}`}
        >
          🇪🇸 ES
        </button>
        <button 
          onClick={() => handleLanguageChange("fr")} 
          className={`btn btn-sm ${i18n.language === "fr" ? "btn-primary" : "btn-outline-secondary"}`}
        >
          🇫🇷 FR
        </button>
      </div>
    </div>
  );
}

export default LanguageSwitcher;