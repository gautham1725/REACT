import React, { Component } from 'react'
import RoutingNavBar from './routing/RoutingNavBar'
import movies from './data/movies.json'
import { Table } from 'react-bootstrap'

function searchingFor(term) {

    console.log('searchingFor '+term)

    return function (x) {

        console.log(x.movieName)
        console.log(x.movieName.toLowerCase().includes(term.toLowerCase()))

        return ( x.movieName.toLowerCase().includes(term.toLowerCase())  ) || !term
        
    }

}

class Movies extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             moviesData : movies,
             term : ''
        }
        console.log('state.term :'+this.state.moviesData)
    }

    searchHandler = (event) => {
        console.log(event.target.value)
        this.setState({
            term : event.target.value
        })
        console.log(this.state.term)
    }

    render() {
        
        return (
            <div>
            <RoutingNavBar/>
            <br/>
            <h4><em>Now Showing :</em></h4>
            <br/>
            <div class="input-group mb-3">
                
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-search"></i></span>
                    </div>
                    <input type="text" 
                           class="form-control" 
                           placeholder="Search for Movies" 
                           onChange={this.searchHandler}
                           value={this.state.term}
                    />
            </div>

            <Table striped bordered hover size="lg" responsive >
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Movie Name</th>
                        <th>Actor</th>
                        <th>Story Line</th>
                        <th>Rating</th>
                        <th>Tickets</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.moviesData.filter(searchingFor(this.state.term) ).map( (movie) => {
                        return (
                        <tr>
                            <td><img src={ movie.image } width="180" height="100"/></td>
                            <td>{movie.movieName}</td>
                            <td>{movie.actor}</td>
                            <td><p style={{ width: '25rem' }}>{movie.story}</p></td>
                            <td>{movie.rating}</td>
                            <td><a href={`/movies/${movie.movieName}`}>Book Now</a> </td>
                        </tr>

                        )
                    })
                    }
                    </tbody>
            </Table>
            </div>
            );
    }

}

export default Movies
