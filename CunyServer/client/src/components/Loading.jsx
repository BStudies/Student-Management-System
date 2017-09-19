import React, { Component } from 'react';


class Loading extends Component{
    render(){
        if(this.props.accessDenied){
            return(
                <div className="LoadingScreen">
                    <h1>Access Denied...</h1>
                    <h3>You need to have different credentials</h3>
                    <div className="loadingCircle"></div>
                </div>
            )
        }
        return (
            <div className="LoadingScreen">
                <h1>Loading...</h1>
                <h3>Put animation here</h3>
                <div className="loadingCircle"></div>
            </div>
        )
    }
}

export default Loading