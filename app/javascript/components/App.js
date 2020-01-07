import React from "react"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: []
    };
  }

  componentDidMount() {
      const url = "/todos/Todo";
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ Todos: response }))
        .catch(() => this.props.history.push("/scc"));
  }
  
  render(){
      return(
            <React.Fragment>
                {console.log(this.state.Todos)}
            </React.Fragment>
        )
  }
}

export default App