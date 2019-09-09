import React from "react";
import Design_color from "./Design_color";

class Design extends React.Component {
  
  render() {
    return (
      <section className="design js-collapsable">
        <div className="design__box js-collapsable-header">
          <div className="form__box__position">
            <i className="far fa-object-ungroup fa-object-ungroup--design"></i>
            <h2 className="design__title">DISEÑA</h2>
          </div>
          <i className="fas fa-angle-down fa-angle-up--design"></i>
        </div>
        <div className="content">
          <div className="design__form ">
            <h3 className="design__subtitle">COLORES</h3>
            <div className="design__form--items">
              <Design_color for="design1" value="color1" id="color1" number="one"/>
              <Design_color for="design2" value="color2" id="color2" number="two"/>
              <Design_color for="design3" value="color3" id="color3" number="three"/>
              <Design_color for="design4" value="color4" id="color4" number="four"/>
              <Design_color for="design5" value="color5" id="color5" number="five"/>
              <Design_color for="design6" value="color6" id="color6" number="six"/>
              {/* <label for="design2" className="color__box">
                <input
                  className="form__item"
                  type="radio"
                  value="color2"
                  name="design"
                  id="design2"
                />
                <label for="design2" className="radio_btn"></label>
                <div className="color__one--two"></div>
                <div className="color__two--two"></div>
                <div className="color__three--two"></div>
              </label>
              <label for="design3" className="color__box">
                <input
                  className="form__item"
                  type="radio"
                  value="color3"
                  name="design"
                  id="design3"
                />
                <label for="design3" className="radio_btn"></label>
                <div className="color__one--three"></div>
                <div className="color__two--three"></div>
                <div className="color__three--three"></div>
              </label>
              <label for="design4" className="color__box">
                <input
                  className="form__item"
                  type="radio"
                  value="color4"
                  name="design"
                  id="design4"
                />
                <label for="design4" className="radio_btn"></label>
                <div className="color__one--four"></div>
                <div className="color__two--four"></div>
                <div className="color__three--four"></div>
              </label>
              <label for="design5" className="color__box">
                <input
                  className="form__item"
                  type="radio"
                  value="color5"
                  name="design"
                  id="design5"
                />
                <label for="design5" className="radio_btn"></label>
                <div className="color__one--five"></div>
                <div className="color__two--five"></div>
                <div className="color__three--five"></div>
              </label>
              <label for="design6" className="color__box">
                <input
                  className="form__item"
                  type="radio"
                  value="color6"
                  name="design"
                  id="design6"
                />
                <label for="design6" className="radio_btn"></label>
                <div className="color__one--six"></div>
                <div className="color__two--six"></div>
                <div className="color__three--six"></div>
              </label> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Design;
