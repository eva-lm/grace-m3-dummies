import React from "react";
import Preview from "./Preview";

class Preview_icon extends React.Component {
  render() {
    console.log(this.props);
    const iconMobile = (
      <Preview>
        <div className="viewer__icon-style">
          {this.props.color}
          <i className={this.props.className}></i>
        </div>
      </Preview>
    );
    return { iconMobile };
  }
}
export default Preview_icon;