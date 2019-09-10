import React from "react";
import "../stylesheets/App.scss";
import Footer from "./Footer";
import Preview from "./Preview";
import Design from "./Design";
import Form from "./Form";
import Share from "./Share";
import Collapsible from "./Collapsible";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsible: 'content'
    };
    this.handleClick = this.handleClick.bind(this);
  }





  // handleClick() {
  //   console.log('pasoooo de tu cara')
  //   this.setState((prevState, props) => ({
  //     collapsible: prevState.collapsible === 'content' ? 'js-collapsable.open' : 'content'
  //   }));
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <Preview />
  //       <Design collapsible={this.state.collapsible} onClick={this.handleClick} />
  //       <Design />
  //       <Form />
  //       <Footer />
  //       <Share />
  //     </div>
  //   );
  // }

  handleClick() {
    console.log('pasoooo de tu cara')
    this.setState((prevState, props) => ({
      collapsible: prevState.collapsible === '' ? 'js-collapsable.open' : ''
    }));
  }
  render() {
    return (
      <div className="App">

        <Collapsible>
          <Design />
        </Collapsible>

        <Collapsible>
          adios
        </Collapsible>

        <Preview />
        <Design onClick={this.handleClick} collapsible={this.state.collapsible} />
        <Design />
        <Form />
        <Footer />
        <Share />
      </div>
    );
  }
}

export default App;
