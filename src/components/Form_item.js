import React from "react";

const Item = props => (
  <div>
    <label htmlFor={props.key} className="folded__form__label">
      {props.label}
    </label>
    <input placeholder={props.placeholder} id={props.key} type={props.type} name={props.key} className={`folded__form__input ${props.inputClassName}`} maxlength="20" required={props.required} />
  </div>
);

export default Item;
