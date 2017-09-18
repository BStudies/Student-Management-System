import React, { Component } from 'react';


class StudentFinances extends Component{
    render(){
        return(
            <div>
                <h1>Student Finances</h1>
                <h2>Tutition Total: 15,000</h2>
                <div className="outOfPocket">
                    <h3>Paid: 5,000</h3>
                    <button>Change Pay</button>
                </div>
                
                <h3>Fafsa: 3,000</h3>
                <h3>Tap: 2,000</h3>
                <h3>Scholarships: 5,000</h3>
                <h3>Loans: 5,000</h3>
                <h3>Total: 15,000</h3>
            </div>
        )
    }
}

export default StudentFinances;