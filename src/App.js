import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Service from "./components/services/Service";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/testimonial";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-left">
        <Header />
      </div>
      <Navbar />
      <div data-aos="fade-up">
        <About />
      </div>
      <div data-aos="fade-left">
        <Experience />
      </div>
      <div data-aos="slide-up">
        <Service />
      </div>
      <div data-aos="zoom-in-up">
        <Portfolio />
      </div>
      <Testimonial />
      <div data-aos="fade-right">
        <Contact />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
}

export default App;
