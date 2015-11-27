import React, {Component} from 'react';
import BaseComponent from './BaseComponent';
import Post from './Post';

export default class PostsBoard extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('_onAddPostClickHandler');
    this.state = {
      data: [],
      author: 'Your name'
    };
  }

  componentWillMount() {
    this.setState({
      data: this.props.data
    });
  }

  _onAddPostClickHandler() {
    const userText = this.userText.value;
    let data = this.state.data;
    if (!userText) {
      return;
    }
    data.push({
      author: this.state.author,
      date: '25/11/2015',
      likes: 0,
      comments: 0,
      text: userText
    });
    this.setState({
      data: data
    });
    this.userText.value = '';
  }

  render() {
    return (
      <div className="posts-board">
        <div className="title">React.JS posts board</div>
        <div className="addpost-container">
          <input type="text" ref={(ref) => this.userText = ref} className="addpost-input" placeholder="Enter the text..."/>
          <button className="addpost-button" onClick={this._onAddPostClickHandler}>Send</button>
        </div>
        {this.state.data.map((item, i) => {
          return <Post postData={item} key={i}/>
        }).reverse()}
      </div>
    );
  }
}