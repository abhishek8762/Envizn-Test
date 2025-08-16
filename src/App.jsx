import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ExperienceDetails from "./components/ExperienceDetails";
import Highlights from "./components/Highlights";
import CultureDiscovery from "./components/CultureDiscovery";
import AvailableDates from "./components/AvailableDates";
import AdditionalInfo from "./components/AdditionalInfo";
import AboutHost from "./components/AboutHost";
import Testimonials from "./components/Testimonials";
import RelatedExperiences from "./components/RelatedExperiences";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-beige">
      <Header />
      <Hero />
      <ExperienceDetails />
      <Highlights />
      <CultureDiscovery />
      <AvailableDates />
      <AdditionalInfo />
      <AboutHost />
      <Testimonials />
      <RelatedExperiences />
      <Footer />
    </div>
  );
}

export default App;
