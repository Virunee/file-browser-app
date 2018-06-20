import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import treedata from './treedata'
import {convertedTreeData} from './convertData';
import 'react-sortable-tree/style.css';
import SimpleMediaCard from './components/Card';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: treedata
    };
  }
  
  render() {
  
    function RenderChildren(props) {
      var object = props.object;
        return RenderCards(object);
    }
    
    function RenderCards(props) {
      const object = props;
      const objects = object.map(
        (object) => {
          return object.children.length > 0 ?
          <div>
          <SimpleMediaCard title={object.title}/>
          <RenderChildren object={object.children}/>
          </div>
          :
          <div>
          <SimpleMediaCard title={object.title}/>
          </div>
      }
      );
      return objects;
    }
    
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <div>
      {RenderCards(convertedTreeData)}
      </div>
      </div>
    );
  }
};

export default App;
