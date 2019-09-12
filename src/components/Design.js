import React from "react";
import "../stylesheets/App.scss";
import ColorPalette from "./Design_color";

class Design extends React.Component {
   constructor(){
   super();
  //   this.getColorId = this.getColorId.bind(this);
  //   console.log(getColorId);
  }

  handlePaletteComponentDesign (props) {}
  //   console.log(props);
  //   console.log("handlePaletteComponentDesign")
  //   debugger
  //}


  render() {
    return (
          <div className="design__form ">
            <h3 className="design__subtitle">COLORES</h3>
            <div className="design__form--items">
              <ColorPalette for="design1" value="color1" id={1} number="one" handlePaletteDesignColors={this.props.handlePaletteDesign}/>
              <ColorPalette for="design2" value="color2" id={2} number="two" handlePaletteDesignColors={this.props.handlePaletteDesign}/>
              <ColorPalette for="design3" value="color3" id={3} number="three" handlePaletteDesignColors={this.props.handlePaletteDesign}/>
              <ColorPalette for="design4" value="color4" id={4} number="four" handlePaletteDesignColors={this.props.handlePaletteDesign}/>
              <ColorPalette for="design5" value="color5" id={5} number="five" handlePaletteDesignColors={this.props.handlePaletteDesign}/>
              <ColorPalette for="design6" value="color6" id={6} number="six" handlePaletteDesignColors={this.props.handlePaletteDesign}/>
            </div>
          </div>
    );
  }
}

export default Design;
