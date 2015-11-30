import React, {Component} from 'react';
import BaseComponent from '../BaseComponent';
import Comment from '../Comment/Comment';
import CSSModules from 'react-css-modules';
import styles from './commentlist.css';

let CommentList = (props) => {
  return (
      <div styleName="comment-list">
        {props.comments.map((comment, i) => {
          return <Comment commentData={comment} key={i} />
        })}
      </div>
    );
}
CommentList.propTypes = {
	comments: React.PropTypes.arrayOf(React.PropTypes.shape({
		author: React.PropTypes.string.isRequired,
		date: React.PropTypes.string.isRequired,
		commentText: React.PropTypes.string.isRequired
	})).isRequired
};

export default CSSModules(CommentList, styles);