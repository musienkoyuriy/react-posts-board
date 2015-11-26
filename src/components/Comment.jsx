import React, {Component} from 'react';
import BaseComponent from './BaseComponent.jsx';
import Post from './Post.jsx';

export default class Comment extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {author, date, commentText} = this.props.commentData;

    return (
      <div className="post comment">
        <div className="name">{author}</div>
        <div className="text">{commentText}</div>
        <div>
          <div className="date">
            <span>{date}</span>
          </div>
        </div>
      </div>
    );
  }
} 