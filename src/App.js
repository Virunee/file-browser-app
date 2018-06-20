import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import treedata from './treedata'
import {convertedTreeData} from './convertData';
import 'react-sortable-tree/style.css';
import SimpleMediaCard from './components/Card';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <SimpleMediaCard title={object.title}/>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <RenderChildren object={object.children}/>
          </ExpansionPanelDetails>
          </ExpansionPanel>
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
      <h1 className="App-title">Virunee's File Browser</h1>
      </header>
      <div>
      {RenderCards(convertedTreeData)}
      </div>
      </div>
    );
  }
};

export default App;
