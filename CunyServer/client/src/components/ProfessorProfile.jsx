import React, { Component } from 'react';
import Auth from '../modules/Auth'
import {Link} from 'react-router-dom';
import axios from 'axios'
import Loading from './Loading'

class ProfessorProfile extends Component{
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
        axios('/professor/profile', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${Auth.getToken()}`,
                token: `${Auth.getToken()}`,
            }
        })
        .then(res => {
            console.log(res)
            if(res.data.accessDenied){
                this.setState({
                    user: res.data.user,
                    accessDenied: res.data.accessDenied
                })
            }
            else{
                this.setState({
                    user: res.data.user,
                    mounted: true,
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

                    <div className="Workinfo">
                        <h3><Link className='nav-link' Link to="/professors/profile/courses">Teaching Courses</Link></h3>
                        <h3><Link className='nav-link' Link to="/create-course">Create Course</Link></h3>
                    </div>
 
                </div>
                

                
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


export default ProfessorProfile;