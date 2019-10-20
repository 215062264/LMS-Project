import React from "react";
import { withRouter, Route, Link, BrowserRouter, Switch } from "react-router-dom";
import axios from "axios";
import Loader from "../../loader/loader";
import RegisterStudent from "./register-student";
import Students from './student-list';

class StudentPage extends React.Component{


    state = {
        studentFirstName: "",
        studentLastName:  "",
        age: 0,
        loading: false,
        students: []
    }

    inputChange = e => {
        this.setState({[e.target.id]: e.target.value})   
    }

    //CREATE STUDENT
    handleSubmit = e => {
        e.preventDefault();
        this.setState({loading: true})
        const body = this.state;

        axios.post('/api/student/create', 
            body,
           { auth:{
                username:"admin",
                password: "admin"
            }}
         ).then(response => {
            let student = response.data;
            let students = this.state.students;
            students.push(student)
            this.setState({
                students,
                loading: false
            })
            
        })
    }

    //DELETE EDUCATOR
    handleDelete = (index) =>{
        const student = this.state.students[index];
 
        axios.delete("/api/student/delete/"+ student.studentId,{
            auth:{
                username: "admin",
                password: "admin"
 
            }
        }).then(res=>{
            const updated = this.state.students.splice(index, 1);
            this.setState({updated})
        })
     }


//FETCH DATA AND DISPLAY STUDENTS
    componentDidMount() {
        axios.get('/api/student/read/all', {
            auth:{
                username: 'admin',
                password: 'admin'
            }
        })
        .then(results => {
           let students = results.data;
           this.setState({students})
        })
      }

    render(){
        const { state} = this
        const { match } = this.props
        console.log(this.props);

        if (state.loading) {
            return  <Loader />
        }
        
        return (
           <div>
              
                <RegisterStudent 
                state={state} handleStudentSubmit={this.handleSubmit} 
                inputChange={this.inputChange}/>
                <Students students={state.students} handleDelete={this.handleDelete}/>
           </div>
        )
    }
}

export default withRouter (StudentPage)