import React, {useState} from "react";
import {FaSearch, } from 'react-icons/fa';
import {IoMdNotificationsOutline } from 'react-icons/io';
import {BiMessageRounded } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa'
import Sidebar from "./Sidebar";
import Items from "./Items";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useGlobalContext } from "./context";




const Dashboard =({user}) =>{

const number = useGlobalContext()


 


    return (
        <section>
           <nav className="navbar">
               <div className="container">
                   <div className="name first-nav">
                     <h4 className="welcome">Welcome Back!</h4>
                       <div>
                        <button className="toggle" >
                      <FaBars />
                     </button>
                       </div>
                      
                     </div>
                     
                     <div className="nav-container">
                  <ul className="cart">
                 <li><AiOutlineShoppingCart className="cart-photo"/></li>
                  </ul> 
                
                     <p className="total-amount">{number}</p>
          
                   </div>
                    
                   <ul className="nav-items">
                    
                       <li className="link"><FaSearch/></li >
                       <li className="link" ><BiMessageRounded/></li >
                       <li className="link" ><IoMdNotificationsOutline/></li >
                   </ul>
                  

               </div>
           </nav>
           <Sidebar user={user}/>
        <Items />

             

           
        </section>
    )
}

export default Dashboard