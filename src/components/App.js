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
        image: "",
        emailAddress: "",
        telephone: "",
        Linkedin: "",
        Github: ""
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //change inputs
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
  // preview photo
  handleSubmit(event) {
    event.preventDefault();
    this.setState((prevState, props) => {
      const newUser = {
        ...prevState.userInfo,
        image: this.fileInput.current.files[0].name
      };
      console.log(newUser);
      return { userInfo: newUser };
    });
    this.setState({ image: this.fileInput.current.files[0].name });

    const handleFile = () => {
      const imagePreview = fr.result;

      this.setState({
        image: imagePreview
      });
    };
    const fr = new FileReader();
    fr.addEventListener("load", handleFile);
    fr.readAsDataURL(this.fileInput.current.files[0]);
  }

  render() {
    return (
      <div className="App">
        <Preview userInfo={this.state.userInfo} />
        <Collapsible name="DISEÑA">
          <Design />
        </Collapsible>
        <Collapsible name="RELLENA">
          <Form
            onSubmit={this.handleSubmit}
            image={this.state.image}
            action={this.handleInputChange}
            userInfo={this.state.userInfo}
          />
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
