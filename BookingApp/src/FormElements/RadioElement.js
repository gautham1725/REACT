import React from 'react'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FormControl } from '@material-ui/core';

function RadioElement(props) {

    let RadioList = props.data.map( (data,index) => (
            
        <div>
            <FormControlLabel 
                onChange={props.onChange} 
                key={index} 
                value={data} 
                control={<Radio />} 
                label={data}
                labelPlacement="end"
                style={{ margin: 2 }}
                margin="dense"
                name={props.name}
            />
        </div>
            
  
            // <input 
            //     type="radio"
            //     key={index}
            //     name={props.name}
            //     value={data}
            //     onChange={props.onChange}
            // />
        
    ))

    return (
        <div>
            <RadioGroup aria-label="gender">
                {RadioList}
            </RadioGroup>
            <p className="error">{props.errorText}</p>
        </div>
             
    )
}

export default RadioElement