import React, {Component, PropTypes } from 'react'
import PostsBoard from '../components/PostsBoard/PostsBoard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as PostActions from '../actions/index'

class App extends Component {
  render() {
    const { posts, actions } = this.props
    return (
      <div>
        <PostsBoard posts={posts} actions={actions}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PostActions, dispatch)
  }
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
