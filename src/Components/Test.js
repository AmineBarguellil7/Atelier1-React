import React from "react";
import { useParams } from "react-router-dom";

const Test =() =>{
    const {username}= useParams()
    return(
        <h1>
            username : {username}
        </h1>
    )
}

export default Test;