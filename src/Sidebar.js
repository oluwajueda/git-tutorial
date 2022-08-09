import React, { useState } from 'react'
import  avatar from './photo/avatar-profile.jpg'
import  {CgProfile} from 'react-icons/cg'
import {FaTimes} from 'react-icons/fa'
import { useGlobalContext } from './context'

 // all
 // men's clothing
 // jewelery
 //electronics
 // women's clothing

 

const Sidebar = ({user, filterItems}) => {


  
    const { isSidebarOpen, closeSidebar} = useGlobalContext()
  
  return <aside className={`${isSidebarOpen? 'sidebar show-sidebar' : 'sidebar'}`}>

    <button className='close-btn' onClick={closeSidebar}>
         <FaTimes/>
       </button>
      <div className='profile'>
      <img src={avatar} className='profile-image' alt='avatar'/>
    
      <h4>Hello {user?.name}</h4>
        </div>
 <div>
  <h2>categories</h2>
  <div className='category'>
 <h4 className='single-category' onClick={()=>filterItems("all")}>All</h4>
 <h4 className='single-category' onClick={()=>filterItems("men's clothing")}>Men's Clothing</h4>
 <h4 className='single-category' onClick={()=>filterItems("jewelery")}>Jewelery</h4>
 <h4 className='single-category' onClick={()=>filterItems("electronics")}>Electronics</h4>
 <h4 className='single-category' onClick={()=>filterItems("women's clothing")}>Women's Clothing</h4>
  </div>
 </div>
      
      
  </aside>
    
      
    
  
}

export default Sidebar
