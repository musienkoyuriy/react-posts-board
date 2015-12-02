import React, {Component} from 'react';
import BaseComponent from '../BaseComponent';
import Post from '../Post/Post';
import CSSModules from 'react-css-modules';
import styles from './comment.css';

let Comment = (props, context) => {
  const { author, date, commentText } = props.commentData;
    return (
      <div className="post" styleName="comment">
        <div>{ author }</div>
        <div className="text">{ commentText }</div>
        <div>
          <div className="date">
            <span>{ date }</span>
          </div>
        </div>
      </div>
    );
}

export default CSSModules(Comment, styles);