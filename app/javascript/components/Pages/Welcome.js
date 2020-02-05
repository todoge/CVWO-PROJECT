import React from "react";
import { Link } from "react-router-dom";
import {jumbotron} from "react-bootstrap"

export default () => (
  <div className="vw-50 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Gérer</h1>
        <p className="lead">
          A Todo Application Made Specially For CVWO
        </p>
        <hr className="my-4" />
        <Link
          to="/todos"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Todos
        </Link>
      </div>
    </div>
  </div>
);