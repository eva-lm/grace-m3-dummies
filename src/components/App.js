import React from "react";
import "../stylesheets/App.scss";
import Footer from "./Footer";
import Preview from "./Preview";
import Design from "./Design";
import Form from "./Form";
import Share from "./Share";
import Collapsible from "./Collapsible";
// import userProfile from

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        fullName: "",
        profession: "",
        // image: userProfile,
        emailAddress: "",
        // telephone: ,//Quiero poner un número
        Linkedin: "",
        Github: ""
      }
    };
  }
  handleInputChange(event) {
    const inputValue = event.currentTarget.value;
    const id = event.currentTarget.id;
    this.setState((prevState, props) => {
      const newUser = { ...prevState.userInfo };
      newUser[id] = inputValue;
      this.saveData(newUser);
      console.log(newUser);
      return { userInfo: newUser };
    });
  }

  render() {
    return (
      <div className="App">
        <Preview userInfo={this.state.userInfo} />
        <Collapsible name="DISEÑA">
          <Design />
        </Collapsible>
        <Collapsible name="RELLENA">
          <Form action={this.handleInputChange} userInfo={this.state.userInfo} />
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
