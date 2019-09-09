import React from 'react';

class Color_palette extends React.Component{
    render(){
        return (
            <label for={this.props.for} className="color__box">
            <input
              className="form__item"
              type="radio"
              value={this.props.value}
              name="design"
              id={this.props.id}
            />
            <label for={this.props.for} className="radio_btn"></label>
            <div className={`color__one--${this.props.number}`}></div>
            <div className={`color__two--${this.props.number}`}></div>
            <div className={`color__three--${this.props.number}`}></div>
          </label>
        )
    };
}

export default Color_palette;