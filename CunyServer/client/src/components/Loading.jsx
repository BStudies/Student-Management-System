import React, { Component } from 'react';


class Loading extends Component{
    render(){
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