import React, { Component } from 'react'
import InputSelectElement from './InputSelectElement.js'
import InputTextElement from './InputTextElement.js'
import LabelElement from './LabelElement.js'
import RadioElement from './RadioElement.js'
import CheckboxElement from './CheckboxElement.js'
import ButtonElement from '../ButtonElement.js'
import ErrorElement from './ErrorElement.js'

export class FormSample extends Component {

    constructor(props) {
        super();
    
        this.state = {

            username : '',
            comment :'',
            skill : '',
            gender:'',
            language: [],

            error : {
                username : '',
                comment :'',
                skill : 'skill',
                gender:'gender',
                language: 'language'
            }
         }
    }

    handleChange = (event) => {

        console.log("handleChange called")
        const{name , value} = event.target
        let error = this.state.error

        this.setState({
            [event.target.name] : event.target.value
        })

        switch(name){

            case 'skill' :
                error.skill = ( typeof (this.state.skill !== undefined) && value.length > 0 ) ? '' : error 
                break;

            case 'gender' :
                error.gender = ( typeof (this.state.gender !== undefined) && value.length > 0 ) ? '' : error 
                break;

            /*
            case 'language' :
                error.language = (value.length == 0 ) ? 'Please select your language' : '' 
                break;
            */
        }
       
    }

    handleBlur = (event) => {

        console.log("handleBlur called")
        const{name , value} = event.target
        let error = this.state.error

        switch(name){

            case 'username':
                error.username = ( typeof this.state.username !== undefined && value.length < 5 ) ? 'Username should be more than 5 characters' : ''
                break;

            case 'comment' :
                error.comment = ( typeof this.state.comment !== undefined && value.length < 8 ) ? 'Comment should be more than 8 characters' : ''
                break;
        }

        this.setState( {error, [name]: value }, ()=> {} )
    }

    /*handleUsername = (event) => {
        console.log("handleUsername called")
        this.setState({
            username : event.target.value
        })
    }

    handleComments = (event) => {
        console.log("handleComments called")
        this.setState({
            comment : event.target.value
        })
    }

    handleSkills = (event) => {
        console.log("handleSkills called")

        this.setState({
            skill : event.target.value
        })

    }

    handleGender = (event) =>{
        console.log("handleGender called")
        console.log(event.target.value)

        this.setState({
            gender : event.target.value
        })

        console.log("Gender "+this.state.gender)
    }*/

    handleLanguage = (event) => {

        console.log("handleLanguage called")

        const language=this.state.language
        let index

        if(event.target.checked){
            language.push(event.target.value)
            console.log(event.target.value)
        }
        else{
          index=language.indexOf(event.target.value)
          console.log(event.target.value)
          language.splice(index,1)
        }
        this.setState({ language:language})

        const{name , value} = event.target
        let error = this.state.error

        error.language = ( typeof this.state.language !== undefined && this.state.language.length > 0 ) ? '' : error 
        
    }

    validateForm(){

        let valid=true
          
        Object.values(this.state.error).forEach(
            
            (val) => {
                val.length != 0 && (valid = false)
            }

        )
        return valid
    }
    
    handleSubmit = (event) => {

        event.preventDefault()

        if(this.validateForm()){

            alert(
                    "Username : "+this.state.username+
                    ". Comments : "+this.state.comment+
                    ". Skills : "+this.state.skill+" "+
                    ". Gender :"+this.state.gender+
                    ". Language : "+this.state.language
                    )

        }else{
            console.log("Not a valid Form")
        }
    
    }

    render() {
        
        return (
            <div>

                <form onSubmit={this.handleSubmit}>

                    <LabelElement label={"Username"}></LabelElement>

                    <InputTextElement
                        label="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        size={"large"}
                        name="username"
                        onblur={this.handleBlur}
                        type="text"
                        placeholder="Username"
                        // className={this.validateForm() && 'is-invalid'}
                    />
                    
                    <ErrorElement error={this.state.error.username}/>

                    <LabelElement label={"Comments"}/>                    

                    <InputTextElement
                        label="Comments"
                        value={this.state.comment}
                        onChange={this.handleChange}
                        row="3"
                        size={"Normal"}
                        name="comment"
                        onblur={this.handleBlur}
                        placeholder="Comments !!"
                        // className={this.validateForm() && 'is-invalid'}
                    />

                    <ErrorElement error={this.state.error.comment}/>

                    <LabelElement label={"Skill"} />

                    <InputSelectElement 
                        data={ ['React' , 'Angular' , 'Vue' , 'Electron' , 'Polymer'] }
                        value={this.state.skill}
                        onChange={this.handleChange}
                        size={"Normal"}
                        name="skill"
                        placeholder="Choose your skill"
                    />

                    {/* <ErrorElement error={this.state.error.skill}/> */}

                    <LabelElement label={"Gender"}/>
                    
                    <RadioElement
                        data={['Male','Female','None']}
                        value={this.state.gender}
                        name="gender"
                        onChange={this.handleChange}
                        name="gender"
                    />

                    {/* <ErrorElement error={this.state.error.gender}/> */}

                    <LabelElement label={"languages"}/>

                    <CheckboxElement
                        data={[ {value :'English' , isChecked:false} , { value :'Tamil' , isChecked:false }, {value :'Hindi' , isChecked:false}]}
                        value={this.state.language}
                        name="language"
                        onClick={this.handleLanguage}
                    />

                    {/* <ErrorElement error={this.state.error.language}/> */}

                    <ButtonElement 
                            type="submit" color={'primary'} variant={'contained'} 
                            size={'medium'} value={'Submit'} disabled={!this.validateForm()}
                    />
    
                    {/* <LabelElement label={this.state.label_comments}/>

                    <TextareaElement 
                        value={this.state.comment}
                        onChange={this.handleComments}
                    /> */}

                </form>
                
            </div>
        )
    }
}

export default FormSample