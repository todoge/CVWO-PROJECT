import React from "react";
import { Link } from "react-router-dom";

class ShowTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: { title: "", description: "" } };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/v1/show/${id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ todo: response }))
      .catch(() => this.props.history.push("/todos/error"));
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  render() {
    const { todo } = this.state;

    return (
        <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-3">
                        
                    </div>
                    <div className="col-6">
                        <div className="card ">
                            <h5 className="card-header">Show Todo</h5>
                            <div className="card-body">
                                <h5 className="card-title">{this.state.todo.title}</h5>
                                <p className="card-text">{this.state.todo.description}</p>
                                <Link to={"/todos/" + this.state.todo.id + "/edit"}>Edit Me</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <Link to="/todos/new" className="btn btn-primary">New Todo</Link>
                    </div>
                </div>
            </div>
    );
  }

}

export default ShowTodo;