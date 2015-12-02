import React, {PropTypes, Component} from 'react';
import BaseComponent from '../BaseComponent';
import Comment from '../Comment/Comment';
import CSSModules from 'react-css-modules';
import styles from './commentlist.css';

let CommentList = (props, context) => {
  return (
      <div styleName="comment-list">
        {props.comments.map((comment, i) => {
          return <Comment commentData={comment} key={i} />
        })}
      </div>
    );
}
CommentList.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.shape({
		author: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		commentText: PropTypes.string.isRequired
	})).isRequired
};

export default CSSModules(CommentList, styles);