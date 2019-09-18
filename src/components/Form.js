import React from "react";
import Item from "./Form_item";
import FileForm from "./FileForm";
const Form = props => {
  const { name, job, photo, email, phone, linkedin, github } = props.userInfo;
  return (
    <div className="folded__form js-form">
      <Item name="name" type="text" label="Nombre completo" placeholder="Ej: Sally Jill" inputClassName="inputName" required="required" value={name} action={props.action}></Item>

      <Item name="job" type="text" label="Puesto" placeholder="Ej: Front-end unicorn" inputClassName="inputJob" required="required" value={job} action={props.action}></Item>

      <label htmlFor="image" className="folded__form__label">
        Imagen de perfil
      </label>

      <FileForm handlePhotoFileForm={props.handlePhotoForm} image={photo}></FileForm>

      <Item name="email" type="email" label="Correo electrónico" placeholder="Ej: sally-hill@gmail.com" inputClassName="mail" required="required" value={email} action={props.action}></Item>

      <Item name="phone" type="tel" label="Teléfono" placeholder="Ej: 555-55-55-55" inputClassName="tel" value={phone} action={props.action}></Item>

      <Item name="linkedin" type="text" label="Linkedin" placeholder="Ej: sally-hill" inputClassName="linkedin" required="required" value={linkedin} action={props.action}></Item>

      <Item name="github" type="text" label="Github" placeholder="Ej: sally-hill" inputClassName="Github" required="required" value={github} action={props.action}></Item>
    </div>
  );
};

export default Form;
