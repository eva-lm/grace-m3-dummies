import React from "react";
import defaultImage from "../images/natalie-portman.jpg";

class Preview extends React.Component {
  render() {
    return (
      <section class="viewer">
        <div class="viewer__container-background">
          <div class="folded__form js-form">
            <div class="viewer__container-buttom-image">
              <buttom class="viewer__buttom" id="reset">
                <i class="far fa-trash-alt"></i>
                <p class="viewer__buttom-reset">RESET</p>
              </buttom>
              <div class="viewer__image-container">
                <div class="viewer__image-title">
                  <div class="viewer__image-line"></div>
                  <div class="viewer__image-text">
                    <h2 class="viewer__image-name js-Name">Nombre Apellido</h2>
                    <h3 class="viewer__image-profession js-Job">Front-end developer</h3>
                  </div>
                </div>
                <img class="viewer__profile-picture js__profile-image" alt="user" src={defaultImage} />
                <div class="viewer__icons">
                  <div class="viewer__icon-style">
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                  <div class="viewer__icon-style">
                    <i class="far fa-envelope"></i>
                  </div>
                  <div class="viewer__icon-style">
                    <i class="fab fa-linkedin-in"></i>
                  </div>
                  <div class="viewer__icon-style">
                    <i class="fab fa-github-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Preview;
