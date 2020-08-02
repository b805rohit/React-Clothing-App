import "./Sign-in.styles.scss"
import React, { Component } from 'react'
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import { signInWithGoogle } from "../../firebase/firebase.utils"
export default class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(event){
        const { name,value }=event.target
        this.setState({[name]:value});
    }
    handleSubmit(event){
        event.preventDefault()
        this.setState({email:'',password:''});
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" type="email" name="email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput label="password" type="password" name="password" value={this.state.password} handleChange={this.handleChange} required />
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton googleSignIn onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                </form>
            </div>
        )
    }
}
