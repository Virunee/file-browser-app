import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import treedata from './treedata'
import SortableTree from 'react-sortable-tree';
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
var secondlevel = [];

for(var i = 0; i < r.length; i++) {
  var object = r[i];
  if(object.children.length > 0) {
    var childrenarr = [];
    Object.keys(object.children).forEach(function(key) {
      childrenarr.push(object.children[key]);
    });
    secondlevel.push(childrenarr);
  }
}

console.log(secondlevel);


const objects = r.map(
        (object) => 
        <div>
          <SimpleMediaCard title={object.title}/>
          <Greeting hasChildren={object.children.length}/>
          </div>
          );

var childrenarr = []

function Greeting(props) {
  const hasChildren = props.hasChildren;
  if (hasChildren > 0) {
    return <SimpleMediaCard title={object.children[0].title}/>;
  }
  return <p></p>;
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
        {objects}
        </div>
      </div>
    );
  }
};


export default App;
