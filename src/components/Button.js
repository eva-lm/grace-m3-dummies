import React from "react";
import PropTypes from "prop-types";

const Button = props => <div className={props.className}></div>;
export default Button;

Button.propTypes = {
  className: PropTypes.string
};
