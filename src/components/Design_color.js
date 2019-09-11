import React from 'react';

// id es quien determina el color seleccionado. Exportar id a state.
class ColorPalette extends React.Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick (ev){
    this.props.handlePalette({
      id: this.props.id,
      date: Date.now()
    });
  } 
    render(){
      debugger;
        return (
            <label HTMLfor={this.props.for} className="color__box">
            <input type="radio" HTMLfor={this.props.for} className="radio_btn" name="design" value={this.props.value}
            onClick={this.handleClick}/>
            <div className={`color__one--${this.props.number}`}></div>
            <div className={`color__two--${this.props.number}`}></div>
            <div className={`color__three--${this.props.number}`}></div>
          </label>
        )
    };
}

export default ColorPalette;