import React from 'react'
import { Button } from '@material-ui/core'

function ButtonElement(props) {
    return (
        <div>
            <Button 
                type={props.type} variant="contained" color="primary" disabled={props.disabled} >{props.value}</Button>
        </div>
    )
}

export default ButtonElement
