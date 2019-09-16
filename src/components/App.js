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
        photo: "",
        email: "",
        phone: "",
        linkedin: "",
        github: ""
      }
    };
    this.handlePaletteApp = this.handlePaletteApp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePhotoApp = this.handlePhotoApp.bind(this);
    this.saveData = this.saveData.bind(this);
    this.fillIconInputs();
  }
  // Change color
  handlePaletteApp(palette) {
    //PASAN STRANGER THINGS CON LAS PALETAS EN EL LOCAL STORAGE
    const newUserInfo = { ...this.state.userInfo, palette: palette };
    this.setState({ userInfo: newUserInfo }, this.saveData(this.state.userInfo));
  }
  // Write input values on card
  handleInputChange(event) {
    const inputValue = event.currentTarget.value;
    const id = event.currentTarget.id;
    const newUserInfo = { ...this.state.userInfo, [id]: inputValue };
    this.setState(
      { userInfo: newUserInfo },
      //  this.fillIconInputs(id),
      this.saveData(this.state.userInfo)
    );
  }

  // Change profile picture
  handlePhotoApp(photo) {
    console.log(photo);
    const newUserInfo = { ...this.state.userInfo, photo: photo };
    this.setState({ userInfo: newUserInfo }, this.saveData(this.state.userInfo));
  }

  //Opacity card icons
  fillIconInputs(id) {
    //no funciona por la movida esa de la asincronia. hay que hacer esta funcion como un callback
    return !!this.state.userInfo[id] ? "" : "clear";
  }

  //LocalStorage
  saveData(userInfo) {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }

  render() {
    return (
      <div className="app">
        <HeaderApp />
        <section className="section__mediasq">
          <div className="visor__mediasbackgroundImage = `url(./assets/images/natalie-portman.jpg)`q">
            <Preview
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
                <Form action={this.handleInputChange} userInfo={this.state.userInfo} handlePhotoForm={this.handlePhotoApp} />
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
