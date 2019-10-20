import React from "react";
import { withRouter } from "react-router-dom";

const  RegisterEducator = ({state, handleSubmit, inputChange}) => {

    return(
        <div>
    <br/>
          <center>
          <h1 className="display-4">Educators</h1>
          <p className="lead">Add new Educators or View existing ones</p>
            <hr className="my-4"/> 
            <p>Add New Educator</p>   
    <button type="button" className="btn btn-dark btn-lg btn-block" data-toggle="collapse" data-target="#educator">Register Educator</button>
    </center>
  <div id="educator" className="collapse">
            <form onSubmit={handleSubmit}>
    <br/>
    <center>
      <h1>Register Educator</h1>
      </center>                
                <hr className="my-4"/>
                <br/>  
            <div className="form-group">
              <label htmlFor="educatorFirstName">First name</label>
              <input 
              type="text" 
              className="form-control"
              id="educatorFirstName" 
              placeholder="Enter educator's first name"
              required
              value= {state.educatorFirstName}
              onChange={inputChange}/>
            </div> 
            <div className="form-group">
              <label htmlFor="educatorLastName">Last name</label>
              <input 
              type="text" 
              className="form-control"
              id="educatorLastName" 
              placeholder="Enter educator's last name"
              required
              value= {state.educatorLastName}
              onChange={inputChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="age">Educator Age</label>
              <input 
              type="number" 
              className="form-control"
              id="age" 
              placeholder="Enter educator's age"
              min="1"
              required
              value= {state.age}
              onChange={inputChange}/>
            </div>
            <br/>
            <button type="submit" className="btn btn-dark btn-lg">Register</button>                
          </form>
          </div>
        </div>
        
    )
}

export default withRouter(RegisterEducator)