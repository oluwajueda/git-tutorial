import React from 'react'
import {FaSearch, } from 'react-icons/fa';
import {IoMdNotificationsOutline } from 'react-icons/io';
import {BiMessageRounded } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const {openSidebar,number} = useGlobalContext()
  return (
    <div>
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
                 <Link to='cart-page'><AiOutlineShoppingCart className="cart-photo"/></Link>
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
    </div>
  )
}

export default Navbar
