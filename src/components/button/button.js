import React from "react";

const button = props=>{
    return <button  {...props}>{props.label}</button>
}

export default button;