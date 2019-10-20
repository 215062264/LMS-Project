import React from "react";

class Home extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <center>
                <h1>Welcome to Learner Management System</h1>
                <hr className="my-4"/>
                <img src="lms_logo.png" className="img-fluid" alt=""/>
                <hr className="my-4"/>
                </center>
            </div>
            
        )
    }
}

export default Home;