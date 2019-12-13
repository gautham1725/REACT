import React, { Component } from 'react'
import { Navbar , Nav , Form } from 'react-bootstrap'

export class RoutingNavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand ><em>BookMyShow</em></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home" >Home</Nav.Link>
                        <Nav.Link href="/movies">Movies</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Form inline>
                        {/* <a className="btn btn-light" href="/login" > Login </a> */}
                        <a className="btn btn-light" href="/logout" > Logout </a>
                </Form>
                </Navbar>
            </div>
        )
    }
}

export default RoutingNavBar
