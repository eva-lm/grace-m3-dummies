import React from "react";
import Preview from "./Preview";

class Preview_icon extends React.Component {
  render() {
    const iconMobile = (
      <div className="viewer__icon-style">
        <i className={props.className}></i>
      </div>
    );
    return { iconMobile };
  }
}
export default Preview_icon;
