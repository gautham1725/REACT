import React, { Component } from 'react'

export class Logout extends Component {

    constructor(props) {
        super(props)
        console.log('logout() called')
        sessionStorage.setItem('isLoggedIn' , 'LoggedOut')
        sessionStorage.removeItem('name')
        
    }
    

    render() {
        return (
            <div className="App">
                <h3>You're Logged out successfully !!</h3>
                <h5><p>Click here to <a href='login'>Login </a>again.</p></h5>
            </div>
        )
    }
}

export default Logout
