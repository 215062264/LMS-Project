import React from "react";
import { withRouter } from "react-router-dom";
import Button from '../../button/button';

const listStudents = ({students, handleDelete}) => {

    return(
        <div>
        <center>
        <p>View Students</p> 
        <button type="button" className="btn btn-dark btn-lg btn-block" data-toggle="collapse" data-target="#viewstudents">View Registered Students</button>
        </center>
 
            <div id="viewstudents" className="collapse">
            <br/>
            <center><h1>Registered Students</h1>
                <hr className="my-4"/></center>   
                <br/> 
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Student First Name</th>
                        <th scope="col">Student Last Name</th>
                        <th scope="col">Student Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student,index)=>{
                             return ( <tr key={index}>
                                <td>{student.studentFirstName}</td>
                                <td>{student.studentLastName}</td>
                                <td>{student.age}</td>
                                <td><Button type="button" className="btn btn-danger" onClick={()=>handleDelete(index)} label="Delete"/></td>    
                            </tr> )
                        })}                       
                    </tbody>
                </table>  
        </div>
        </div>
    )
}

export default withRouter(listStudents);