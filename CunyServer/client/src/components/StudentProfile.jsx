import React, { Component } from 'react';
import Auth from '../modules/Auth'
import {Link} from 'react-router-dom';
import axios from 'axios'
import Loading from './Loading'

class StudentProfile extends Component{
    constructor(){
        super();
        this.state = {
            user: null,
            mounted: false,
            accessDenied: false,
        }
    }

    componentDidMount(){
        // console.log('mounted')
        axios('/student/profile', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${Auth.getToken()}`,
                token: `${Auth.getToken()}`,
            }
        })
        .then(res => {
            if(res.data.student){
                this.setState({
                    user: res.data.user,
                    mounted: true,
                })
            }
            else{
                this.setState({
                    accessDenied: true,
                })
            }
            
        })
    }



    render(){
        if(!this.state.mounted){
            return <Loading accessDenied={this.state.accessDenied}/>
        }
        return (
            <div>
                <h1>{this.state.user.person.first_name}'s Profile</h1>
                <div className="info">
                    <div className="Personalinfo">
                        <h3><Link className='nav-link' Link to="/student/profile/courses">My Courses</Link></h3>
                        <h3><Link className='nav-link' Link to="/student/finances">My Finances</Link></h3>
                    </div>

                    <div className="Globalinfo">
                        <h3><Link className='nav-link' Link to="/courses/index">Course Catalog</Link></h3>
                        <h3><Link className='nav-link' Link to="/finances">Finantial Options</Link></h3>
                    </div>
                </div>
                
                <h3>Academic Coach</h3>

                
                <div className="upcoming">
                    <h3>Upcoming</h3>
                    <div className="upcomingDivider"></div>
                    <div className="events">
                        <h5>hw</h5>
                        <h5>quiz</h5>
                        <h5>midterm</h5>
                    </div>
                </div>
            </div>
        
        )
    }
}


export default StudentProfile;