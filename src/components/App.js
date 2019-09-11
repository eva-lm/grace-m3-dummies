import React from "react";
import "../stylesheets/App.scss";
import Footer from "./Footer";
import Preview from "./Preview";
import Design from "./Design";
import Form from "./Form";
import Share from "./Share";

class App extends React.Component {
  constructor(){
    super();
    this.handlePalette = this.handlePalette.bind(this);
  }
  
  handlePalette(palette){
    debugger
    console.log("Paso por aqui")
    return [1,2,3]
  }
  render() {
    return (
      <div className="App">
        <Preview />
        <Design handlePaletteComponentDesign={this.handlePalette} />
        <Form />
        {Footer}
        <Share />
      </div>
    );
  }
}

export default App;
