import React from "react";
import "../stylesheets/App.scss";
import Footer from "./Footer";
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
        {Footer}
        <Share />
      </div>
    );
  }
}

export default App;
