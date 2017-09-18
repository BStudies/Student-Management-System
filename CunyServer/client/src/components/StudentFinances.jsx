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
            console.log(res)
            this.setState({
                loading: false,
                finances: res.data.finances,
                total: res.data.finances.out_of_pocket + res.data.finances.fafsa + res.data.finances.tap + res.data.finances.scholarship + res.data.finances.loan
            })
        })
    }





    handleInputChange = (e) => {
        console.log(e.target)
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value,
        })
    }



    handlePay = (e) => {
        e.preventDefault()
        console.log(this.state.out_of_pocket)
        axios('/students/finance/out_of_pocket',{
            method: 'PUT',
            headers: {
                'Authorization': `Token ${Auth.getToken()}`,
                token: `${Auth.getToken()}`,
            },
            data: {
                value: this.state.out_of_pocket
            }
        })
        .then(res => {
            this.props.handleRedirect('/')
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
                    <form onSubmit={e => {this.handlePay(e)}}>
                        <h3>Paid: <input onChange={e => {this.handleInputChange(e)}} type="number" name="out_of_pocket" placeholder={this.state.finances.out_of_pocket}/></h3>
                        <input type="submit" value="Update"/>
                    </form>
                    
                </div>
                
                <h3>Fafsa: {this.state.finances.fafsa}</h3>
                <h3>Tap: {this.state.finances.tap}</h3>
                <h3>Scholarships: {this.state.finances.scholarship}</h3>
                <h3>Loans: {this.state.finances.loan}</h3>
                <h3>Total: {this.state.total}</h3>
                <h3>Due: {this.state.tuition - this.state.total}</h3>
            </div>
        )
    }
}

export default StudentFinances;