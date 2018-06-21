import React, { Component } from 'react';
import './App.css';
import 'react-sortable-tree/style.css';
import SearchBarContainer from './containers/SearchBarContainer';
import CardsPanelContainer from './containers/CardsPanelContainer';
import TitleBar from './components/TitleBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBarContainer/>
        <div className="browserContainer">
        <TitleBar/>
        <div>
        <CardsPanelContainer/>
        </div>
        </div>
        <div>
  </div>
      </div>
    );
  }
};



export default App;
