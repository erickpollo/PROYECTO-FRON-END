import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import "../CSS/style.css";



export default function Home() {
  return (
    
    <>
      <Topbar />
      <Navbar />
      <Carousel />
      <BookingForm />
      <Footer />
    </>
  );
}
