import React from "react";

class FileForm extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      image: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    // this.setState((prevState, props) => {
    //   const newUser = {
    //     ...prevState.userInfo,
    //     image: this.fileInput.current.files[0].name
    //   };
    //   console.log(newUser);
    //   return { userInfo: newUser };
    // });
    this.setState({ image: this.fileInput.current.files[0] });

    const handleFile = () => {
      const imagePreview = fr.result;
      console.log(imagePreview);
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
      <div>
        <input
          type="file"
          ref={this.fileInput}
          name="image"
          id="image"
          className="folded__form__inputFile js__profile-upload-btn"
          required
          onChange={this.handleSubmit}
        />
        <div className="folded__form__input2 js__profile-preview">
          <img src={this.state.image} alt="profile" />
        </div>
      </div>
    );
  }
}
export default FileForm;
