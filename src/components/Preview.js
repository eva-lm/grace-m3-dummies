import React from "react";
import defaultImage from "../images/natalie-portman.jpg";
import Button from "./Button";
import ResetButton from "./ResetButton";

const Preview = props => {
  debugger;
  const { palette, name, job, photo } = props.userInfo;
  return (
    <section className="viewer">
      <div className="viewer__container-background">
        <div className="viewer__container-buttom-image">
          <ResetButton resetUp={props.resetButton} />
          <div className="viewer__image-container">
            <div className="viewer__image-title">
              <div className={`viewer__image-line-color${palette}`}></div>
              <div className="viewer__image-text">
                <h2 className={`viewer__image-name-color${palette}`}>
                  {name || "Nombre completo"}
                </h2>
                <h3 className={`viewer__image-profession-color${palette}`}>
                  {job || "Front-end developer"}
                </h3>
              </div>
            </div>
            <img
              className="profile viewer__profile-picture js__profile-image"
              alt="user picture"
              src={photo || defaultImage}
            />
            <div className="viewer__icons">
              <div
                className={`viewer__icon-style-color${palette} ${props.opacity}`}
              >
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div
                className={`viewer__icon-style-color${palette} ${props.opacity}`}
              >
                <i className="far fa-envelope"></i>
              </div>
              <div
                className={`viewer__icon-style-color${palette} ${props.opacity}`}
              >
                <i className="fab fa-linkedin-in"></i>
              </div>
              <div
                className={`viewer__icon-style-color${palette} ${props.opacity}`}
              >
                <i className="fab fa-github-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
