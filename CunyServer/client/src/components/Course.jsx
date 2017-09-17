import React, { Component } from 'react';


class Course extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    displayCourse = () => {
        return(
            <div className="course">
                <h3>Course: {this.props.course.name}</h3>
                <h5>Description: {this.props.course.description}</h5>
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