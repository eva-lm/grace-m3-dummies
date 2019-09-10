import React from "react";

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }
  render() {
    const mainClassName = this.state.open === true ? 'collapsible-open' : '';
    return (
      <div className={mainClassName}>
        <div>Share
          <span onClick={this.toggle}>ARROW</span>
        </div>
        <div className="collapsible-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Collapsible;
