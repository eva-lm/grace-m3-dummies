import React from "react";
// import logo from "./logo.svg";
import "../stylesheets/App.scss";
import header from "./Header_landing";
import footer from "./Footer";

function Landing() {
  return (
    <div className="App">
      {header}
      {footer}
    </div>
  );
}

export default Landing;
