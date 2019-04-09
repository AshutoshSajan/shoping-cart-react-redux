import React, { Component } from 'react';
import './App.css';
import './Loading.css';
import Main from "./Main";
// import { connect } from 'react-redux'

export default  class App extends Component {
  render() {
    return (
      <div className="main">
        <Main />
      </div>
    );
  }
}

// connect((state) => console.log(state))(App);
