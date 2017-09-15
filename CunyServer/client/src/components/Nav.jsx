import React, { Component } from 'react';
import Auth from '../modules/Auth'
import {Link} from 'react-router-dom';


class Nav extends Component{
    logoutView = () => {
        if (Auth.isUserAuthenticated()){
            return (
                // <Link onCLick={e => {Auth.deauthenticateUser()}} className='nav-link' Link to="/">Logout</Link>
                <button onClick={e => {
                        Auth.deauthenticateUser()
                        this.props.handleRedirect('/')
                    }
                    }>
                    Logout
                </button>
            )
        }
        return
    }
    render(){
        return(
            <nav>
                <Link className='nav-link' Link to="/students/profile">My Profile</Link>
                {this.logoutView()}
            </nav>
        )
    }
}

export default Nav