import React from "react";

class Design extends React.Component {
  render() {
    return (
      <section className="design">
        <div className="design__box">
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
              <label for="design1" className="color__box">
                <input
                  className="form__item"
                  type="radio"
                  value="color1"
                  name="design"
                  id="design1"
                />
                <label for="design1" className="radio_btn"></label>
                <div className="color__one--one"></div>
                <div className="color__two--one"></div>
                <div className="color__three--one"></div>
              </label>
              <label for="design2" className="color__box">
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
              </label>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Design;
