import React, {Component} from 'react';
import BaseComponent from '../BaseComponent';
import CommentList from '../CommentList/CommentList';
import CSSModules from 'react-css-modules';
import styles from './post.css';

class Post extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('_onLikeClickHandler', '_onCommentClickHandler', '_onClickCommentButtonHandler');
    this.state = {
      liked: false,
      comments: [],
      addCommentAreaActive: false
    };
  }

  componentWillMount() {
    this.setState({
      likes: this.props.postData.likes,
      commments: this.props.postData.comments || []
    });
  }

  _onLikeClickHandler() {
    this.setState({
      liked: !this.state.liked
    });
    this.setState({
      likes: this.state.liked ? this.state.likes - 1 : this.state.likes + 1
    });
  }

  _onClickCommentButtonHandler() {
    let commentText = this.commentText.value;
    let comments;
    if (!commentText) {
      return;
    }
    comments = this.state.comments;
    comments.push({
      author: 'Your name',
      date: '26/11/2015',
      commentText
    });
    this.setState({
      comments
    });
    this.commentText.value = '';
  }

  _onCommentClickHandler() {
    this.setState({
      addCommentAreaActive: true
    });
  }

  render() {
    const {author, date, text} = this.props.postData;
    let addCommentArea = <div />;
    if (this.state.addCommentAreaActive) {
      addCommentArea = <div className="add-comment-area">
                         <textarea ref={(ref) => this.commentText = ref} className="form-control" rows="2" placeholder="Your comment"></textarea>
                         <button className="btn btn-primary" onClick={this._onClickCommentButtonHandler}>Comment</button>
                       </div>
    }

    return (
      <div className="post container">
        <div>{author}</div>
        <div className="text">{text}</div>
        <div className="row">
          <div className="col-xs-11">
            <span>{date}</span> | <a href="#" onClick={this._onCommentClickHandler}>Comment</a>
          </div>
          <div className="col-xs-1">
            <span><a href="#" onClick={this._onLikeClickHandler}>Like</a> {this.state.likes}</span>
          </div>
        </div>
        {addCommentArea}
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CSSModules(Post, styles);