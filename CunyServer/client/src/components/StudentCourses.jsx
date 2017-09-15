import React, { Component } from 'react';
import axios from 'axios'
import Auth from '../modules/Auth'
import Loading from './Loading'

class StudentCourses extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        axios('/courses', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${Auth.getToken()}`,
                token: `${Auth.getToken()}`,
            }
        })

    }
    render(){
        return(
            <div>
                <h1>Student Courses</h1>
            </div>
        )
    }
}


export default StudentCourses;
