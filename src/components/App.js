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
        telephone: "",
        Linkedin: "",
        Github: ""
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const inputValue = event.currentTarget.value;
    const id = event.currentTarget.id;
    console.log(inputValue, id);
    this.setState((prevState, props) => {
      const newUser = { ...prevState.userInfo, [id]: inputValue };
      console.log(newUser);
      return { userInfo: newUser };
    });
    console.log(this.state.userInfo);
  }

  render() {
    console.log(this.state.userInfo);
    return (
      <div className="app">
        <div className="viewer__header">{/* me faltan moviisss */}</div>
        <section className="section__mediasq">
          <div className="visor__mediasq">
            <Preview userInfo={this.state.userInfo} />
          </div>
          <div className="workSpace">
            <form id="form">
              <Collapsible name="DISEÑA">
                <Design />
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
