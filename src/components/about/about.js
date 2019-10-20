import React from "react";
import { withRouter } from "react-router-dom";

const about = () => (
    
    <div>
        <br/>
        <center>
         <h1>About Learner Management System</h1>
         <p className="lead">Learnering Management System is a system to manage the registration of 
             tertiary education students and staff</p>
         <hr className="my-4"/>
         <img src="lms_logo.png" className="img-fluid" alt=""/>
         <br/>
        </center> 
    </div>
    
)

export default withRouter(about);