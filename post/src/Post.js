import React, {Component} from 'react';
import Comment from './comment'
import Authors from './Authors'


class Post extends Component {
  constructor(props){
    super(props);

    // initial state
    this.state = {
      body:this.props.body
    };
  }

  changeBody = (e) =>{
    console.log("button clicked");
    const newBody = prompt("what should the new body be?")
    this.setState({
      body: newBody
    });
  }

  render(){

    const allComments = [
    <Comment message = {this.props.comments[0]} />,
    <Comment message = {this.props.comments[1]}/>,
    <Comment message = {this.props.comments[2]}/>
  ];

  const allAuthors = [
    <Authors author = {this.props.allAuthors[0]}/>,
    <Authors author = {this.props.allAuthors[1]}/>,
    <Authors author = {this.props.allAuthors[2]}/>
  ];

  return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <p>{allAuthors}</p>
        <h3>{this.state.body}</h3>
        <button onClick = {this.changeBody}>Edit Body</button>
        <h2>Comments:</h2>
        {allComments}


      </div>
    );
  }
}

export default Post;
