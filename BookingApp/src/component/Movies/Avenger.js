import React, { Component } from 'react'
import LabelElement from '../../FormElements/LabelElement'
import InputTextElement from '../../FormElements/InputTextElement'

export class Avenger extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

            MovieName:this.props.match.params.name,
            CustomerName:sessionStorage.getItem('name'),
            Theater:['ARRS MULTIPLEX',
                    'BIG CINEMAS',
                    'AASCAR THEATER',
                    'PVR CINEMAS',
                    'VENKATESHWARA THEATER'],
            Class:['FIRST CLASS',
                    'SECOND CLASS',
                    'BOX'],
            ShowTimings:['Morning show (10AM - 1AM)',
                        'Afternoon show (1PM - 5PM)',
                        'Evening show (6PM - 10PM)',
                        'Night show (11PM - 2AM)']
        }

    }
    

    render() {
        return (
            <div>
                <LabelElement label='Movie Name'/>
                <InputTextElement
                    value={this.state.MovieName}
                    name='moviename'
                    readonly
                />
                {this.props.match.params.avenger}
                {this.state.MovieName}
                {this.state.CustomerName}
            </div>
        )
    }
}

export default Avenger
