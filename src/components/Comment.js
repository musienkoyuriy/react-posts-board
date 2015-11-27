import React, {Component} from 'react';
import BaseComponent from './BaseComponent';
import Post from './Post';

export default (props) => {
  const {author, date, commentText} = props.commentData;
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