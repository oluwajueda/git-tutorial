import React, {useState} from "react";
import {FaSearch, } from 'react-icons/fa';
import {IoMdNotificationsOutline } from 'react-icons/io';
import {BiMessageRounded } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa'
import Sidebar from "./Sidebar";
import Items from "./Items";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useGlobalContext } from "./context";




const Dashboard =({user,addCart, amount, setInput, input, increase, decrease}) =>{

const {openSidebar} = useGlobalContext()


 


    return (
        <section>
           <nav className="navbar">
               <div className="container">
                   <div className="name first-nav">

                       <div>
                        <button className="sidebar-toggle" onClick={openSidebar} >
                      <FaBars />
                     </button>
                       </div>
                     <h4 className="welcome">Welcome Back!</h4>
                     
                      
                     </div>
                     
                     <div className="nav-container">
                  <ul className="cart">
                 <li><AiOutlineShoppingCart className="cart-photo"/></li>
                  </ul> 
                
                     {amount?<p>{input}</p> : null} 
          
                   </div>
                    
                   <ul className="nav-items">
                    
                       <li className="link"><FaSearch/></li >
                       <li className="link" ><BiMessageRounded/></li >
                       <li className="link" ><IoMdNotificationsOutline/></li >
                   </ul>
                  

               </div>
           </nav>
           <Sidebar user={user}/>
        <Items amount={amount} addCart={addCart} setInput={setInput} input={input} decrease={decrease} increase={increase}  />

             

           
        </section>
    )
}

export default Dashboard