import React from 'react'
import './../Styles/FormStyle.css'

function LabelElement({label}) {
    return (
            <label className="label"> {label} </label>
    )
}

export default LabelElement