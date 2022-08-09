import React, {useState} from "react";
import {Link, Outlet} from 'react-router-dom'

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useGlobalContext } from "./context";




const Dashboard =({user, filterItems}) =>{



 


    return (
       <>

             <Navbar/>
              <Sidebar user={user} filterItems={filterItems}/>
                   
           
       
           <Outlet/>
       
         
    
             

         </>  
        
    )
}

export default Dashboard