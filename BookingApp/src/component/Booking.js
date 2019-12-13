import React, { Component } from 'react'
import LabelElement from '../FormElements/LabelElement'
import InputTextElement from '../FormElements/InputTextElement'
import InputSelectElement from '../FormElements/InputSelectElement'
import CheckboxElement from '../FormElements/CheckboxElement'
import RoutingNavBar from './routing/RoutingNavBar'
import { Card, Button } from 'react-bootstrap'
import ButtonElement from '../FormElements/ButtonElement'
import movies from './data/movies.json'
import './../Styles/FormStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Booking extends Component {

    componentDidMount(){

        let name = this.props.match.params.name
        console.log(name)



        switch(name) {

            case 'avenger':
                console.log(name)
                this.setState({
                    Theaters : ['ARRS MULTIPLEX','BIG CINEMAS', 'AASCAR THEATER','PVR CINEMAS','VENKATESHWARA THEATER'],
                    ShowTimings:['MORNING SHOW (10AM - 1AM)', 'AFTERNOON SHOW (1PM - 5PM)', 'EVENING SHOW (6PM - 10PM)', 
                                    'NIGHT SHOW (11PM - 2AM)'],
                    Seats:[
                        {'value':'1','disabled':true},{'value':'2','disabled':true},{'value':'3','disabled':false},
                        {'value':'4','disabled':false},{'value':'5','disabled':false},{'value':'6','disabled':false},
                        {'value':'7','disabled':false},{'value':'8','disabled':true},{'value':'9','disabled':false},
                        {'value':'10','disabled':false}
                    ]
                })
                break;

            case 'kgf' :
                console.log(name)
                this.setState({
                    Theaters : ['BIG CINEMAS', 'AASCAR THEATER','PVR CINEMAS'],
                    ShowTimings:['EVENING SHOW (6PM - 10PM)', 
                                    'NIGHT SHOW (11PM - 2AM)'],
                    Seats:[
                        {'value':'1','disabled':true},{'value':'2','disabled':true},{'value':'3','disabled':true},
                        {'value':'4','disabled':true},{'value':'5','disabled':false},{'value':'6','disabled':false},
                        {'value':'7','disabled':false},{'value':'8','disabled':true},{'value':'9','disabled':true},
                        {'value':'10','disabled':true}
                    ]
                })
                break;

            case 'bahubali' :
                console.log(name)
                this.setState({
                    Theaters : ['ARRS MULTIPLEX','VENKATESHWARA THEATER'],
                    ShowTimings:['MORNING SHOW (10AM - 1AM)', 'EVENING SHOW (6PM - 10PM)'],
                    Seats:[
                        {'value':'1','disabled':false},{'value':'2','disabled':false},{'value':'3','disabled':false},
                        {'value':'4','disabled':false},{'value':'5','disabled':false},{'value':'6','disabled':false},
                        {'value':'7','disabled':false},{'value':'8','disabled':false},{'value':'9','disabled':false},
                        {'value':'10','disabled':false}
                    ]
                })
                break;

            case 'lionking' :
                console.log(name)
                this.setState({
                    Theaters: ['ARRS MULTIPLEX','BIG CINEMAS', 'AASCAR THEATER',],
                    ShowTimings:['NIGHT SHOW (11PM - 2AM)'],
                    Seats:[
                        {'value':'1','disabled':true},{'value':'2','disabled':true},{'value':'3','disabled':true},
                        {'value':'4','disabled':true},{'value':'5','disabled':true},{'value':'6','disabled':false},
                        {'value':'7','disabled':true},{'value':'8','disabled':true},{'value':'9','disabled':false},
                        {'value':'10','disabled':true}
                    ]
                })
                break;
        
            case 'nkp' :
                console.log(name)
                this.setState({
                    Theaters : ['BIG CINEMAS', 'AASCAR THEATER',],
                    ShowTimings:['AFTERNOON SHOW (1PM - 5PM)', 'EVENING SHOW (6PM - 10PM)'],
                    Seats:[
                        {'value':'1','disabled':true},{'value':'2','disabled':true},{'value':'3','disabled':true},
                        {'value':'4','disabled':true},{'value':'5','disabled':true},{'value':'6','disabled':true},
                        {'value':'7','disabled':true},{'value':'8','disabled':true},{'value':'9','disabled':true},
                        {'value':'10','disabled':true}
                    ]
                })
                break;

            case 'ironman' :
                console.log(name)
                this.setState({
                    Theaters : ['ARRS MULTIPLEX','BIG CINEMAS'],
                    ShowTimings:['EVENING SHOW (6PM - 10PM)','NIGHT SHOW (11PM - 2AM)'],
                    Seats:[
                        {'value':'1','disabled':false},{'value':'2','disabled':false},{'value':'3','disabled':false},
                        {'value':'4','disabled':false},{'value':'5','disabled':false},{'value':'6','disabled':false},
                        {'value':'7','disabled':false},{'value':'8','disabled':false},{'value':'9','disabled':true},
                        {'value':'10','disabled':true}
                    ]
                })
                break;

            default:
                break;
        }


    }

    constructor(props) {
        super(props)
    
        this.state = {

            Movies : movies,
            MovieImage :'',

            MovieName:this.props.match.params.name.toUpperCase(),
            CustomerName:sessionStorage.getItem('name').toUpperCase(),

            Theater:'',
            ShowTiming:'',
            Medium:'',
            Seat:[],
            Price:'',
            validBooking:false,

            Theaters:[],
            ShowTimings:[],
            Mediums: ['FIRST CLASS','SECOND CLASS','BOX'],
            Seats:[]
        }

    }

    handleChange = (event) => {
        const { name , value }  = event.target

        this.setState({
            [name] : value
        })
    }

    handleSeats = (event) => {
        console.log("handleSeats called")
        const Seats = this.state.Seat
        let index

        if(event.target.checked){
            Seats.push(event.target.value)
            console.log(event.target.value)
        }
        else{
            index=Seats.indexOf(event.target.value)
            Seats.splice(index,1)
        }

        this.setState({ Seat:Seats})
        console.log(this.state.Seat)
    }

    validateBooking(){
        let valid=false;
        let state = this.state

        if( state.Theater.length != 0 && state.Medium.length !=0 && state.ShowTiming !=0 && state.Seat.length !=0  ){
            valid= true
        }
        console.log(this.state)
        return valid
    }

    showPrice = (event) => {

        event.preventDefault()
        let price ;
        let medium = this.state.Medium
        let seats = this.state.Seat.length

        switch (medium) {

            case 'FIRST CLASS':
                price = ( seats * 150 )
                break;

            case 'SECOND CLASS':
                price = ( seats * 120 )
                break;

            case 'BOX':
                price = ( seats * 200 )
                break;

            default:
                break;
        }

        console.log('callback called')


        this.setState({
            Price : price,
            validBooking : true
        })
    }

    render() {

        return (
            <div>
                <RoutingNavBar/> 

                <div style={{ marginLeft: '35px' , marginTop : '20px' }}>
                    <p className='label' ><h4 style= { {textDecorationLine: 'underline'}} >Choose your Choices :</h4></p>

                    {/* <p><i class="fa fa-search"/><InputTextElement/></p> */}

                    <form onSubmit={this.showPrice} hidden={this.state.validBooking} >

                        <LabelElement label='Movie Name :'/>
                        <InputTextElement
                            value={this.state.MovieName}
                            name='moviename'
                        />
                        <LabelElement label='Name :'/>
                        <InputTextElement
                            value={this.state.CustomerName}
                            name='moviename'
                        />
                        <LabelElement label={`Theaters Currently Showing ${this.state.MovieName} :`}/>
                        <InputSelectElement
                            data={this.state.Theaters}
                            placeholder="Select Theater"
                            onChange={this.handleChange}
                            name='Theater'
                        />

                        <LabelElement label='Available Show Timings :'/>
                        <InputSelectElement
                            data={this.state.ShowTimings}
                            placeholder="Select Show Timings"
                            onChange={this.handleChange}
                            name='ShowTiming'
                        />

                        <LabelElement label='Select Medium'/>
                        <InputSelectElement
                            data={this.state.Mediums}
                            placeholder="Select Medium"
                            onChange={this.handleChange}
                            name='Medium'
                        />

                        <LabelElement label='Select Seats'/>
                        <CheckboxElement
                            data={this.state.Seats}
                            onClick={this.handleSeats}
                        />

                        <div>
                        
                        </div>

                        <ButtonElement type='submit' value='Proceed' disabled={!this.validateBooking()}/>

                    </form>

                </div>

                <div hidden={!this.state.validBooking} style={{ marginLeft: '20px' }}>

                    {/* price = {this.state.price}<br/> 
                    hidden={ ( ( this.state.price != null) && (!this.state.validBooking) ) }
                    */}
                    <br/>
                    <br/>
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Header>
                            <b>MOVIE :</b> {this.state.MovieName} <br/>
                            <b>THEATER :</b> {this.state.Theater} <br/>
                            <b>SHOW : </b>{this.state.ShowTiming} <br/>
                            <b>MEDIUM : </b>{this.state.Medium} <br/>
                            <b>NO. OF TICKETS : </b>{this.state.Seat.length} <br/>
                        </Card.Header>
                        <Card.Body>
                        <Card.Text>
                            Ticket price : {this.state.Price} <br/>
                            Booking Charge : {this.state.Seat.length * 30} <br/>
                            Internet Handling fee : 10 <br/>
                        </Card.Text>
                        <Card.Title>Total : {this.state.Price + this.state.Seat.length * 30 + 10}</Card.Title>
                        <Button size='sm' variant="primary">Proceed to pay</Button>
                        </Card.Body>
                    </Card>
                    <br />
                </div>

                <br/>
                <br/>

            </div>
        )

}

}

export default Booking
