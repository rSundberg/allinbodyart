import React, { Component } from 'react';
import Workers from './reactComponents/Workers.jsx';
import Nav from './reactComponents/Nav.jsx';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Workers/>
        <Nav/>
      </div>
    );
  }
}

export default App;
