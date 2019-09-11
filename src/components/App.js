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
    this.state = {};
  }
  handleInputChange(event) {
    const value = event.currentTarget.value;
    const id = event.currentTarget.id;
    this.setState((prevState, props) => {
      const newUser = { ...prevState.userInfo };
      newUser[id] = value;
      this.saveData(newUser);
      return { userInfo: newUser };
    });
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
