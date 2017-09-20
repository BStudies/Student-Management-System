import React, { Component } from 'react';
import axios from 'axios'
import Auth from '../modules/Auth'
import Loading from './Loading'
import Courses from './Courses'
class StudentCourses extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        axios('/student/profile/courses', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${Auth.getToken()}`,
                token: `${Auth.getToken()}`,
            }
        })
        .then(res => {
            console.log(res)
            // console.log(res.data.courses)
            this.setState({
                user: res.data.user,
                mounted: true,
                courses: res.data.courses
            })
        })

    }
    render(){
        if(this.state.mounted){
            return(
                <div>
                    <h1>Student Courses</h1>
                    <Courses courses={this.state.courses}/>
                </div>
            )
        }
        return(<Loading/>)
    }
}


export default StudentCourses;
