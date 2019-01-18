import React, { Component } from 'react';
import './App.css';
import NewsComponent from './news/news.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewsComponent/>
      </div>
    );
  }
}

export default App;
