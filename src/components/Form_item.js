import React from "react";

const Item = props => (
  <div key={props.key}>
    <label htmlFor={props.key} className="folded__form__label">
      {props.label}
    </label>
    <input value={props.value} placeholder={props.placeholder} id={props.key} type={props.type} name={props.key} className={`folded__form__input ${props.inputClassName}`} maxLength="20" required={props.required} onChange={props.action} />
  </div>
);

export default Item;
