import React from "react";
import PropTypes from "prop-types";

class ResetButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  handleClickReset() {
    this.props.resetUp();
  }

  render() {
    return (
      <button
        className="viewer__buttom"
        id="reset"
        onClick={this.handleClickReset}
      >
        <i className="far fa-trash-alt"></i>
        <p className="viewer__buttom-reset">RESET</p>
      </button>
    );
  }
}
ResetButton.propTypes = {
  resetUp: PropTypes.func,
  handleClickReset: PropTypes.func
};
export default ResetButton;
