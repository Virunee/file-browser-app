import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class InputField extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return ( 
            <TextField 
            id={this.props.id} 
            onChange={this.props.onChange}
            floatingLabelText={this.props.floatLabel}
            fullWidth={this.props.fullWidth}
            floatingLabelStyle={this.props.labelStyle}
            floatingLabelFocusStyle = {this.props.focusStyle}
            floatingLabelShrinkStyle= {this.props.shrinkStyle}
            hintStyle = {this.props.hintStyle}
            inputStyle = {this.props.inputStyle}
            style = {this.props.style}
            type= {this.props.type}
            />
        );
    }
}

export default InputField;