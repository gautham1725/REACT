import React from 'react'
import { TextField } from '@material-ui/core';
import './../Styles/FormStyle.css'

function InputTextElement(props) {
    return (
        <div>
            
            <TextField
                type={props.type}
                id="standard-basic"
                className="input-text"
                variant="outlined"
                margin="dense"  
                color={props.color}
                value={props.value}
                onChange={props.onChange}
                size={props.size}
                name={props.name}
                onBlur={props.onBlur}
                placeholder={props.placeholder}
            />
            <p className="error">{props.errorText}</p>

        {/* <input type="text"
                   className="input-text"
                   value={props.value}
                   onChange={props.onChange}
            /> */}
            
        </div>
    )
}

export default InputTextElement