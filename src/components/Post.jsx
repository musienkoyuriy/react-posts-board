import React, {Component} from 'react';
import BaseComponent from './BaseComponent.jsx';
import CommentList from './CommentList.jsx';

export default class Post extends BaseComponent {
  constructor(props) {
    super(props);

    this._bind('_onLikeClickHandler', '_onCommentClickHandler');

    this.state = {
      liked: false
    };
  }

  componentWillMount() {
    this.setState({
      likes: this.props.postData.likes,
      commments: this.props.postData.comments
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

  _onCommentClickHandler() {
    alert()
  }

  render() {
    const {author, date, text = this.props.postData;

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
        <CommentList commments={this.state.commments} />
      </div>
    );
  }
}