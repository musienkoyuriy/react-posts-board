import React, {Component} from 'react';
import BaseComponent from './BaseComponent.jsx';

export default class CommentList extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="comment-list">
          {this.props.comments.map((comment) => {
            return <Comment commentData={comment} />
          })}
      </div>
    );
  }
}