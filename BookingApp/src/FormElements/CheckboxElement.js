import React from 'react'
import { FormControl, FormGroup , FormControlLabel , Checkbox  } from '@material-ui/core'

function CheckboxElement(props) {

    let CheckboxList = props.data.map((data,index) =>(
        (data.disabled == true) ? (
            <FormControlLabel
                checked
                control={<Checkbox key={index} value={data.value} /> }
                disabled={data.disabled}
                label={data.value}
                style={{ margin: 2 }}
                key={index}
                onClick={props.onClick}
        />
        ) :
        <FormControlLabel
            control={<Checkbox key={index} value={data.value} /> }
            disabled={data.disabled}
            label={data.value}
            style={{ margin: 2 }}
            key={index}
            onClick={props.onClick}
        /> 
    ))

    return (
        <div>
            <FormControl>
                <FormGroup>
                <table>
                        <tr>{CheckboxList}</tr>
                </table>
                </FormGroup>
            </FormControl>
            <br/><br/>
        </div>
    )
}

export default CheckboxElement
