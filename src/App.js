import React from "react";
import FixedSocial from "./components/helper/fixedsocial";
import Header from "./components/header";
import Hero from "./components/hero";
import Vision from "./components/vision";
import Features from "./components/features";
import RoadMap from "./components/roadmap";
import Tokenomics from "./components/tokenmonics";
import Presale from "./components/presale";
import Team from "./components/team";
import Pertners from "./components/partners";
import Footer from "./components/footer";
import ScrollTop from "./components/helper/scroolToTop";

function App() {
  return (
    <>
    
      <FixedSocial/>
      <ScrollTop />

      <Header/>  
      <Hero/>  
      <Vision/>
      <Features/>
      <RoadMap/>
      <Tokenomics/>
      <Presale/>
      <Team/>
      <Pertners/>
      <Footer/>
    </>
  );
}

export default App;
