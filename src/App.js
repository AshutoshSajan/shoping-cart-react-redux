import React, { Component } from 'react';
import './App.css';
import './Loading.css';
import Main from "./Main";

export default  class App extends Component {
  state = {

  }

  render() {
    // var className;
    // setTimeout(() => {this.setState({className: "internet-error"}); 
    // setTimeout(() => this.setState({className: "remove-error"}), 2000 )}, 1000)

    setTimeout(() => this.setState({className: "internet-error"}), 2000)
    // setTimeout(() => (() => className = "internet-error")(), 2000)
    return (
        navigator.onLine ? <Main /> :
        <p className={`error ${this.state.className}`}>No internet connection</p>
    )
  }
}