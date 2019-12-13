import React from 'react'

function TextareaElement(props) {
    return (
        <div>
            <textarea className="input-text"
                      value={props.value} 
                      onChange={props.onChange}
            />
        </div>
    )
}

export default TextareaElement
