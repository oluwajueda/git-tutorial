import React, {useState} from "react";
import {Link, Outlet} from 'react-router-dom'

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";





const Dashboard =({user}) =>{


 


    return (
       <>

             <Navbar/>
              <Sidebar user={user}/>
                   
           
       
           <Outlet/>
       
         
    
             

         </>  
        
    )
}

export default Dashboard