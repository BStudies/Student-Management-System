import React, { Component } from 'react';
import axios from 'axios'
import Auth from '../modules/Auth'
import Loading from './Loading'


class StudentFinances extends Component{

    constructor(){
        super();
        this.state = {
            loading: true,
            tuition: 15000,
        }
    }

    componentDidMount(){
        axios('/students/finance',{
            method: 'GET',
            headers: {
                'Authorization': `Token ${Auth.getToken()}`,
                token: `${Auth.getToken()}`,
            },
        })
        .then(res => {
            // console.log(res)
            this.setState({
                loading: false,
                finances: res.data.finances
            })
        })
    }





    handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value,
        })
    }



    handlePay = () => {
        axios('/students/finance/out_of_pocket',{
            method: 'PUT',
            headers: {
                'Authorization': `Token ${Auth.getToken()}`,
                token: `${Auth.getToken()}`,
            },
            data: {
                // course_id: this.state.course.id
            }
        })
    }



    render(){
        if(this.state.loading){
            return <Loading/>
        }
        return(
            <div>
                <h1>Student Finances</h1>
                <h2>Tutition Total: {this.state.tuition}</h2>
                <div className="outOfPocket">
                    <h3>Paid: <input onChange={e => {this.handleInputChange()}} type="text" name="value" value={this.state.finances.out_of_pocket}/></h3>
                    <button onClick={e => {this.handlePay()}}>Update</button>
                </div>
                
                <h3>Fafsa: {this.state.finances.fafsa}</h3>
                <h3>Tap: {this.state.finances.tap}</h3>
                <h3>Scholarships: {this.state.finances.scholarship}</h3>
                <h3>Loans: {this.state.finances.loan}</h3>
                <h3>Total: {this.state.finances.fafsa + this.state.finances.tap + this.state.finances.scholarship + this.state.finances.loan}</h3>
            </div>
        )
    }
}

export default StudentFinances;