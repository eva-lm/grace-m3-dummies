import React from "react";
import adalabLogo from "../images/logo-adalab-footer.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <small className="footer__product-signature">Awesome profile-cards @2018</small>
        <img src={adalabLogo} alt="Una app de Adalab" className="footer__logo" />
      </footer>
    );
  }
}

export default Footer;
