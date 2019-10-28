import React, {Component} from 'react';

class Authors extends Component{
    render(){
        return (
            <p>Written By: {this.props.author}</p>
        )
    }
}

export default Authors;