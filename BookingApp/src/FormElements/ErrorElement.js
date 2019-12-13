import React from 'react'
import './../Styles/FormStyle.css'

function ErrorElement(props) {
    return (
        <div className="error" style={{ margin: 10 }} >
            {props.error}
        </div>
    )
}

export default ErrorElement
