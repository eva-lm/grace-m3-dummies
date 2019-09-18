import React from "react";

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
export default ResetButton;
