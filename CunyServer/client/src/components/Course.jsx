import React, { Component } from 'react';


class Course extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    displayCourse = () => {
        return(
            <div>
                <h3>Course:</h3>{this.props.course.name}
                <h5>Description:</h5>{this.props.course.description}
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