import React from "react";
import awesomeLogo from "../images/awesome.svg";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={awesomeLogo} alt="" className="header__img" />
        <h1 className="header__title">Crea tu tarjeta de visita</h1>
        <p className="header__text">Crea mejores contactos profesionales de forma fácil y cómoda</p>
        <div className="header__description">
          <div className="header__description-icon">
            <i className="far fa-object-ungroup"></i>
            <p className="header__description-icon-text">Diseña</p>
          </div>
          <div className="header__description-icon">
            <i className="far fa-keyboard"></i>
            <p className="header__description-icon-text">Rellena</p>
          </div>
          <div className="header__description-icon">
            <i className="fas fa-share-alt"></i>
            <p className="header__description-icon-text">Comparte</p>
          </div>
        </div>
        <button className="header__btn">
          <a className="header__link" href="./work-space.html">
            comenzar
          </a>
        </button>
      </header>
    );
  }
}
export default Header;
