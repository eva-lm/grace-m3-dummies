import React from "react";

const Item = props => (
  <div>
    <label htmlFor={props.name} className="folded__form__label">
      {props.label}
    </label>
    <input value={props.value} placeholder={props.placeholder} id={props.name} type={props.type} name={props.name} className={`folded__form__input ${props.inputClassName}`} maxLength="20" required={props.required} onChange={props.action} />
  </div>
);

export default Item;
