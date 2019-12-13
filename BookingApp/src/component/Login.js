import React, { Component } from 'react'
import LabelElement from './../FormElements/LabelElement'
import InputTextElement from './../FormElements/InputTextElement'
import ButtonElement from '../FormElements/ButtonElement'
import users from './../component/data/data.json'
import './../Styles/FormStyle.css'
import Routing from './routing/Routing'

class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

             values : {
                username :'',
                password :''
             },

             errors :{
                username :'',
                password :'',
                loginError:''
            },
            
            isLoggedIn : false

        }

    }

    /*
    componentDidMount(){
        fetch(data).then(function(data){
           console.log(data)
        })
    }*/
    
    handleChange = (event) => {

        console.log("handleChange called")
        const{name , value} = event.target

        this.setState({

            values : {
                ...this.state.values,
                [name] : value
            },
            
        })
    }

    handleBlur = (event) => {

        const {name , value } = event.target
        console.log('handleBlur called')
        let errors = this.state.errors

        switch(name){

        case 'username' :

            errors.username = (value.length == 0 ) ? 'username is required field' : ''
            break;

        case 'password' :

            errors.password = (value.length == 0 ) ? 'Password is required field' : ''
            break;

        default :
            console.log(value)
        }

        this.setState({...this.state.errors , [name]:value})

    }

    handleSubmit = (event) => {

        event.preventDefault()
        let valid = false

        users.map( (data) =>{

            if( data.username == this.state.values.username && data.password == this.state.values.password ) {
                valid = true
            }
        })

        const { history } = this.props

        if(valid){

            console.log(valid)

            window.sessionStorage.setItem('isLoggedIn','LoggedIn');
            window.sessionStorage.setItem('name',this.state.values.username);
            window.location.href = '/home'
            console.log(history)

        }else{
            this.setState({
                errors : {
                    ...this.state.errors,
                    loginError : 'username or Password is incorrect'
                }
                
            })
            console.log(valid)
        }

        console.log(this.state.values)
        console.log(this.state.errors)

    }

    render() {

        return (

            <div className="App" hidden={false}>

                <h1> Welcome to BookMyshow !!</h1>
                <br/>

                <form onSubmit={this.handleSubmit} noValidate>

                    <div>
                        <LabelElement label="Username"/>
                        <InputTextElement
                            type={'text'}
                            value={this.state.values.username}
                            name="username"
                            placeholder="Enter your username"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            errorText={this.state.errors.username}
                        />
                        {/* <span className="error">{this.state.errors.email}</span> */}
                    </div>

                    <div>
                        <LabelElement label="Password"/>
                            <InputTextElement
                                type={'password'}
                                value={this.state.values.password}
                                name="password"
                                placeholder="Enter your password"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                errorText={this.state.errors.password}
                            />
                        {/* <p className="error">{this.state.errors.password}</p> */}
                    </div>

                    <p className="error">{this.state.errors.loginError}</p>
                     <p>New User ?<a href="/register"> Register here!</a></p>

                    <ButtonElement type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default Login