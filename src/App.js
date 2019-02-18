import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />  
        <h2>My First React App - Counter</h2>
        </header>
         <Counter initialNumber={0}/>
         <Counter initialNumber={-10}/>
         <Counter initialNumber={5}/>
         <Counter initialNumber={30}/>
       
      </div>
    );
  }
}

export default App;
