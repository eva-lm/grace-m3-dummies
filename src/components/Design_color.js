import React from 'react';

// id es quien determina el color seleccionado. Exportar id a state.
class ColorPalette extends React.Component{
  constructor(props){
    super(props);
    this.handlePalette=this.handlePalette.bind(this);
  }

  handlePalette (){
    this.props.handlePaletteDesignColors(this.props.id);
  } 
    render(){
        return (
            <label HTMLfor={this.props.for} className="color__box">
            <input type="radio" HTMLfor={this.props.for} className="radio_btn" name="design" value={this.props.value} onClick={this.handlePalette}/>
            <div className={`color__one--${this.props.number}`}></div>
            <div className={`color__two--${this.props.number}`}></div>
            <div className={`color__three--${this.props.number}`}></div>
          </label>
        )
    };
}

// ColorPalette.propTypes = {
//   handlePaletteDesignColors: function
// }

export default ColorPalette;