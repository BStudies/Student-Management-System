import React, { Component } from 'react';
import Course from './Course'

class Courses extends Component{
    constructor(){
        super();
        this.state = {

        }
    }


    handleCoursesList = () => {
        return(this.props.courses.map((course) => {
            return (<Course addRegister={this.props.addRegister} course={course}/>)
        }))
    }

    render(){
        return(
            <div>
                {this.handleCoursesList()}
            </div>
        )
    }
}


export default Courses;