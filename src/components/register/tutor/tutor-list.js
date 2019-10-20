import React from "react";
import { withRouter } from "react-router-dom";
import Button from '../../button/button';

const listTutors = ({tutors, handleDelete}) => {

    return(
        <div>
        <center>
        <p>View Tutors</p> 
        <button type="button" className="btn btn-dark btn-lg btn-block" data-toggle="collapse" data-target="#viewstudents">View Registered Tutors</button>
        </center>
 
            <div id="viewstudents" className="collapse">
            <br/>
            <center><h1>Registered Tutors</h1>
                <hr className="my-4"/></center>   
                <br/> 
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Tutors First Name</th>
                        <th scope="col">Tutors Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tutors.map((tutor,index)=>{
                             return ( <tr key={index}>
                                <td>{tutor.tutorFirstName}</td>
                                <td>{tutor.tutorLastName}</td>
                                <td><Button type="button" className="btn btn-danger" onClick={()=>handleDelete(index)} label="Delete"/></td>    
                            </tr> )
                        })}                    
                    </tbody>
                </table>  
        </div>
        </div>
    )
}

export default withRouter(listTutors);