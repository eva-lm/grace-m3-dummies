import React from "react";

class FileForm extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
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
    // this.setState({ image: this.fileInput.current.files[0].name });

    const handleFile = () => {
      const imagePreview = fr.result;
      console.log(imagePreview);

      // this.setState({
      //   image: imagePreview
      // });
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
        />
        <input
          type="submit"
          onClick={this.handleSubmit}
          value="Añadir Imagen"
        />
        <div className="folded__form__input2 js__profile-preview">
          <img src={this.props.image} />
        </div>
      </div>
    );
  }
}
export default FileForm;
