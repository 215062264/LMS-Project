import React from 'react'
import Login  from "./components/login/login";
import Navbar from './components/navigation/navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home/home';
import About from "./components/about/about";
import Logout from './components/logout/logout';
import StudentPage from './components/register/student/student-page';
import Course from './components/course/course';
import EducatorPage from './components/register/educator/educator-page';
import TutorPage from './components/register/tutor/tutor-page';
//import ProtectedRoute from "./protected-route";
// import RegisterTutor from './components/register/registerTutor';

class  App extends React.Component {
  state = {
    isAuthenticated: false,
    username: null,
    password: null,
    remember: false
  }

  loginHandler = event => {
    event.preventDefault();
   // const username =this.state.username;
    this.setState({
      isAuthenticated: true
    })
  }

  inputChange = event => {
    this.setState({
        [event.target.id]: event.target.value
    });

  }

  logoutHandler = () => {
    this.setState({
      isAuthenticated: false
    })
  }

  render(){

    return <div>
    
        <BrowserRouter>
        <Navbar isAuthenticated = {this.state.isAuthenticated}/>
    <Switch>
      <Route path="/login" render={() =>  <Login 
        onLogin={this.loginHandler} 
        inputChange={this.inputChange} 
        username={this.state.username} 
        password={this.state.password} {...this.props} />} />
        <Route path="/logout" render={()=> <Logout logout={this.loginHandler}/>} />
        <Route path="/student" render={()=> <StudentPage />}/>
        <Route path="/educator" render={()=> <EducatorPage />}/>
        <Route path="/tutors" render={()=> <TutorPage />}/>
        <Route path="/course" render={()=> <Course />}/>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
    </div>
  }
}

export default App;
