import React from "react";
import PropTypes from "prop-types";

class ColorPalette extends React.Component {
  constructor(props) {
    super(props);
    this.handlePalette = this.handlePalette.bind(this);
  }

  checkPalette() {
    return this.props.currentValue === this.props.id ? true : false;
  }

  handlePalette() {
    this.props.handlePaletteDesignColors(this.props.id);
  }

  render() {
    return (
      <label htmlFor={this.props.for} className="color__box">
        <input
          type="radio"
          htmlFor={this.props.for}
          className="radio_btn"
          name="design"
          value={this.props.value}
          onChange={this.handlePalette}
          checked={this.checkPalette()}
        />
        <div className={`color__one--${this.props.number}`}></div>
        <div className={`color__two--${this.props.number}`}></div>
        <div className={`color__three--${this.props.number}`}></div>
      </label>
    );
  }
}

export default ColorPalette;
