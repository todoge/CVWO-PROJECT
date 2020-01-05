import React from "react";
import ReactDOM from "react-dom";
import Routes from "../routes/AppRouter"
import "../../assets/stylesheets/todo.scss"
    
const rootElement = document.getElementById("root");
ReactDOM.render(<Routes />, rootElement);
