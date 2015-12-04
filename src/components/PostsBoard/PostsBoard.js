import React, { PropTypes, Component } from 'react';
import BaseComponent from '../BaseComponent';
import Post from '../Post/Post';
import CSSModules from 'react-css-modules';
import styles from './posts-board.css';

class PostsBoard extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this._bind('_onAddPostClickHandler');
  }

  _onAddPostClickHandler() {
    const userText = this.userText.value;
    if (!userText) {
      return;
    }
    const { addPost } = this.props.actions;
    addPost(userText);
    this.userText.value = '';
  }

  render() {
    const { actions } = this.props;
    return (
      <div styleName="posts-board" className="container">
        <div styleName="title">React.JS posts board</div>
        <div styleName="addpost-container">
          <input type="text" ref={ (ref) => this.userText = ref } className="addpost-input form-control" placeholder="Enter the text..." />
          <button styleName="add-post-btn" className="btn btn-primary" onClick={this._onAddPostClickHandler}>Send post</button>
        </div>
        {this.props.posts.map((item, i) => {
          return <Post postData={item} key={i} { ...actions }/>
        }).reverse()}
      </div>
    );
  }
}
PostsBoard.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired
};

export default CSSModules(PostsBoard, styles);