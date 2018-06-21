import React from 'react';

import TextField from '@material-ui/core/TextField';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
       //dispatch(updateValue(this.state.value));
       console.log(this.state.value);
       //input.value = "";
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <TextField
            id="search"
            label="Search field"
            type="search"
            margin="normal"
            value={this.state.value} onChange={this.handleChange}
            />
            <button type="submit">Search</button>
            </form>
        );
    }
}

export default SearchBar