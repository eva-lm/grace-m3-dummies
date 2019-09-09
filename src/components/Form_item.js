import React from "react";

const Item = props => (
  <div>
    <label htmlFor={props.name} className="folded__form__label">
      {props.label}
    </label>
    <input placeholder="Ej: Sally Jill" id={props.name} type="text" name={props.name} className={`folded__form__input ${props.inputClassName}`} maxlength="20" required />
  </div>
);

export default Item;
