import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchPosts} from '../Actions/PostActions';
class Post extends Component {

    componentWillMount() {
      this.props.fetchPosts();
    }
  render() {
    const post = this.props.posts.items.map(post => {
        return  <div key = {post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
    });
    return (
      <div>
          <h1>POSTS</h1>
          {post}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    posts : state.posts
});
export default connect(mapStateToProps , {fetchPosts})(Post);
