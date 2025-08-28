// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Home from "./components/Home";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid bg-light py-2">
          <div className="d-flex justify-content-end">
            <LanguageSwitcher />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<AuthForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
