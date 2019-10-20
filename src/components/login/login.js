import React from "react";
import { withRouter } from "react-router-dom";
import "./login.css"


class  Login extends React.Component {
    
  constructor(props){
    super(props)
}

    handleLogin = e =>{
      
    }

    render(){
        return (
            <form onSubmit={this.props.onLogin}>
            <br/>
            <center>
            <h1>Login</h1>
            <hr className="my-4"/>
            </center>
            <br/>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
              type="text" 
              className="form-control"
              id="username" 
              placeholder="Enter Username"
              value= {this.props.username}
              onChange={this.props.inputChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Password"
              value={this.props.password}
              onChange={this.props.inputChange}/>
            </div>
            <div className="form-group form-check">
              <input 
              type="checkbox" 
              className="form-check-input" 
              id="remeber"
              onChange={this.props.inputChange}/>
              <label className="form-check-label" htmlFor="remeber">Remember me</label>
            </div>
            <br/>
            <br/>
            <button type="submit" className="btn btn-dark btn-lg">Login</button>
          </form>
        );
    }
}

export default withRouter(Login)