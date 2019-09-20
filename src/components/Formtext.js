import React from "react";
//ya estas las porptypes de form.js

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

export default FormText;
