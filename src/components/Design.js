import React from "react";
import "../stylesheets/App.scss";

const Design = props => {
  return (
    <div className="design__form ">
      <h3 className="design__subtitle">COLORES</h3>
      <div className="design__form--items">
        <label htmlFor="design1" className="color__box">
          <input className="form__item" type="radio" value="color1" name="design" id="design1" />
          <label htmlFor="design1" className="radio_btn"></label>
          <div className="color__one--one"></div>
          <div className="color__two--one"></div>
          <div className="color__three--one"></div>
        </label>
        <label htmlFor="design2" className="color__box">
          <input className="form__item" type="radio" value="color2" name="design" id="design2" />
          <label htmlFor="design2" className="radio_btn"></label>
          <div className="color__one--two"></div>
          <div className="color__two--two"></div>
          <div className="color__three--two"></div>
        </label>
        <label htmlFor="design3" className="color__box">
          <input className="form__item" type="radio" value="color3" name="design" id="design3" />
          <label htmlFor="design3" className="radio_btn"></label>
          <div className="color__one--three"></div>
          <div className="color__two--three"></div>
          <div className="color__three--three"></div>
        </label>
        <label htmlFor="design4" className="color__box">
          <input className="form__item" type="radio" value="color4" name="design" id="design4" />
          <label htmlFor="design4" className="radio_btn"></label>
          <div className="color__one--four"></div>
          <div className="color__two--four"></div>
          <div className="color__three--four"></div>
        </label>
        <label htmlFor="design5" className="color__box">
          <input className="form__item" type="radio" value="color5" name="design" id="design5" />
          <label htmlFor="design5" className="radio_btn"></label>
          <div className="color__one--five"></div>
          <div className="color__two--five"></div>
          <div className="color__three--five"></div>
        </label>
        <label htmlFor="design6" className="color__box">
          <input className="form__item" type="radio" value="color6" name="design" id="design6" />
          <label htmlFor="design6" className="radio_btn"></label>
          <div className="color__one--six"></div>
          <div className="color__two--six"></div>
          <div className="color__three--six"></div>
        </label>
      </div>
    </div>
  );
};

export default Design;
