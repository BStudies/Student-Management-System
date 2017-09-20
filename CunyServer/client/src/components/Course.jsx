import React, { Component } from 'react';
import axios from 'axios'
import Auth from '../modules/Auth'
class Course extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount(){
        this.setState({
            course: this.props.course
        })
    }

    handleCourseRegistration = () => {
        // console.log(`Registering for course ${this.state.course.id}`)
        axios('/students/courses', {
            method: 'PUT',
            headers: {
                'Authorization': `Token ${Auth.getToken()}`,
                token: `${Auth.getToken()}`,
            },
            data: {
                course_id: this.state.course.id
            }

        })
        .then(res => {
            this.setState({
                user: res.data.user,
                mounted: true,
                courses: res.data.courses
            })
            this.props.handleRedirect("/")
        })
    }

    displayCourse = () => {
        if(this.props.addRegister){
            return(
                <div className="course">
                    <h3>Course: {this.props.course.name}</h3>
                    <h5>Description: {this.props.course.description}</h5>
                    <h5>Professor: {this.props.course.professor_id}</h5>
                    <button className="myInput" onClick={e=>this.handleCourseRegistration()}>Register</button>
                </div>
            )
        }
        return(
            <div className="course">
                <h3>Course: {this.props.course.name}</h3>
                <h5>Description: {this.props.course.description}</h5>
                <h5>Professor: {this.props.course.professor_id}</h5>
            </div>
            
        )
    }

    render(){
        return(
            <div>
                {this.displayCourse()}
            </div>
        )
    }
}


export default Course;