import React from "react";
import Item from "./Form_item";
//import Button from "./Button";
import FileForm from "./FileForm";
class Form extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="folded__form js-form">
        <Item name="name" type="text" label="Nombre completo" placeholder="Ej: Sally Jill" inputClassName="inputName" required="required" value={this.props.userInfo.name} action={this.props.action}></Item>

        <Item name="job" type="text" label="Puesto" placeholder="Ej: Front-end unicorn" inputClassName="inputJob" required="required" value={this.props.userInfo.job} action={this.props.action}></Item>

        <label htmlFor="image" className="folded__form__label">
          Imagen de perfil
        </label>

        <FileForm handlePhotoFileForm={this.props.handlePhotoForm} image={this.props.image}></FileForm>

        <Item name="email" type="email" label="Correo electrónico" placeholder="Ej: sally-hill@gmail.com" inputClassName="mail" required="required" value={this.props.userInfo.email} action={this.props.action}></Item>

        <Item name="phone" type="tel" label="Teléfono electrónico" placeholder="Ej: 555-55-55-55" inputClassName="tel" value={this.props.userInfo.phone} action={this.props.action}></Item>

        <Item name="linkedin" type="text" label="Linkedin" placeholder="Ej: sally-hill" inputClassName="linkedin" required="required" value={this.props.userInfo.linkedin} action={this.props.action}></Item>

        <Item name="github" type="text" label="Github" placeholder="Ej: sally-hill" inputClassName="Github" required="required" value={this.props.userInfo.github} action={this.props.action}></Item>
      </div>
    );
  }
}

export default Form;

/* <div className="folded__form__section">
          <Button htmlFor="image" className="folded__form__btnAdd js__profile-trigger">
            Añadir Imagen
          </Button>
          <input type="file" name="image" id="image" className="folded__form__inputFile js__profile-upload-btn" required />
          <div className="folded__form__input2 js__profile-preview"></div>
        </div> */
