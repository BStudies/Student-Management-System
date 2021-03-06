import React, { Component } from 'react';
import Auth from '../modules/Auth'
import {Link} from 'react-router-dom';
import axios from 'axios'
import Loading from './Loading'

class CreateCourse extends Component{
    constructor(){
        super();
        this.state = {
        }
    }

    
    handleFormSubmit = e => {
        e.preventDefault();
        console.log("this is where we push to server")
        console.log(this.state)
        axios('/courses', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${Auth.getToken()}`,
                token: `${Auth.getToken()}`,
            },
            data: {
                course: this.state
            }
        })
        .then(res => {
            console.log(res)
            this.props.handleRedirect('/')
        })
    }


    handleInputChange = e => {
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    render(){
        // if(!this.state.mounted){
        //     return <Loading/>
        // }
        return (
            <div>
                <h1>Create Course</h1>
                <form onSubmit={e => {this.handleFormSubmit(e)}}>
                    <div>
                        Name: <input onChange={e => this.handleInputChange(e)} type="text" name="name" placeholder="Math-101"/>
                    </div>
                    <div>
                        Desciption: <textarea onChange={e => this.handleInputChange(e)} type="text" name="description" placeholder="This course covers algebra"/>
                    </div>
                    <div>
                        Cost: <input onChange={e => this.handleInputChange(e)} type="text" name="cost" placeholder="$$$"/>
                    </div>
                    <input className="myInput" type="submit" value="submit"/>
                </form>
            </div>
        
        )
    }
}


export default CreateCourse;