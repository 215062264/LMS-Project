import React from "react";
import { withRouter, Route, Link, BrowserRouter, Switch } from "react-router-dom";
import axios from "axios";
import Loader from "../../loader/loader";
import RegisterTutor from "./register-tutor";
import Tutors from './tutor-list';

class TutorPage extends React.Component{

    state = {
        tutorFirstName:"",
        tutorLastName: "",
        loading: false,   
        tutors: []
    }

    inputChange = e => {
        this.setState({[e.target.id]: e.target.value})   
    }

    //CREATE TUTOR
    handleSubmit = e => {
        e.preventDefault();
        this.setState({loading: true})
        const body = this.state;

        axios.post('/api/tutorial/create', 
            body,
           { auth:{
                username:"admin",
                password: "admin"
            }}
         ).then(response => {
             let tutor = response.data;
             let tutors = this.state.tutors;
             tutors.push(tutor)
             this.setState({
                 tutors,
                 loading: false
             })
            
        })
    }

    //DELETE EDUCATOR
    handleDelete = (index) =>{
        const tutor = this.state.tutors[index];
 
        axios.delete("/api/tutorial/delete/"+ tutor.tutorId,{
            auth:{
                username: "admin",
                password: "admin"
 
            }
        }).then(res=>{
            const updated = this.state.tutors.splice(index, 1);
            this.setState({updated})
        })
     }

    
  //FETCH DATA AND DISPLAY EDUCATORS
componentDidMount() {
  axios.get('/api/tutorial/read/all', {
      auth:{
          username: 'admin',
          password: 'admin'
      }
  })
  .then(results => {
     let tutors = results.data;
     this.setState({tutors})
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
          
            <RegisterTutor 
            state={state} handleSubmit={this.handleSubmit} 
            inputChange={this.inputChange}/>
            <Tutors tutors={state.tutors} handleDelete={this.handleDelete}/>
       </div>
    )
}

}

export default withRouter(TutorPage);