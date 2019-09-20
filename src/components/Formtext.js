import React from "react";
import PropTypes from "prop-types";

const FormText = props => {
  const {
    name,
    label,
    value,
    placeholder,
    type,
    inputClassName,
    required,
    action
  } = props;

  return (
    <div>
      <label htmlFor={name} className="folded__form__label">
        {label}
      </label>
      <input
        value={value}
        placeholder={placeholder}
        id={name}
        type={type}
        name={name}
        className={`folded__form__input ${inputClassName}`}
        maxLength="20"
        required={required}
        onChange={action}
      />
    </div>
  );
};
FormText.propType = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  inputClassName: PropTypes.string,
  required: PropTypes.string,
  action: PropTypes.string
};

export default FormText;
