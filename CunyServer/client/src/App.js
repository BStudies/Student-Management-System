import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './modules/Auth'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Redirect } from 'react-router';



// components
import Home from './components/Home'

class App extends Component {
  constructor(){
    super();
    this.state = {
      auth: Auth.isUserAuthenticated(),
      shouldRedirect: false,
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={ () => <Home/>}/>
          {/* {this.redirectTo()} */}
        </div>
      </Router>
      
    );
  }
}

export default App;
