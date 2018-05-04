import React, { Component } from 'react';
import './App.css';
import ContactView from './ContactView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Your Contacts</h1>
        </header>
        <ContactView />
      </div>
    );
  }
}

export default App;
