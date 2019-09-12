import React from "react";
import defaultImage from "../images/natalie-portman.jpg";
import Button from "./Button";

const Preview = props => {
  return (
    <section className="viewer">
      <div className="viewer__container-background">
        <div className="folded__form js-form">
          <div className="viewer__container-buttom-image">
            <Button className="viewer__buttom" id="reset">
              <i className="far fa-trash-alt"></i>
              <p className="viewer__buttom-reset">RESET</p>
            </Button>
            <div className="viewer__image-container">
              <div className="viewer__image-title">
                <div className="viewer__image-line"></div>
                <div className="viewer__image-text">
                  <h2 className="viewer__image-name js-Name">
                    {/* {props.userInfo.fullName} */}
                    {props.fullName}
                  </h2>
                  <h3 className="viewer__image-profession js-Job">Front-end developer</h3>
                </div>
              </div>
              <img className="viewer__profile-picture js__profile-image" alt="user" src={defaultImage} />
              <div className="viewer__icons">
                <div className="viewer__icon-style">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="viewer__icon-style">
                  <i className="far fa-envelope"></i>
                </div>
                <div className="viewer__icon-style">
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <div className="viewer__icon-style">
                  <i className="fab fa-github-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Preview.defaultProps = {
//   userInfo: {
//     fullName: "Nombre Completo"
//   }
// };
Preview.defaultProps = {
  fullName: "Nombre Completo"
};

export default Preview;
