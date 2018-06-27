import React from 'react';

import InputField from './InputField';
import Button from './Button';

class SearchBarPanel extends React.Component {
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
        debugger;
       this.props.submit(event.target.querySelector("#search".value));
       console.log("handleSubmit firing");
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <InputField
            id="search"
            label="Search field"
            type="search"
            margin="normal"
            value={this.state.value}
            onChange={this.handleChange}
            />
            <Button id="submitButton" type="submit" name="Search">Search</Button>
            </form>
        );
    }
}

export default SearchBarPanel;