import React, { Component } from 'react';
import Store from './Store';
import {Provider} from 'react-redux';
import logo from './logo.svg';
import Postform from './Components/PostForm';
import Post from './Components/Post';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store = {Store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Postform/>
        <hr/>
        <Post/>
      </div>
      </Provider>
    );
  }
}

export default App;
