import React, {Component} from 'react';
import BaseComponent from './BaseComponent';
import CommentList from './CommentList';

export default class Post extends BaseComponent {
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
    let commentText = this.commentText.getDOMNode().value;
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
    this.commentText.getDOMNode().value = '';
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
                        <input ref={(ref) => this.commentText = ref} placeholder="Your comment" />
                        <button onClick={this._onClickCommentButtonHandler}>Comment</button>
                      </div>
    }

    return (
      <div className="post">
        <div className="name">{author}</div>
        <div className="text">{text}</div>
        <div>
          <div className="date">
            <span>{date}</span> | <span className="comment-link"><a href="#" onClick={this._onCommentClickHandler}>Comment</a></span>
          </div>
          <div className="like-container">
            <span><a href="#" onClick={this._onLikeClickHandler}>Like</a> {this.state.likes}</span>
          </div>
        </div>
        {addCommentArea}
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}