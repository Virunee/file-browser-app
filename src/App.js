import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import treedata from './treedata'
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: treedata
    };
  }
  
  render() {

    var arr = [];
    Object.keys(treedata).forEach(function(key) {
      arr.push(treedata[key]);
    });

  function convert(array){
    var map = {};
    for(var i = 0; i < array.length; i++){
        var obj = array[i];
        obj.children= [];

        map[obj.id] = obj;

        var parent = obj.parentId || '-';
        if(!map[parent]){
            map[parent] = {
              children: []
            };
        }
        map[parent].children.push(obj);
    }

    return map['-'].children;

}

var r = convert(arr);

const objects = r.map(
        (object) => 
    <li key={object.id}>{object.title}</li>
    );
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{objects}</p>
      </div>
    );
  }
};


export default App;
