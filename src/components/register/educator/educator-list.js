import React from "react";
import { withRouter } from "react-router-dom";
import Button from '../../button/button';

const listEducators = ({educators, handleDelete}) => {

    return(
        <div>
            <br/><br/>
        <center>
        <p>View Educators</p> 
        <button type="button" className="btn btn-dark btn-lg btn-block" data-toggle="collapse" data-target="#vieweducators">View Registered Educators</button>
        </center>
 
            <div id="vieweducators" className="collapse">
            <br/>
            <center>
                <h1>Registered Educators</h1>
                <hr className="my-4"/>
                </center>   
                <br/> 
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Educators First Name</th>
                        <th scope="col">Educators Last Name</th>
                        <th scope="col">Educators Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {educators.map((educator, index) => {
                             return ( <tr key={index}>
                                <td>{educator.educatorFirstName}</td>
                                <td>{educator.educatorLastName}</td>
                                <td>{educator.age}</td>
                                <td><Button type="button" className="btn btn-danger" onClick={()=>handleDelete(index)} label="Delete"/>
                                </td>  
                            </tr> ) 
                        })}                       
                    </tbody>
                </table>  
        </div>
        </div>
    )
}

export default withRouter(listEducators);