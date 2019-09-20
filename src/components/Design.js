import React from "react";
import "../stylesheets/App.scss";
import ColorPalette from "./ColorPalette";

const Design = props => {
    return (
    <div className="design__form ">
      <h3 className="design__subtitle">COLORES</h3>
      <div className="design__form--items">
        <ColorPalette
          htmlFor="design1"
          value="color1"
          id={1}
          number="one"
          currentValue={props.palette}
          handlePaletteDesignColors={props.handlePaletteDesign}
        />
        <ColorPalette
          htmlFor="design2"
          value="color2"
          id={2}
          number="two"
          currentValue={props.palette}
          handlePaletteDesignColors={props.handlePaletteDesign}
        />
        <ColorPalette
          htmlFor="design3"
          value="color3"
          id={3}
          number="three"
          currentValue={props.palette}
          handlePaletteDesignColors={props.handlePaletteDesign}
        />
        <ColorPalette
          htmlFor="design4"
          value="color4"
          id={4}
          number="four"
          currentValue={props.palette}
          handlePaletteDesignColors={props.handlePaletteDesign}
        />
        <ColorPalette
          htmlFor="design5"
          value="color5"
          id={5}
          number="five"
          currentValue={props.palette}
          handlePaletteDesignColors={props.handlePaletteDesign}
        />
        <ColorPalette
          htmlFor="design6"
          value="color6"
          id={6}
          number="six"
          currentValue={props.palette}
          handlePaletteDesignColors={props.handlePaletteDesign}
        />
      </div>
    </div>
  );
};

export default Design;
