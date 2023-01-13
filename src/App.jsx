import React from "react";
import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Goles } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Review } from "./components/logo";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Footer } from "./components/footer";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div id="wrapper" class="clearfix">
      <Navigation />
      <div class="main-content"> 
        <Features data={landingPageData.Features} />
        <Goles data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Gallery data={landingPageData.Gallery} />
        <Testimonials data={landingPageData.Testimonials} />
        <Team data={landingPageData.Team} />
        {/* <R  eview /> */}
        <Contact data={landingPageData.Contact} />
        <Footer data={landingPageData.Contact} />
      </div>
    </div>
  );
};

export default App;
