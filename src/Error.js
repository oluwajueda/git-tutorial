import React from "react";
import { Link } from 'react-router-dom'


const Error = () => {

    return(
        <div>

            <h1>Error! Nothing is here</h1>
  <p>please kindly go back to the Login page </p>
  <Link to="/">Login Page</Link>
        </div>
  

    )
   
}




export default Error;