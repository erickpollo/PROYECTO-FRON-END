import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './CSS/style.css';

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Guide from "./pages/Guide";
import Package from "./pages/package";
import Services from "./pages/Services";
import Single from "./pages/Single";
import PagoSeguro from "./pages/PagoSeguro";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/services" element={<Services />} />
        <Route path="/single" element={<Single />} />
        <Route path="/pagoseguro" element={<PagoSeguro />} />
        <Route path="/Package" element={<Package />} />
      </Routes>
    </Router>
  );
}

export default App;
