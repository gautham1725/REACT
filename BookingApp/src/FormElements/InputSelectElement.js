import React from 'react'
import './../Styles/FormStyle.css'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { FormControl , InputLabel } from '@material-ui/core';

function InputSelectElement(props) {

    let valuesList = props.data.map( (data,index) =>(
        // (data == '')?( 
        // <div>
        //     <MenuItem key="-1" disabled selected  ><em>None</em></MenuItem>
        // </div> ):
            <MenuItem key={index} value={data}>{data}</MenuItem>
    ))

    return (
        <div>
            
            <FormControl 
                 variant="outlined"
                 className="input-select" 
                //  style={{ margin: 10 }}
                 placeholder={props.placeholder}
            >
                {/* <InputLabel id="label">Skills</InputLabel> */}
                <Select
                    value={props.value}
                    onChange={props.onChange}
                    name={props.name}
                    placeholder={props.placeholder}
                >
                    {valuesList}
                </Select>
            </FormControl>
            <br/><br/>

            {/* <select
                label="Skills"
                value={props.value}
                onChange={props.onChange}

            >
                {valuesList}
            </select> */}
           
        </div>
    )
}

export default InputSelectElement