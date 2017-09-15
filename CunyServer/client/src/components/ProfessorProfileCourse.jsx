import React, { Component } from 'react';
import axios from 'axios'
import Auth from '../modules/Auth'
import Loading from './Loading'
class ProfessorProfileCourse extends Component{

    constructor(){
        super();
        this.state = {
            mounted: false,
        }
    }


    
    componentDidMount(){
        console.log('mounted')
        axios('/professor/profile/courses', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${Auth.getToken()}`,
                token: `${Auth.getToken()}`,
            }
        })
        .then(res => {
            console.log(res)
            this.setState({
                user: res.data.user,
                mounted: true,
            })
        })
    }



    render(){
        if(this.state.mounted){
            return(
                <div>
                    <h1>Professors Courses</h1>
                </div>
            )
        }
        return(<Loading/>)
    }
}


export default ProfessorProfileCourse;