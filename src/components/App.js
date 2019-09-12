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
    this.handlePaletteApp = this.handlePaletteApp.bind(this);
  }

  handlePaletteApp(props){
    console.log(`HandlePaletteApp function recibe: ${props}`)
  }
  
  render() {
    return (
      <div className="App">
        <Preview />
        <Design handlePaletteComponentDesign={this.handlePaletteApp} />
        <Form />
        {Footer}
        <Share />
      </div>
    );
  }
}

export default App;
