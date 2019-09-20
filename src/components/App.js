import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Generator from "./Generator";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/genarator" component={Generator} />
      </Switch>
    );
  }
}

export default App;
