import React, {useState} from "react";

import Items from "./Items";
import Footer from "./Footer";
import Loading from "./Loading";
import { useGlobalContext } from "./context";





const Dashboard =({loading, products}) =>{

 
if(loading){
    return <Loading/>
} 
    
  return   ( <Items products={products}/>


  )
}

export default Dashboard