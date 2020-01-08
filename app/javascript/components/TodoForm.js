import React, {useState} from "react"


class TodoForm extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "/api/v1/todos/create";
    const { title, description } = this.state;

    if (title.length === 0 || description.length === 0)
      return;

    const body = {
      title,
      description
    };

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new todo
            </h1>
            
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="recipeName">Title</label>
                <input
                  type="text"
                  name="title"
                  id="recipeName"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              
              <label htmlFor="instruction">Description</label>
              <textarea
                className="form-control"
                id="instruction"
                name="description"
                rows="5"
                required
                onChange={this.onChange}
              />
              <button type="submit" className="btn custom-button mt-3">
                Add!
              </button>
              <Link to="/todos" className="btn btn-link mt-3">
                Back to todos
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
  }
}