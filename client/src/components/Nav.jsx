import React, { Component } from 'react';
import Auth from '../modules/Auth'
import {Link} from 'react-router-dom';


class Nav extends Component{

    handleLogout = () => {
        Auth.deauthenticateUser()
        this.props.handleRedirect('/')
    }



    logoutView = () => {
        if (Auth.isUserAuthenticated()){
            return (
                // <Link onCLick={e => {Auth.deauthenticateUser()}} className='nav-link' Link to="/">Logout</Link>
                <nav>
                    <Link className='nav-link' Link to="/students/profile">My Student Profile</Link>
                    <Link className='nav-link' Link to="/professors/profile">My Professor Profile</Link>
                    <button onClick={this.handleLogout}>
                    Logout
                </button>
                </nav>
            )
        }
        return (
        <nav>
            <button onClick={e => {this.props.handleRedirect('/')}}>
                    Login
            </button>
        </nav>
        )
    }
    render(){
        return(
            <div>
                {this.logoutView()}
            </div>
        )
    }
}

export default Nav