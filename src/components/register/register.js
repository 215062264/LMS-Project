import React from "react";
import { withRouter } from "react-router-dom";

class Register extends React.Component{
    
  constructor(props){
    super(props)
}
   

render(){
  return (
      <div>
          <center>
          <h1>Welcome to Learner Management System</h1>
          <hr className="my-4"/>
          <img src="lms_logo.png" className="img-fluid" alt=""/>
          <hr className="my-4"/>
          </center>
      </div>
      
  )
}


}

export default withRouter(Register)