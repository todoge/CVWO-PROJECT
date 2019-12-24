import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../components/MainNav'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<Navbar />, document.getElementById('nav'));

const Welcome = (props) => {
    return (
            <div>
                <h1>
                    Welcome to Todo app
                </h1>
            </div>
            )
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
        <Welcome />,
        document.getElementById("hello"),
    )
});
