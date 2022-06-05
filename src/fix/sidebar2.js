import React from 'react'
import  avatar from './photo/avatar-profile.jpg'
import  {CgProfile} from 'react-icons/cg'
import { useGlobalContext } from './context'




const Sidebar = ({user}) => {


  
  return <aside className='sidebar'>
      <div className='profile'>
      <img src={avatar} className='profile-image' alt='avatar'/>
    
      <h4>Hello, {user?.name}</h4>
        </div>
        <div className='profile-side'>
<h4>Profile</h4>
      <h4>Cart</h4>
      <p>Toal Items: 0</p>
      <p>Total Price:$0</p>
        </div>
      
  </aside>
    
      
    
  
}

export default Sidebar
