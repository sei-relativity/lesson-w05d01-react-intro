import React, {Component} from 'react';
import Comment from './comment'
import Authors from './Authors'


class Post extends Component {
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
        <h3>{this.props.body}</h3>
        <h2>Comments:</h2>
        {allComments}


      </div>
    );
  }
}

export default Post;
