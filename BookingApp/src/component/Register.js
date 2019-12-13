import React, { Component } from 'react'
import LabelElement from './../FormElements/LabelElement'
import InputTextElement from './../FormElements/InputTextElement'
import ButtonElement from '../FormElements/ButtonElement'
import RadioElement from '../FormElements/RadioElement'


export class Register extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

            values : {
               email :'',
               password :'',
               gender:'',
               mobile:'',
            },

            errors :{
               email :'',
               password :'',
               gender:'',
               mobile:''
           }
       }
    }
    
    handleChange = (event) =>{

        console.log("handleChange() called")
        const{name , value} = event.target

        this.setState({

            values : {
                ...this.state.values,
                [name] : value
            },
            
        })

        let errors = this.state.errors

        switch(name){
            case 'gender' :
                errors.gender = ( typeof (value) == undefined && (value.length == 0) ) 
                    ?
                    'Select your gender'
                    :
                    ''
        }

    }

    handleBlur = (event) =>{

        const {name , value} = event.target
        let errors = this.state.errors
        console.log('handleBlur() called')

        switch(name){
            
            case 'email':

                    errors.email = (value.length ==0 )  
    
                    ? 
                    'Please Enter Your E-mail Id' 
                    : 
                    errors.email = ( value.includes('@') ) &&  ( ( value.includes('.in') ) || ( value.includes('.com') ) )
                                ? '' : 'Enter valid E-mail Id'
                    break;

            case 'password':
                    errors.password =  (value.length != 0 ) ? '' : 'Password is required field'
                    break;

            case 'mobile':

                    errors.mobile = (value.length == 0) 
                    ?
                    'Please Enter Your Mobile Number'
                    :
                    errors.mobile =  value.match(/^[0-9]{10}$/)  ? '' : 'Enter valid Mobile Number'
                    break;
        }

        this.setState({errors,[name]:value})

    }


    handleSubmit = (event) => {

        event.preventDefault()
        console.log(this.state.values)
        console.log(this.state.errors)

    }

    validateForm(){

        let valueValid=0
        let errorValid=0
        let valid=false

        let errors = this.state.errors
        let values = this.state.values

        Object.values(errors).forEach(
            (error) => {
                if(error.length != 0){
                    errorValid++
                }
            }
        )
        console.log("ErrorValid"+errorValid)
        
        Object.values(values).forEach(
            (value) => {
                if(value.length != 0) {
                    valueValid++
                }
            }
        )
        console.log("ValueValid"+valueValid)


        if(valueValid == 4 && errorValid == 0) {
            valid=true
        }

        return valid
    }

    render() {
        return (

            <div>
                
                <h3>Please fill the required fields to register !!</h3>
                <br/>
                <form onSubmit={this.handleSubmit} noValidate >

                    <div>
                        <LabelElement label="Email"/>
                        <InputTextElement
                            type={"email"}
                            value={this.state.values.email}
                            name="email"
                            placeholder="Enter your email Id"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            errorText={this.state.errors.email}
                        />

                    </div>

                    <div>
                        <LabelElement label="Password"/>
                            <InputTextElement
                                type={"Password"}
                                value={this.state.values.password}
                                name="password"
                                placeholder="Enter your password"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                errorText={this.state.errors.password}
                            />
                    </div>

                    <div>
                        <LabelElement label="Gender"/>
                        <RadioElement
                            data={['Male','Female']}
                            value={this.state.values.gender}
                            name="gender"
                            onChange={this.handleChange}
                            errorText={this.state.errors.gender}
                        />
                    </div>

                    <div>
                        <LabelElement label="Mobile Number"/>
                        <InputTextElement
                            type={"number"}
                            value={this.state.values.mobile}
                            name="mobile"
                            placeholder="Enter your Mobile Number"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            errorText={this.state.errors.mobile}
                        />
                    </div>
                    
                    <ButtonElement type="submit"  disabled={!this.validateForm()} value="submit" />
                </form>
            </div>
        )
    }
}

export default Register
