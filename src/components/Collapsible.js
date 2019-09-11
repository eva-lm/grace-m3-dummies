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
    const openClassName = this.state.open === true ? "js-collapsable.open" : "";
    return (
      <section className={`design js-collapsable ${openClassName}`}>
        <div className="design__box js-collapsable-header" onClick={this.toggle}>
          <div className="form__box__position">
            <i className="far fa-object-ungroup fa-object-ungroup--design"></i>
            <h2 className="design__title">{this.props.name}</h2>
          </div>
          <i className="fas fa-angle-down fa-angle-up--design"></i>
        </div>
        <div className="content">{this.props.children}</div>
      </section>
    );

    // <div className={openClassName}>
    //   <div>
    //     Share
    //     <span onClick={this.toggle}>ARROW</span>
    //   </div>
    //   <div className="collapsible-content"></div>
    // </div>
  }
}

export default Collapsible;
