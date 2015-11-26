import React, {Component} from 'react';
import BaseComponent from './Post.jsx';

export default class Comment extends Post {
  constructor(props) {
    super(props);
    
    this.state = {
      author: 'Your name'
    };
  }

  render() {
    const {author, date, text} = this.props.commentData;

    return (
      <div className="post comment">
        <div className="name">{author}</div>
        <div className="text">{text}</div>
        <div>
          <div className="date">
            <span>{date}</span> | <span className="comment-link"><a href="#" onClick={this._onCommentClickHandler}>Comment</a></span>
          </div>
          <div className="like-container">
            <span><a href="#" onClick={this._onLikeClickHandler}>Like</a> {this.state.likes}</span>
          </div>
        </div>
      </div>
    );
  }
} 