import React, { useState } from 'react'
import  avatar from './photo/avatar-profile.jpg'
import  {CgProfile} from 'react-icons/cg'
import {FaTimes} from 'react-icons/fa'
import { useGlobalContext } from './context'
import Category from './Category'


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
  <Category filterItems={filterItems}/>
 </div>
      
      
  </aside>
    
      
    
  
}

export default Sidebar
