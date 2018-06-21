import React from 'react';
import '../App.css';
import 'react-sortable-tree/style.css';
import SimpleMediaCard from '../components/Card';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import { convertedTreeData } from '../convertData';
import FolderIcon from '@material-ui/icons/Folder';
import FileIcon from '@material-ui/icons/InsertDriveFile';

class CardsPanel extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            searchTerm: '',
            currentlyDisplayed: convertedTreeData
            
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
                    <div className="cardsPanel">
                    <div className="folder">
                    <ExpansionPanel key={object.id}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <FolderIcon className="mui-icon"/>
                            <SimpleMediaCard title={object.title} />
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <RenderChildren object={object.children} className="folder-children" key={object.id}/>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    </div>
                    </div>
                    :
                    <div className="cardsPanel">
                    <div className="card">
                    <Card>
                    <FileIcon className="mui-icon"/>
                    <SimpleMediaCard title={object.title} key={object.id}/>
                    </Card>
                    </div>
                    </div>
                }
            );
            return objects;
        }
        
        return <div>
        {RenderCards(this.state.currentlyDisplayed)}
        </div>;
    }
}

export default CardsPanel;


