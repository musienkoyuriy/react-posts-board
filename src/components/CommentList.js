import React, {Component} from 'react';
import BaseComponent from './BaseComponent';
import Comment from './Comment';

export default class CommentList extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="comment-list">
        {this.props.comments.map((comment, i) => {
          return <Comment commentData={comment} key={i} />
        })}
      </div>
    );
  }
}