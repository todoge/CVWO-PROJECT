// Greeting page for users
import React from "react";
import { Link } from "react-router-dom";
import {jumbotron} from "react-bootstrap"
import "../../../assets/stylesheets/homepage"

export default () => (
  <div className="vw-50 vh-50 mt-5 text-white darken-bg d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Gérer</h1>
        <p className="lead">
          A Todo Application Made Specially For CVWO
        </p>
        <hr className="my-4" id="hr-design" />
        <Link
          to="/todos"
          className="btn btn-lg" 
          id="special"
          role="button"
        >
          View Todos
        </Link>
      </div>
    </div>
  </div>
);