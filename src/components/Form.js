import React from "react";
import Item from "./Form_item";

class Form extends React.Component {
  render() {
    return (
      <div class="folded__form js-form">
        <Item key="fullName" type="text" label="Nombre completo" placeholder="Ej: Sally Jill" inputClassName="inputName" required="required"></Item>

        <Item key="profession" type="text" label="Puesto" placeholder="Ej: Front-end unicorn" inputClassName="inputJob" required="required"></Item>

        <label forHtml="image" class="folded__form__label">
          Imagen de perfil
        </label>

        <div class="folded__form__section">
          <buttton for="image" class="folded__form__btnAdd js__profile-trigger">
            Añadir Imagen
          </buttton>
          <input type="file" name="image" id="image" class="folded__form__inputFile js__profile-upload-btn" required />
          <div class="folded__form__input2 js__profile-preview"></div>
        </div>

        <Item key="emailAddress" type="email" label="Correo electrónico" placeholder="Ej: sally-hill@gmail.com" inputClassName="mail" required="required"></Item>

        <Item key="telephone" type="tel" label="Teléfono electrónico" placeholder="Ej: 555-55-55-55" inputClassName="tel"></Item>

        <Item key="Linkedin" type="text" label="Linkedin" placeholder="Ej: sally-hill" inputClassName="linkedin" required="required"></Item>

        <Item key="Github" type="text" label="Github" placeholder="Ej: sally-hill" inputClassName="Github" required="required"></Item>
      </div>
    );
  }
}

export default Form;
