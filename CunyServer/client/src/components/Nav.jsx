import React, { Component } from 'react';
import Auth from '../modules/Auth'
import {Link} from 'react-router-dom';



class Nav extends Component{
    render(){
        return(
            <nav>
                <Link className='nav-link' Link to="/students/profile">My Profile</Link>
                <Link className='nav-link' Link to="/logout">Logout</Link>
            </nav>
        )
    }
}

export default Nav