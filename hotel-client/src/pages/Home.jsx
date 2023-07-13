import { CssBaseline } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ContactUs from "../components/Contacts";
import AboutUs from "../components/Aboutus";
import Testimonial from "../components/Testimonials";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div style={{flex:"display" ,alignItems:"center", justifyContent:"center" , marginTop:"60px"}}>
      <CssBaseline />
      <Hero />
      <Section />
      <AboutUs />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );

 

};

export default Home;
