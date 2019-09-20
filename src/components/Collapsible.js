import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/App.scss";

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
    const openClassName = this.state.open ? "open" : "";
    return (
      <section className={`folded__menu js-collapsable ${openClassName}`}>
        <div className="form__box js-collapsable-header" onClick={this.toggle}>
          <div className="form__box__position">
            <i className="far fa-object-ungroup fa-object-ungroup--design"></i>
            <h2 className="design__title">{this.props.name}</h2>
          </div>
          <i className="fas fa-angle-down fa-angle-up--design"></i>
        </div>
        <div className="content">{this.props.children}</div>
      </section>
    );
  }
}
Collapsible.propTypes = {
  name: PropTypes.string,
  children: PropTypes.string
};

export default Collapsible;
