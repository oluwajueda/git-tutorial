import React, {useState} from "react";

import Items from "./Items";
import Footer from "./Footer";
import Loading from "./Loading";
import { useGlobalContext } from "./context";





const Dashboard =({loading, products1}) =>{

 
if(loading){
    return <Loading/>
} 
    
  return   ( <Items products1={products1}/>


  )
}

export default Dashboard