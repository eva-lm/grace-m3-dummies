import React from "react";

const Share = props => {
  return (
    <div className="folded__form js-form">
      <div className="share__button">
        <button type="submit" className="share__button--orange js-shareBtn" onClick={props.getDataFromApi}>
          <i className="far fa-address-card share__button--orange--icon"></i>
          <h2 className="share__button--orange--text">CREAR TARJETA</h2>
        </button>
      </div>
    </div>
  );
}
export default Share;
