import React, { Component } from 'react';
import Loading from './Loading'
import axios from 'axios'
import Auth from '../modules/Auth'
import Courses from './Courses'


class CourseIndex extends Component {
    
    constructor(){
        super();
        this.state = {
            loading: true,
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
        .then(res => {
            // console.log(res)
            // console.log(res.data.courses)
            this.setState({
                user: res.data.user,
                mounted: true,
                courses: res.data.courses,
                loading: false,
            })
        })
    }



    render(){
        if(this.state.loading){
            return <Loading/>
        }
        return (
            <div>
                <h1>All Courses</h1>
                <Courses courses={this.state.courses}/>
            </div>
            
        )
    }
}


export default CourseIndex