import React, { Component } from 'react';
import axios from 'axios'

class StudentCourses extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        axios.get('/courses', {
            headers: {},
            
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
