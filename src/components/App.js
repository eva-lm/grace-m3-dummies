import React from "react";
// import logo from "./logo.svg";
import "../stylesheets/App.scss";
import footer from "./footer";
import Preview from "./Preview";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Preview />
        {footer}
      </div>
    );
  }
}

export default App;
