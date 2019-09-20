import React from "react";
import "../stylesheets/App.scss";
import Footer from "./Footer";
import Preview from "./Preview";
import Design from "./Design";
import Form from "./Form";
import Share from "./Share";
import Collapsible from "./Collapsible";
import HeaderApp from "./HeaderApp";
import api from "./api";
// import userProfile from

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.resetState = {
      cardError: "",
      cardURL: "",
      isCardRendering: false,
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
    this.getDataFromApi = this.getDataFromApi.bind(this);
    //this.fillIconInputs();
    this.handleClickReset = this.handleClickReset.bind(this);
    this.saveData = this.saveData.bind(this);
    this.getData = this.getData.bind(this);
    // this.fillIconInputs();
    this.state.userInfo = this.getData();
  }

  //reset
  handleClickReset() {
    this.setState({ userInfo: this.resetState.userInfo }, this.saveData);
    console.log(this.state);
  }

  // Change color
  handlePaletteApp(palette) {
    console.log(palette);

    const newUserInfo = { ...this.state.userInfo, palette: palette };
    this.setState({ userInfo: newUserInfo }, this.saveData);
  }
  // Write input values on card
  handleInputChange(event) {
    const inputValue = event.currentTarget.value;
    const id = event.currentTarget.id;
    const newUserInfo = { ...this.state.userInfo, [id]: inputValue };
    this.setState({ userInfo: newUserInfo }, this.saveData);
  }

  // Change profile picture
  handlePhotoApp(photo) {
    console.log(photo);
    const newUserInfo = { ...this.state.userInfo, photo: photo };
    this.setState({ userInfo: newUserInfo }, this.saveData);
  }

  //Opacity card icons
  // fillIconInputs(id) {
  //   return !!this.state.userInfo[id] ? "" : "clear";
  // }

  //LocalStorage
  saveData() {
    localStorage.setItem("userInfo", JSON.stringify(this.state.userInfo));
  }

  getData() {
    if (!!JSON.parse(localStorage.getItem("userInfo"))) {
      return JSON.parse(localStorage.getItem("userInfo"));
    } else {
      return this.state.userInfo;
    }
  }

  getDataFromApi(ev) {
    ev.preventDefault();
    this.setState({
      isCardRendering: true
    });
    //Objeto para pasar por la API
    const json = this.state.userInfo;
    console.log(json);
    const apiPromise = api(json).then(data => {
      if (data.success) {
        this.setState({
          cardURL: data.cardURL,
          cardError: "",
          isCardRendering: false
        });
      } else {
        this.setState({
          cardURL: "",
          cardError: data.error,
          isCardRendering: false
        });
      }
    });
  }

  render() {
    console.log("rendering..." + this.state);
    const { cardError, cardURL, isCardRendering } = this.state;
    return (
      <div className="app">
        <HeaderApp />
        <section className="section__mediasq">
          <div className="visor__mediasq">
            <Preview
              resetButton={this.handleClickReset}
              // que parametro le paso??¿?¿? opacity={this.fillIconInputs()}
              userInfo={this.state.userInfo}
            />
          </div>
          <div className="workSpace">
            <form id="form">
              <Collapsible name="DISEÑA">
                <Design
                  palette={this.state.userInfo.palette}
                  handlePaletteDesign={this.handlePaletteApp}
                />
              </Collapsible>
              <Collapsible name="RELLENA">
                <Form
                  action={this.handleInputChange}
                  userInfo={this.state.userInfo}
                  handlePhotoForm={this.handlePhotoApp}
                />
              </Collapsible>
              <Collapsible name="COMPARTE">
                <Share
                  getDataFromApi={this.getDataFromApi}
                  cardError={cardError}
                  cardURL={cardURL}
                  isCardRendering={isCardRendering}
                />
              </Collapsible>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Generator;
