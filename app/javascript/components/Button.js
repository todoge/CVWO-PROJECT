import React, {Component} from 'react'

class Button extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            className = props.button.className,
            style = props.button.style
        }
    }
    
    
  render(){ function() {
    return (
      <button className={this.props.className} style={this.props.buttonStyle} onClick={this.handleClick}>
          {this.props.label}
      </button>
    );
  }
}};

export default Button
