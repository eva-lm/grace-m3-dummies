import React from "react";
// import logo from "./logo.svg";
import "../stylesheets/App.scss";
import header from "./header_landing";
import footer from "./footer";

function App() {
  return (
    <div className="App">
      {header}
      {footer}
    </div>
  );
}

export default App;
