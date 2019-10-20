import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Loader from "../loader/loader";


class Course extends React.Component{

    constructor(props){
        super(props)
    }


    //VARIABLES 
    state = {
        courseName: "",
        description: "",
        loading: false,
        courses: []
    }

    inputChange = e => {
        this.setState({[e.target.id]: e.target.value})
        console.log("Current State", this.state);
        
    }

    //FETCH DATA AND DISPLAY
    componentDidMount() {
        axios.get('/api/admin/course/read/all', {
            auth:{
                username: 'admin',
                password: 'admin'
            }
        })
        .then(results => {
           let courses = results.data;
           this.setState({courses})
        })
    }

    //CREATE COURSE  
    handleCourseSubmit = e => {
        e.preventDefault();
        this.setState({loading: true})
        const body = this.state;

        axios.post('/api/admin/course/create', 
            body,
           { auth:{
                username:"admin",
                password: "admin"
            }}
         ).then(response => {
             let course = response.data;
             let courses = this.state.courses;
             courses.push(course)
             this.setState({
                 courses,
                 loading:false
                })       
        })
    }

    //DELETE COURE 
    handleDelete = (e, index) =>{
       const course = this.state.courses[index];

       axios.delete("/api/admin/course/delete/"+ course.courseId,{
           auth:{
               username: "admin",
               password: "admin"

           }
       }).then(res=>{
           const updated = this.state.courses.splice(index, 1);
           this.setState({updated})
       })
    }


    render(){

        const { courses } = this.state;

        if (this.state.loading) {
            return <Loader />
        }

        return(
            <div>

            <br/>
            <center> 
            <h1 className="display-4">Courses</h1>
            <p className="lead">Add new Courses or View existing ones</p>
            <hr className="my-4"/>
                   
            <p>Add New Course</p>            
            <center>   
            <button type="button" className="btn btn-dark btn-lg btn-block" data-toggle="collapse" data-target="#newcourse">Add New Course</button>
            </center>
            <div id="newcourse" className="collapse">
            <form onSubmit={this.handleCourseSubmit}>
            <br/>
                <h1>Create New Course</h1>
                <hr className="my-4"/>
                <br/>  
            
            <div className="form-group">
              <label htmlFor="courseName">Name of Course</label>
              <input 
              type="text" 
              className="form-control"
              id="courseName" 
              placeholder="Enter Course Name"
              required
              value= {this.props.courseName}
              onChange={this.inputChange}/>
            </div> 

            <div className="form-group">
              <label htmlFor="description">Course Description</label>
              <input 
              type="text" 
              className="form-control"
              id="description" 
              placeholder="Enter Description Of New Course"
              required
              value= {this.description}
              onChange={this.inputChange}/>
            </div>

            <br/>
            <button type="submit" className="btn btn-dark btn-lg">Create</button>  
          </form>
          </div> 


            <br/> <br/>  
            <p>View Courses</p>
            <center>   
            <button type="button" className="btn btn-dark btn-lg btn-block" data-toggle="collapse" data-target="#viewcourse">View Courses</button>
            </center>
            <div id="viewcourse" className="collapse">
            <form onSubmit={this.componentDidMount}>
            <br/>
                <h1>View Courses</h1>
                <hr className="my-4"/>
                <br/>  
         
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Course Name</th>
                        <th scope="col">Course Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.courses.map((course, index) => {
                        return <tr key={index}>
                        <td>{course.courseName}</td>
                        <td>{course.description}</td> 
                        <td><button type="button" className="btn btn-danger" onClick={e=>this.handleDelete(e, index)}>Delete</button></td>
                        </tr>      
                    })}                 
                    </tbody>
                </table>  
          </form>
        </div>           

    </center>    
         

</div>
            
        );
    }

}

export default withRouter(Course)