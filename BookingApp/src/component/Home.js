import React, { Component } from 'react'
import RoutingNavBar from './routing/RoutingNavBar'
import {Carousel} from 'react-bootstrap'
import { Card, ListGroup , ListGroupItem , CardColumns } from 'react-bootstrap'
import movies from './data/movies.json'

export class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             moviesData : movies
        }
    }
    

    render() {
        
        return (
            <div>
                <RoutingNavBar/>
                <br/>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={'https://lh5.googleusercontent.com/8jT1ZRexJlp6_QOie2KeB8WQc5uYetJ0edt4foao0QxUGN4cLQcmKbDc-o1JtawhyPA49SsmHdIbVkR0Vs_5fvNwiQggdCI8txcxSseuj6N_PoMw_8UUEFKIWwiCOijaMc54u_jU'}
                            alt="First slide"
                            width='500'
                            height='500'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={'http://3.bp.blogspot.com/-g9CFgiyoM3Q/VUg3jw6_XhI/AAAAAAAAGVs/-0_utjXE6bw/w1200-h630-p-k-no-nu/Avengers%2B1.jpg'}
                        alt="Third slide"
                        width='500'
                        height='500'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={'https://www.gethucinema.com/wp-content/uploads/2017/05/endhiran.jpg'}
                        alt="Third slide"
                        width='500'
                        height='500'
                        />
                    </Carousel.Item>
            </Carousel>
            <br/>

            <table>
            <tr>
            

            { this.state.moviesData.map( (movie) => {

                        return (
                            <td>
                            <CardColumns style={{ width: '14.5rem' }}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={movie.image} width="150" height="150" />
                                    <Card.Body>
                                    <Card.Title>{ (movie.movieName).toUpperCase()}</Card.Title>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>ACTOR : {(movie.actor).toUpperCase()}</ListGroupItem>
                                        <ListGroupItem>RATINGS : {(movie.rating)}</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link href={`/movies/${movie.movieName}`}>BOOK NOW</Card.Link>
                                        <Card.Link href="#">WISHLIST</Card.Link>
                                    </Card.Body>
                                </Card>
                            </CardColumns>
                            </td>
                        )
                    })
            }
            </tr>
            </table>

            </div>
        )
    }
}

export default Home