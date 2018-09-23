import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import navItems from "./config/navItems";
import Nav from "./Nav";
import About from "./Views/About";
import Home from "./Views/Home";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className={"flex avenir flex-column"}>
          <Nav items={navItems} />
          <Wrapper>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
