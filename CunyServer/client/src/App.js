import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './modules/Auth'


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
        </div>
      </Router>
      
    );
  }
}

export default App;
