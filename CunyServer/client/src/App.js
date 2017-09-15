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
      redirect: false,
      redirecting: '',
    }
  }



  // pulled redirect from my project 3
  handleRedirect = (path) => {
    this.setState({
      redirect: true,
      redirecting: path,
    })
    console.log(`The path is: ` + path)

  }
// for rendering the path
  redirectTo = () => {
    if(this.state.redirect){
      console.log('redirect')
      this.setState({
        redirect: false,
      })
      return(<Redirect to={this.state.redirecting}/>)
    }
  }




  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={ () => <Home handleRedirect={this.handleRedirect}/>}/>
           {this.redirectTo()} 
        </div>
      </Router>
      
    );
  }
}

export default App;
