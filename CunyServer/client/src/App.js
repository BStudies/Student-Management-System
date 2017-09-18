import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Auth from './modules/Auth'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redirect } from 'react-router';



// components
import Home from './components/Home'
import StudentProfile from './components/StudentProfile'
import StudentCourses from './components/StudentCourses'
import ProfessorProfile from './components/ProfessorProfile'
import CreateCourse from './components/CreateCourse'
import Loading from './components/Loading'
import ProfessorProfileCourse from './components/ProfessorProfileCourse'
import Nav from './components/Nav'
import NotFound from './components/NotFound'
import CourseIndex from './components/CourseIndex'
import StudentFinances from './components/StudentFinances'






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


  handleIncorrectPath = () => {
    // if(this)
  }

  

  render() {
    return (
      <Router>
        <div className="App">
          <Nav handleRedirect={this.handleRedirect}/>
          <Switch>
            <Route exact path="/" render={ () => <Home handleRedirect={this.handleRedirect}/>}/>

            
            {/*profiles*/}
            <Route exact path="/students/profile" render={ () => <StudentProfile handleRedirect={this.handleRedirect}/>}/>
            <Route exact path="/student/profile/courses" render={ () => <StudentCourses handleRedirect={this.handleRedirect}/>}/>
            <Route exact path="/professors/profile" render={ () => <ProfessorProfile handleRedirect={this.handleRedirect}/>}/>


            {/*finances*/}
            <Route exact path="/student/finances" render={ () => <StudentFinances handleRedirect={this.handleRedirect}/>}/>

            
            {/*creation*/}
            <Route exact path="/create-course" render={ () => <CreateCourse handleRedirect={this.handleRedirect}/>}/>
            
            {/*viewing*/}
            <Route exact path="/courses/index" render={ () => <CourseIndex handleRedirect={this.handleRedirect}/>}/>
            <Route exact path="/professors/profile/courses" render={ () => <ProfessorProfileCourse handleRedirect={this.handleRedirect}/>}/>


            <Route exact path="/loading" render={ () => <Loading handleRedirect={this.handleRedirect}/>}/>

            <Route exact path="*" render={() => <NotFound/>}/>
          </Switch>

           {this.redirectTo()} 
        </div>
      </Router>
      
    );
  }
}

export default App;
