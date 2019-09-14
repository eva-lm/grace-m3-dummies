import React from "react";
import Item from "./Form_item";
//import Button from "./Button";
import FileForm from "./FileForm";
class Form extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="folded__form js-form">
        <Item
          name="fullName"
          type="text"
          label="Nombre completo"
          placeholder="Ej: Sally Jill"
          inputClassName="inputName"
          required="required"
          value={this.props.userInfo.fullName}
          action={this.props.action}
        ></Item>

        <Item
          name="profession"
          type="text"
          label="Puesto"
          placeholder="Ej: Front-end unicorn"
          inputClassName="inputJob"
          required="required"
          value={this.props.userInfo.profession}
          action={this.props.action}
        ></Item>

        <label htmlFor="image" className="folded__form__label">
          Imagen de perfil
        </label>
        <label>
          <FileForm image={this.props.image}></FileForm>
        </label>
        <Item
          key="emailAddress"
          type="email"
          label="Correo electrónico"
          placeholder="Ej: sally-hill@gmail.com"
          inputClassName="mail"
          required="required"
        ></Item>

        <div className="folded__form__section">
          <Button
            htmlFor="image"
            className="folded__form__btnAdd js__profile-trigger"
          >
            Añadir Imagen
          </Button>
          <input
            type="file"
            name="image"
            id="image"
            className="folded__form__inputFile js__profile-upload-btn"
            required
          />
          <div className="folded__form__input2 js__profile-preview"></div>
        </div>

        <Item
          name="emailAddress"
          type="email"
          label="Correo electrónico"
          placeholder="Ej: sally-hill@gmail.com"
          inputClassName="mail"
          required="required"
          value={this.props.userInfo.emailAddress}
          action={this.props.action}
        ></Item>

        <Item
          name="telephone"
          type="tel"
          label="Teléfono electrónico"
          placeholder="Ej: 555-55-55-55"
          inputClassName="tel"
          value={this.props.userInfo.telephone}
          action={this.props.action}
        ></Item>

        <Item
          name="Linkedin"
          type="text"
          label="Linkedin"
          placeholder="Ej: sally-hill"
          inputClassName="linkedin"
          required="required"
          value={this.props.userInfo.Linkedin}
          action={this.props.action}
        ></Item>

        <Item
          name="Github"
          type="text"
          label="Github"
          placeholder="Ej: sally-hill"
          inputClassName="Github"
          required="required"
          value={this.props.userInfo.Github}
          action={this.props.action}
        ></Item>
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
