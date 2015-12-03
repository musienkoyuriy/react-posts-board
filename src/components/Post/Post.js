import React, {Component} from 'react';
import BaseComponent from '../BaseComponent';
import CommentList from '../CommentList/CommentList';
import CSSModules from 'react-css-modules';
import styles from './post.css';

class Post extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this._bind('_onLikeClickHandler', '_onCommentClickHandler', '_onClickCommentButtonHandler' ,'_getAddCommentArea');
    this.state = {
      liked: false,
      comments: [],
      addCommentAreaActive: false
    };
  }

  _onLikeClickHandler() {
    const {likeUnlikePost} = this.props;
    const {id} = this.props.postData;
    likeUnlikePost(id);
  }

  _onClickCommentButtonHandler() {
    let commentText = this.commentText.value;
    const {addComment} = this.props;
    const {id} = this.props.postData;
    let comments;
    if (!commentText) {
      return;
    }
    addComment(id, commentText);
    this.commentText.value = '';
  }

  _onCommentClickHandler() {
    this.setState({
      addCommentAreaActive: true
    });
  }

  _getAddCommentArea() {
    return (
      <div className="add-comment-area">
        <textarea ref={ (ref) => this.commentText = ref } className="form-control" rows="2" placeholder="Your comment"></textarea>
        <button className="btn btn-primary" onClick={ this._onClickCommentButtonHandler }>Comment</button>
      </div>
    );
  }

  render() {
    const { author, date, text, comments, likes} = this.props.postData;
    return (
      <div className="post container">
        <div>{ author }</div>
        <div className="text">{text}</div>
        <div className="row">
          <div className="col-xs-11">
            <span>{ date }</span> | <a href="#" onClick={ this._onCommentClickHandler }>Comment</a>
          </div>
          <div className="col-xs-1">
            <span><a href="#" onClick={ this._onLikeClickHandler }>Like</a> { likes }</span>
          </div>
        </div>
        { this.state.addCommentAreaActive ? this._getAddCommentArea() : <div></div> }
        <CommentList comments={ comments } />
      </div>
    );
  }
}

export default CSSModules(Post, styles);