import React from "react";
import "../stylesheets/App.scss";
import Footer from "./Footer";
import Preview from "./Preview";
import Design from "./Design";
import Form from "./Form";
import Share from "./Share";
import Collapsible from "./Collapsible";
import HeaderApp from "./HeaderApp";
// import userProfile from

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        palette: 1,
        name: "",
        job: "",
        // photo: userProfile,
        email: "",
        phone: "",
        linkedin: "",
        github: ""
      }
    };
    this.handlePaletteApp = this.handlePaletteApp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handlePaletteApp(palette) {
    ///
    const newUserInfo = {
      ...this.userInfo,
      palette: palette
    };
    this.setState({ userInfo: newUserInfo }, console.log(this.state));
  }

  handleInputChange(event) {
    const inputValue = event.currentTarget.value;
    const id = event.currentTarget.id;
    // console.log(inputValue, id);
    this.setState((prevState, props) => {
      debugger;
      const newUser = { ...prevState.userInfo, [id]: inputValue };
      console.log(newUser);
      return { userInfo: newUser };
    });
  }

  render() {
    return (
      <div className="app">
        <HeaderApp />
        <section className="section__mediasq">
          <div className="visor__mediasq">
            <Preview userInfo={this.state.userInfo} />
          </div>
          <div className="workSpace">
            <form id="form">
              <Collapsible name="DISEÑA">
                <Design handlePaletteDesign={this.handlePaletteApp} />
              </Collapsible>
              <Collapsible name="RELLENA">
                <Form action={this.handleInputChange} userInfo={this.state.userInfo} />
              </Collapsible>
              <Collapsible name="COMPARTE">
                <Share />
              </Collapsible>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
