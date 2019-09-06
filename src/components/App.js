import React from "react";
// import logo from "./logo.svg";
import "../stylesheets/App.scss";
import footer from "./footer";
import Preview from "./Preview";
import Design from "./Design";
import Form from "./Form";
import Share from "./Share";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Preview />
        <Design />
        <Form />
        {footer}
        <Share />
      </div>
    );
  }
}

export default App;
