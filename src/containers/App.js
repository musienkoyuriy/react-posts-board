import React, {Component} from 'react';
import PostsBoard from '../components/PostsBoard';

var boardData = [
  {author: 'John!!!!!!!', date: '01/10/2015', text: 'Some  post', likes: 53, comments: []},
  {author: 'Stive', date: '01/10/2015', text: 'Some another post', likes: 25, comments: []},
  {author: 'Joy', date: '01/10/2015', text: 'Some important post', likes: 64, comments: []},
  {author: 'Jim', date: '01/10/2015', text: 'Some important post again', likes: 15, comments: []},
  {author: 'Yuriy', date: '01/10/2015', text: 'So important post', likes: 5, comments: []}
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardData
    }
  } 
  render() {
    return (
      <div className="app">
        <PostsBoard data={this.state.boardData} />
      </div>
    )
  }
}