
import React, { Component } from 'react';
import axios from 'axios'
import Auth from '../modules/Auth'
import {Redirect } from 'react-router'
import Loading from './Loading'



class Home extends Component{
    constructor(){
        super();
        this.state = {
            loading: false,
        }
    }

    // username email password
    handleInputChange = (e) => {
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }
    handleAccountTypeInputChange = e => {
        e.preventDefault()
        console.log(e.target)
        let name = e.target.name
        let value = e.target.className
        this.setState({
            [name]: value
        })
    }
    // date_of_birth first_name last_name emergency_contact

    handleRegistrationFormSubmit = (e) => {
        e.preventDefault()
        // console.log("this is where we handle registration")
        this.setState({
            loading: true,
        })
        axios.post(`/${this.state.accountType}`, {
            user: {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            }, 
            person: {
                date_of_birth: this.state.date_of_birth,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                emergency_contact: this.state.emergency_contact,
            }
        })
        .then(res => {
            this.setState({
                loading: false,
            })
            console.log(res)
            console.log("User created")
            Auth.authenticateToken(res.data.token)
            this.props.handleRedirect(`/${res.data.accountType}/profile`)
        })

    }
    handleLoginFormSubmit = (e) => {
        e.preventDefault()
        // console.log("this is where we handle login")

        axios.post('/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(res => {

            // console.log(res.data.token)
            Auth.authenticateToken(res.data.token)
            this.props.handleRedirect('/students/profile')
        })
    }


    handleLoadingScreen = e => {
        if(this.state.loading){
            return <Loading/>
        }
    }



    render(){
        if(!Auth.isUserAuthenticated()){
            return(
                <div>
                    {this.handleLoadingScreen()}
                    <h1>Welcome To Cuny</h1>
                
                    <div className="auth-forms">
                        <div className="Registration">
                            <h3>Registration</h3>
                            <form onSubmit={e => this.handleRegistrationFormSubmit(e)}>
                                <div className="accountType">
                                    <div className="accountTypeSelection">
                                        <input onChange={e=>this.handleAccountTypeInputChange(e)} type="radio" className="admins" name="accountType"></input> Admin
                                    </div>
                                    <div className="accountTypeSelection">
                                        <input onChange={e=>this.handleAccountTypeInputChange(e)} type="radio" className="professors" name="accountType"></input> Professor
                                    </div>
                                    <div className="accountTypeSelection">
                                        <input onChange={e=>this.handleAccountTypeInputChange(e)} type="radio" className="students" name="accountType"></input> Student
                                    </div>
                                </div>
                                
                                <input onChange={e=>this.handleInputChange(e)} type="text" name="first_name" placeholder='First Name'/>
                                <input onChange={e=>this.handleInputChange(e)} type="text" name="last_name" placeholder='Last Name'/>
                                <input onChange={e=>this.handleInputChange(e)} type="email" name="email" placeholder='Email'/>
                                <input onChange={e=>this.handleInputChange(e)} type="text" name="username" placeholder='Username'/>
                                <input onChange={e=>this.handleInputChange(e)} type="password" name="password" placeholder='Password'/>
                                <input onChange={e=>this.handleInputChange(e)} type="date" name="date_of_birth" placeholder='Date Of Birth'/>
                                <input onChange={e=>this.handleInputChange(e)} type="tel" name="emergency_contact" placeholder='Emergency Contact'/>
                                <input type="submit" />
                            </form>
                        </div>
                        
                        <div className="divider"/>

                        <div className="Login">
                            <h3>Login</h3>
                            <form>
                                <input onChange={e=>this.handleInputChange(e)} type="text" name="username" placeholder='Username'/>
                                <input onChange={e=>this.handleInputChange(e)} type="password" name="password" placeholder='Password'/>
                                <input onClick={e => this.handleLoginFormSubmit(e)} type="submit" />
                            </form>
                        </div>
                        

                    </div>
                </div>
                
            )
        }
        return(<Redirect to="/students/profile"/>)
    }
}


export default Home