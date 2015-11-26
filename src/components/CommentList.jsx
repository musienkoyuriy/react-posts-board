import React, {Component} from 'react';
import BaseComponent from './BaseComponent.jsx';
import Comment from './Comment.jsx';

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