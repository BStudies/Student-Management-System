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
        return (<button onClick={e => {
                        this.props.handleRedirect('/')
                    }
                    }>
                    Login
                </button>)
    }
    render(){
        return(
            <nav>
                <Link className='nav-link' Link to="/students/profile">My Student Profile</Link>
                <Link className='nav-link' Link to="/professors/profile">My Professor Profile</Link>

                {this.logoutView()}
            </nav>
        )
    }
}

export default Nav