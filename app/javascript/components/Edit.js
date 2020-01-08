import React from "react"
import {Link} from "react-router-dom"

class EditTodo extends React.Component {
    constructor(props) {
    super(props);
    this.state = { todo: { title: "", description: "" } };
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




  render() {
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
                  value={this.state.todo.title}
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              
              <label htmlFor="instruction">Description</label>
              <textarea
                className="form-control"
                value={this.state.todo.description}
                name="description"
                rows="5"
                required
                onChange={this.onChange}
              />
              <button type="submit" className="btn custom-button mt-3">
                Edit!
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

export default EditTodo;