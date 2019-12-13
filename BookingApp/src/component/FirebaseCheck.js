import React, { Component } from 'react'
import firebase from 'firebase'

export class FirebaseCheck extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name :'Gowtham',
             age : 21
        }
    }
    
    componentDidMount(){
        var ref = firebase.database().ref('players');
        console.log(ref)
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default FirebaseCheck
