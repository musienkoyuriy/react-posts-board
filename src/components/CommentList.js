import React, {Component} from 'react';
import BaseComponent from './BaseComponent';
import Comment from './Comment';

export default (props) => {
  return (
      <div className="comment-list">
        {props.comments.map((comment, i) => {
          return <Comment commentData={comment} key={i} />
        })}
      </div>
    );
}
