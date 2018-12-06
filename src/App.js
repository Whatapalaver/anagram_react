import React, { Component } from 'react';
import Inset from './components/Inset';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="box a" />
        <div className="box b">
          <h1>Anagram Solver </h1>
          <p>Winning at Scrabble since 1901</p>
        </div>
        <div className="box c" />
        <div className="box ca" />
        <div className="box d" />
        <div className="box f" />
        <div className="box g" />
        <div className="box h" />
        <div className="box i" />
        <div className="box inset">
          <Inset />
        </div>
      </div>
    );
  }
}

export default App;
