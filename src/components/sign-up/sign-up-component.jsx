import "./sign-up.styles.scss"
import React, { Component } from 'react'
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import { auth,createUserProfileDocuments } from "../../firebase/firebase.utils"

export default class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirm_passowrd:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(event){
        const { name,value }=event.target
        this.setState({[name]:value});
    }
    async handleSubmit(event){
        event.preventDefault()
        const {displayName,email,password,confirm_passowrd}=this.state

        if(password!==confirm_passowrd){
            alert('Password Is Not Matching')
            return
        }
        try{
            const { user }=await auth.createUserWithEmailAndPassword(email,password)
    
            createUserProfileDocuments({...user,displayName})
        }
        catch(error){
            console.log("Error is:",error)
        }

        
        this.setState({
            displayName:'',
            email:'',
            password:'',
            confirm_passowrd:''
        });
    }
    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="Display Name" type="text" name="displayName" value={this.state.displayName} handleChange={this.handleChange} required />
                    <FormInput label="Email" type="email" name="email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput label="Password" type="password" name="password" value={this.state.password} handleChange={this.handleChange} required />
                    <FormInput label="Confirm Password" type="password" name="confirm_passowrd" value={this.state.confirm_passowrd} handleChange={this.handleChange} required />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}
