import React, { Component } from 'react'
import { BrowserRouter as Router , Route  , Switch } from 'react-router-dom'
import Home from './../Home.js'
import Movies from './../Movies.js'
import Login from '../Login.js'
import Register from '../Register.js'
import About from '../About.js'
import Logout from '../Logout.js'
import { ProtectedRoute } from './ProtectedRoute.js'
import ErrorComponent from '../ErrorComponent.js'
import Booking from '../Booking.js'

export class Routing extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn : true
        }
    }

    render() {  

        return (
            <div>

                <Router>
                    <Switch>
                        <Route exact path="/"><Login/></Route>
                        <ProtectedRoute path="/home" component={Home} />
                        <ProtectedRoute exact path="/home/:name" component={Booking} />
                        <ProtectedRoute exact path="/movies" component={Movies} />
                        <ProtectedRoute exact path="/movies/:name" component={Booking} />
                        <ProtectedRoute exact path="/home/:name" component={Booking} />
                        <Route exact path="/login" ><Login/></Route>
                        <Route exact path="/register" component={Register} />
                        <ProtectedRoute exact path="/about" component={About}/>
                        <ProtectedRoute exact path="/logout" component={Logout} />
                        <Route exact path="*" component={ErrorComponent}></Route>
                    </Switch>

                </Router>
            </div>
        )
    }
}

export default Routing