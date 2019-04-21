import React, { Component } from 'react';
import TwitterListContainer from "./components/twitterList/TwitterListContainer"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TwitterListContainer />
      </div>
    );
  }
}

export default App;


