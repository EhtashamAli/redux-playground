import React, { Component } from 'react';
import {connect} from 'react-redux';
import {postData} from '../Actions/FormAction';
class PostForm extends Component {
    state = {
        title : '',
        body : ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title : this.state.title,
            body : this.state.body
        }
        this.props.postData(post);    
    }
  render() {
    return (
      <div>
        <form onSubmit = {this.onSubmit}>
            <div>
                <label>TITLE:</label><br/>
                <input type = 'text' name = 'title' value = {this.state.title} onChange = {e => this.setState({title : e.target.value})}></input>
            </div>
            <br/>
            <div>
                <label>BODY:</label><br/>
                <textarea type = 'text' name = 'body' value = {this.state.body} onChange = {e => this.setState({body : e.target.value})}> </textarea>
            </div>
            <br/>
            <button type = 'submit'>SUBMIT</button>
        </form>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//     data : state.posts.item
// });
export default connect(null , {postData})(PostForm);
