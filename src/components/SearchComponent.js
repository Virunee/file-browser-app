import React, { Component } from 'react';
import SearchBarPanel from './SearchBarPanel';

class SearchComponent extends Component {
    componentDidMount() {
    }
    
    render() {
        const { 
            submitData, 
            addSubmittedValue
        } = this.props;
        return (
            <SearchBarPanel 
            id='searchBarPanel'
            submit={submitData} 
            addSubmittedValue={addSubmittedValue}
            hint="Filename"
            />
        );
    }
}

export default SearchComponent;