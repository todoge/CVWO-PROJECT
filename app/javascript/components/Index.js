import React from 'react'

class ShowAll extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todo: this.props.todo
        }
    }
      
    render(){
        <a onClick={this.handleClick} style={{cursor: 'pointer'}}>click me!</a>
        const todo = this.state.todo
        return(
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todo.map( d =>(
                            <tr key={d.id}>
                            <td>{d.title}</td>
                            <td>{d.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
        );
    }
};

export default ShowAll;



