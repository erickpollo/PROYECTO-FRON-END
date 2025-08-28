import React from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Booking from "../components/Booking";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import "../css/style.css";

export default function Services() {
  return (
    <>
      <Topbar />
      <Navbar />
      <PageHeader title="Servicios" />
      <Booking />
      <Service />
      <Testimonial />
      <Footer />
    </>
  );
}
