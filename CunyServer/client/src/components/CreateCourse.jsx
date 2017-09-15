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
        axios('/courses', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${Auth.getToken()}`,
                token: `${Auth.getToken()}`,
            },
            body: {
                course: this.state
            }
        })
        .then(res => {
            console.log(res)
            this.setState({
                user: res.data.user,
                mounted: true,
            })
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
                        Desciption: <textarea onChange={e => this.handleInputChange(e)} type="text" name="name" placeholder="This course covers algebra"/>
                    </div>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        
        )
    }
}


export default CreateCourse;