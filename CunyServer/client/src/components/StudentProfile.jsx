import React, { Component } from 'react';
import Auth from '../modules/Auth'
import {Link} from 'react-router-dom';



class StudentProfile extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount(){
        // console.log('mounted')
    }

    render(){
        return (
            <div>
                <h1>Students Profile</h1>
                <div className="info">
                    <div className="Personalinfo">
                        <h3><Link className='nav-link' Link to="/student/profile/courses">My Courses</Link></h3>
                        <h3><Link className='nav-link' Link to="/finances">My Finances</Link></h3>
                    </div>

                    <div className="Globalinfo">
                        <h3><Link className='nav-link' Link to="/courses/index">Course Catalog</Link></h3>
                        <h3><Link className='nav-link' Link to="/finances">Finantial Options</Link></h3>
                    </div>
                </div>
                
                <h3>Academic Coach</h3>

                
                <div className="upcoming">
                    <h3>Upcoming</h3>
                    <ul>
                        <li>hw</li>
                        <li>quiz</li>
                        <li>midterm</li>
                    </ul>
                </div>
            </div>
        
        )
    }
}


export default StudentProfile;