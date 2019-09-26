import React from "react";
import PropTypes from "prop-types";
import FormText from "./Formtext";
import FileForm from "./FileForm";

const Form = props => {
  const { name, job, photo, email, phone, linkedin, github } = props.userInfo;
  return (
    <div className="folded__form js-form">
      <FormText
        name="name"
        type="text"
        label="Nombre completo "
        placeholder="Ej: Sally Jill"
        inputClassName="inputName"
        required="required"
        value={name}
        action={props.action}
        asterik="*"
      ></FormText>

      <FormText
        name="job"
        type="text"
        label="Puesto"
        placeholder="Ej: Front-end unicorn"
        inputClassName="inputJob"
        required="required"
        value={job}
        action={props.action}
        asterik="*"
      ></FormText>

      <label htmlFor="image" className="folded__form__label">
        Imagen de perfil <span className="asterik">*</span>
      </label>

      <FileForm
        handlePhotoFileForm={props.handlePhotoForm}
        image={photo}
      ></FileForm>

      <FormText
        name="email"
        type="email"
        label="Correo electrónico"
        placeholder="Ej: sally-hill@gmail.com"
        inputClassName="mail"
        required="required"
        value={email}
        action={props.action}
        asterik="*"
      ></FormText>

      <FormText
        name="phone"
        type="tel"
        label="Teléfono"
        placeholder="Ej: 555-55-55-55"
        inputClassName="tel"
        value={phone}
        action={props.action}
      ></FormText>

      <FormText
        name="linkedin"
        type="text"
        label="Linkedin"
        placeholder="Ej: sally-hill"
        inputClassName="linkedin"
        required="required"
        value={linkedin}
        action={props.action}
        asterik="*"
      ></FormText>

      <FormText
        name="github"
        type="text"
        label="Github"
        placeholder="Ej: sally-hill"
        inputClassName="Github"
        required="required"
        value={github}
        action={props.action}
        asterik="*"
      ></FormText>
    </div>
  );
};

Form.prototype = {
  userInfo: PropTypes.shape({
    name: PropTypes.string,
    job: PropTypes.string,
    photo: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    action: PropTypes.string
  })
};

export default Form;
