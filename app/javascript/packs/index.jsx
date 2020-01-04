import React from "react";
import ReactDOM from "react-dom";
import "../../assets/stylesheets/todo.scss"

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <h1>Todo</h1>
      </React.Fragment>
    )
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
