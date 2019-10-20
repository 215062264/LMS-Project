import React from "react";
import { withRouter, Route, Link, BrowserRouter, Switch } from "react-router-dom";
import axios from "axios";
import Loader from "../../loader/loader";
import RegisterEducator from "./register-educator";
import Educators from './educator-list';

class EducatorPage extends React.Component{

    state = {
        educatorFirstName: "",
        educatorLastName: "",
        age: 0,
        loading: false,   
        educators: []
    }

    inputChange = e => {
        this.setState({[e.target.id]: e.target.value})   
    }

    //CREATE EDUCATOR
    handleSubmit = e => {
        e.preventDefault();
        this.setState({loading: true})
        const body = this.state;

        axios.post('/api/admin/educator/create', 
            body,
           { auth:{
                username:"admin",
                password: "admin"
            }}
         ).then(response => {
             let educator = response.data;
             let educators = this.state.educators;
             educators.push(educator)
             this.setState({
                 educators,
                 loading:false
                })
             })
    }

    //DELETE EDUCATOR
    handleDelete = (index) =>{
        const educator = this.state.educators[index];
 
        axios.delete("/api/admin/educator/delete/"+ educator.educatorId,{
            auth:{
                username: "admin",
                password: "admin"
 
            }
        }).then(res=>{
            const updated = this.state.educators.splice(index, 1);
            this.setState({updated})
        })
     }


  //FETCH DATA AND DISPLAY EDUCATORS
componentDidMount() {
  axios.get('/api/admin/educator/read/all', {
      auth:{
          username: 'admin',
          password: 'admin'
      }
  })
  .then(results => {
     let educators = results.data;
     this.setState({educators})
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
          
            <RegisterEducator 
            state={state} handleSubmit={this.handleSubmit} 
            inputChange={this.inputChange}/>
            <Educators educators={state.educators} handleDelete={this.handleDelete}/>
       </div>
    )
}

}

export default withRouter(EducatorPage);