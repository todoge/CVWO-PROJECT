//Show user profile
import React from "react"
import axios from "axios"
import Profile from "../components/Profile"

class ShowUser extends React.Component{
    constructor(props) {
       super(props);
       this.state = { user:[] };
     }

    componentDidMount() {
        const {
          match: {
            params: { id }
          }
        } = this.props;

        const url = `/api/v1/users/show/${id}`;
        axios.get(url)
            .then(response => this.setState({ user: response.data }))
            .catch(() => this.props.history.push("/PAGENOTFOUND"));
    }
    
    render(){
        return(
            <Profile user={this.state.user} />
        )
    }

}

export default ShowUser