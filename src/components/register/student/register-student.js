import React from "react";
import { withRouter } from "react-router-dom";

const  RegisterStudent = ({state, handleStudentSubmit, inputChange}) => {

    return(
        <div>
            <br/>
    <center>
    <h1 className="display-4">Students</h1>
            <p className="lead">Add new Students or View existing ones</p>
            <hr className="my-4"/>
            <p>Add New Student</p>    
		<button type="button" className="btn btn-dark btn-lg btn-block" data-toggle="collapse" data-target="#student">Register Student</button>
  </center>
  <div id="student" className="collapse">
          <form onSubmit={handleStudentSubmit}>
        <br/>
        <center>
        <h1>Register Student</h1>
      </center>              
              <hr className="my-4"/>
              <br/>  
          <div className="form-group">
            <label htmlFor="studentFirstName">First name</label>
            <input 
            type="text" 
            className="form-control"
            id="studentFirstName" 
            placeholder="Enter student first name"
            required
            value= {state.studentFirstName}
            onChange={inputChange}/>
          </div> 
          <div className="form-group">
            <label htmlFor="studentLastName">Last name</label>
            <input 
            type="text" 
            className="form-control"
            id="studentLastName" 
            placeholder="Enter student last name"
            required
            value= {state.studentLastName}
            onChange={inputChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input 
            type="number" 
            className="form-control"
            id="age" 
            placeholder="Enter student age"
            min="1"
            required
            value= {state.age}
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

export default withRouter(RegisterStudent)