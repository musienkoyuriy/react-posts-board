import React, {PropTypes, Component} from 'react'
import Comment from '../Comment/Comment'
import CSSModules from 'react-css-modules'
import styles from './commentlist.css'

const CommentList = (props) => {
  return (
    <div styleName="comment-list">
      { props.comments.map((comment, i) => {
        return <Comment commentData={ comment } key={ i } />
      }) }
    </div>
  )
}
CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    commentText: PropTypes.string.isRequired
  })).isRequired
}

export default CSSModules(CommentList, styles)
