import React from "react";
import defaultImage from "../images/natalie-portman.jpg";
import Button from "./Button";

const Preview = props => {
  console.log("rendering....")
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
                <div className={`viewer__image-line-color${props.userInfo.palette}`}></div>
                <div className="viewer__image-text">
                  <h2 className={`viewer__image-name-color${props.userInfo.palette}`}>
                    {/* {props.userInfo.fullName} */}
                    {props.fullName}
                  </h2>
                  <h3 className={`viewer__image-profession-color${props.userInfo.palette}`}>Front-end developer</h3>
                </div>
              </div>
              <img className="viewer__profile-picture js__profile-image" alt="user" src={defaultImage} />
              <div className="viewer__icons">
                <div className={`viewer__icon-style-color${props.userInfo.palette}`}>
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className={`viewer__icon-style-color${props.userInfo.palette}`}>
                  <i className="far fa-envelope"></i>
                </div>
                <div className={`viewer__icon-style-color${props.userInfo.palette}`}>
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <div className={`viewer__icon-style-color${props.userInfo.palette}`}>
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

export default Preview;
