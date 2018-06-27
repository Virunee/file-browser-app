import React from 'react';
import RaisedButton from '@material-ui/core/Button';

export const Button = props => {
    const style = {
        margin: "15px",
        backgroundColor: "black",
        color: "white"
    }
    return (
        <RaisedButton
        className={props.className}
        label={props.name}
        style={style}
        value={props.value}
        onClick={props.onClick}
        id={props.id}
        />
    )
};

export default Button;