import React from "react";
import { render } from "react-dom";
import MainPage from "./MainPage";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <MainPage />
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
