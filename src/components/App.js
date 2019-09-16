import React from "react";
import "../stylesheets/App.scss";
import Footer from "./Footer";
import Preview from "./Preview";
import Design from "./Design";
import Form from "./Form";
import Share from "./Share";
import Collapsible from "./Collapsible";
import HeaderApp from "./HeaderApp";
import ResetButton from "./ResetButton";
// import userProfile from

class App extends React.Component {
  constructor(props) {
    super(props);
    this.resetState = {
      userInfo: {
        palette: 1,
        name: "",
        job: "",
        photo: "",
        email: "",
        phone: "",
        linkedin: "",
        github: ""
      }
    };
    this.state = { ...this.resetState };

    this.handlePaletteApp = this.handlePaletteApp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePhotoApp = this.handlePhotoApp.bind(this);
    this.fillIconInputs();
  }
  //resey
  handleClickReset() {
    this.setState({ userInfo: this.resetState });
  }

  // Change color
  handlePaletteApp(palette) {
    const newUserInfo = { ...this.state.userInfo, palette: palette };
    this.setState({ userInfo: newUserInfo }, console.log(this.state));
  }
  // Write input values on card
  handleInputChange(event) {
    const inputValue = event.currentTarget.value;
    const id = event.currentTarget.id;
    const newUserInfo = { ...this.state.userInfo, [id]: inputValue };
    this.setState(
      { userInfo: newUserInfo },
      console.log(this.fillIconInputs(id))
    );
  }

  // Change profile picture
  handlePhotoApp(photo) {
    console.log(photo);
    const newUserInfo = { ...this.state.userInfo, photo: photo };
    this.setState({ userInfo: newUserInfo }, console.log(this.state));
  }

  //Opacity card icons
  fillIconInputs(id) {
    //no funciona por la movida esa de la asincronia. hay que hacer esta funcion como un callback
    return !!this.state.userInfo[id] ? "" : "clear";
  }

  render() {
    return (
      <div className="app">
        <HeaderApp />
        <section className="section__mediasq">
          <div className="visor__mediasbackgroundImage = `url(./assets/images/natalie-portman.jpg)`q">
            <Preview
              resetButton={this.handleClickReset}
              // que parametro le paso??¿?¿? opacity={this.fillIconInputs()}
              userInfo={this.state.userInfo}
            />
          </div>
          <div className="workSpace">
            <form id="form">
              <Collapsible name="DISEÑA">
                <Design handlePaletteDesign={this.handlePaletteApp} />
              </Collapsible>
              <Collapsible name="RELLENA">
                <Form
                  action={this.handleInputChange}
                  userInfo={this.state.userInfo}
                  handlePhotoForm={this.handlePhotoApp}
                />
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
