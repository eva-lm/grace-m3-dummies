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

    const handleFile = () => {
      const imagePreview = fr.result;
      this.setState({
        image: imagePreview
      });
      this.props.handlePhotoFileForm(this.state.image);
    };
    const fr = new FileReader();
    fr.addEventListener("load", handleFile);
    fr.readAsDataURL(this.fileInput.current.files[0]);
  }

  render() {
    return (
      <div className="folded__form__section">
        <input
          type="file"
          ref={this.fileInput}
          name="image"
          id="image"
          className="folded__form__inputFile js__profile-upload-btn"
          required
          onChange={this.handleSubmit}
        />
        <label
          htmlFor="image"
          className="folded__form__btnAdd js__profile-trigger"
        >
          Añadir Imagen
        </label>
        <div className="folded__form__input2 js__profile-preview">
          <img className="profile" src={this.props.image} /* alt="profile" */ />
        </div>
      </div>
    );
  }
}
export default FileForm;
