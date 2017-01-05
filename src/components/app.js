import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import SearchOutput from './SearchOutput';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchOutput />
      </div>
    );
  }
}

export default App;
