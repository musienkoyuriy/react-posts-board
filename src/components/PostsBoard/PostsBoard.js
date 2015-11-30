import React, {PropTypes, Component} from 'react';
import BaseComponent from '../BaseComponent';
import Post from '../Post/Post';
import CSSModules from 'react-css-modules';
import styles from './posts-board.css';

class PostsBoard extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('_onAddPostClickHandler');
    this.state = {
      data: [],
      author: 'Your name'
    };
  }

  componentWillMount() {
    const boardData = this.props.boardData
    this.setState({ boardData });
  }

  _onAddPostClickHandler() {
    const userText = this.userText.value;
    let { boardData } = this.state;
    if (!userText) {
      return;
    }
    boardData.push({
      author: this.state.author,
      date: '25/11/2015',
      likes: 0,
      comments: 0,
      text: userText
    });
    this.setState({ boardData });
    this.userText.value = '';
  }

  render() {
    return (
      <div styleName="posts-board" className="container">
        <div styleName="title">React.JS posts board</div>
        <div styleName="addpost-container">
          <input type="text" ref={(ref) => this.userText = ref} className="addpost-input form-control" placeholder="Enter the text..."/>
          <button styleName="add-post-btn" className="btn btn-primary" onClick={this._onAddPostClickHandler}>Send post</button>
        </div>
        {this.state.boardData.map((item, i) => {
          return <Post postData={item} key={i}/>
        }).reverse()}
      </div>
    );
  }
}
PostsBoard.propTypes = {
  boardData: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired
};

export default CSSModules(PostsBoard, styles);