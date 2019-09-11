import React from "react";
import "../stylesheets/App.scss";
import Footer from "./Footer";
import Preview from "./Preview";
import Design from "./Design";
import Form from "./Form";
import Share from "./Share";
import Collapsible from "./Collapsible";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsible: "content"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => ({
      collapsible: prevState.collapsible === "" ? "js-collapsable.open" : ""
    }));
  }
  render() {
    return (
      <div className="App">
        <Preview />
        <Collapsible name="DISEÑA">
          <Design />
        </Collapsible>
        <Collapsible name="RELLENA">
          <Form />
        </Collapsible>
        <Collapsible name="COMPARTE">
          <Share />
        </Collapsible>
        <Footer />
      </div>
    );
  }
}

export default App;
