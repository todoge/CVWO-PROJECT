import React from 'react'

class NewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: props.todo.title = "",
            description: props.todo.description = ""
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }
  
    handleTitleChange = (event) =>{
        this.setState({
            title: event.target.value
        })
    }
    
    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }
      
    render(){
        return(
                <form role='form' acceptCharset="UTF-8" action="/todos" method="post">
                       <input type='hidden' name="authenticity_token" value= {this.props.authenticityToken} />
                    <div>
                        <label htmlFor='Todo_title'>Title:</label><br/>
                        <input type="text" name='todo[title]' id = 'Todo_title' value={this.state.title} onChange={this.handleTitleChange}/>
                    </div>
                    <div>
                    <label htmlFor='Todo_description'>Description:</label><br/>
                        <textarea name='todo[description]' id = 'Todo_description' value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
        );
    }
};

export default NewForm;