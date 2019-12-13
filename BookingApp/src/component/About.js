import React, { Component } from 'react'
import RoutingNavBar from './routing/RoutingNavBar'

export class About extends Component {
    render() {
        return (
            <div>
                <RoutingNavBar/>
                <h1>About Component</h1>
            </div>
        )
    }
}

export default About
