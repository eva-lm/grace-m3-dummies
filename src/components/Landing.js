import React from "react";
import "../stylesheets/App.scss";
import HeaderLanding from "./HeaderLanding";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="App">
      <HeaderLanding />
      <Footer />
    </div>
  );
};

export default Landing;
