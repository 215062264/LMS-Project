import React from "react";
import { Link } from "react-router-dom";

class  Navbar extends React.Component{

    constructor(props){
        super(props)
    }

render(){
   
  return (
  
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
    <img src="lms_logo.png" width="58px" height="58px" className="img-fluid" alt=""/></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        {
            this.props.isAuthenticated ? <li className="nav-item">
            <Link className="nav-link" to="/register">Home</Link>
        </li> :  <li className="nav-item">
            <Link className="nav-link" to="/register">Home</Link>
        </li>
        }
        {
            this.props.isAuthenticated ? <li className="nav-item">
            <Link className="nav-link" to="/course">Courses</Link>
        </li> :  <li className="nav-item">
            <Link className="nav-link" to="/course">Courses</Link>
        </li>
        }
        {
            this.props.isAuthenticated ? <li className="nav-item">
            <Link className="nav-link" to="/student">Students</Link>
        </li> :  <li className="nav-item">
            <Link className="nav-link" to="/student">Students</Link>
        </li>
        }
        {
            this.props.isAuthenticated ? <li className="nav-item">
            <Link className="nav-link" to="/educator">Educators</Link>
        </li> :  <li className="nav-item">
            <Link className="nav-link" to="/educator">Educators</Link>
        </li>
        }
        {
            this.props.isAuthenticated ? <li className="nav-item">
            <Link className="nav-link" to="/tutors">Tutors</Link>
        </li> :  <li className="nav-item">
            <Link className="nav-link" to="/tutors">Tutors</Link>
        </li>
        }
        {/* {
            this.props.isAuthenticated ? <li className="nav-item">
            <Link className="nav-link" to="/login">Logout</Link>
        </li> :  <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
        </li>
        } */}
        {
            this.props.isAuthenticated ? <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>:
                <li className="nav-item">
                <Link className="nav-link" to="/about">About us</Link>
            </li>
        }
        </ul>
    </div>
 </nav>);
}
}

export default Navbar;