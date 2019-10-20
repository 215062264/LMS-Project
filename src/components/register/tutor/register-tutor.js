import React from "react";
import { withRouter } from "react-router-dom";

const  RegisterTutor = ({state, handleSubmit, inputChange}) => {

    return(
        <div>
            <br/>
    <center>
    <h1 className="display-4">Tutors</h1>
            <p className="lead">Add new Tutors or View existing ones</p>
            <hr className="my-4"/>
            <p>Add New Tutor</p>    
		<button type="button" className="btn btn-dark btn-lg btn-block" data-toggle="collapse" data-target="#tutor">Register Tutor</button>
  </center>
  <div id="tutor" className="collapse">
          <form onSubmit={handleSubmit}>
        <br/>
        <center>
        <h1>Register Tutor</h1>
      </center>              
              <hr className="my-4"/>
              <br/>  
          <div className="form-group">
            <label htmlFor="tutorFirstName">First name</label>
            <input 
            type="text" 
            className="form-control"
            id="tutorFirstName" 
            placeholder="Enter tutor first name"
            required
            value= {state.tutorFirstName}
            onChange={inputChange}/>
          </div> 
          <div className="form-group">
            <label htmlFor="tutorLastName">Last name</label>
            <input 
            type="text" 
            className="form-control"
            id="tutorLastName" 
            placeholder="Enter tutor last name"
            required
            value= {state.tutorLastName}
            onChange={inputChange}/>
          </div>
          <br/>
          <button type="submit" className="btn btn-dark btn-lg">Register</button>  
        </form>
        </div>
        <br/>    
        <br/>
        </div>
    )
}

export default withRouter(RegisterTutor)