import React from 'react'
import  avatar from './photo/avatar-profile.jpg'
import  {CgProfile} from 'react-icons/cg'
import { useGlobalContext } from './context'




const Sidebar = ({user}) => {

const {number} = useGlobalContext()
  
  return <aside className='sidebar'>
      <div className='profile'>
      <img src={avatar} className='profile-image' alt='avatar'/>
    
      <h4>Hello, {user?.name}</h4>
        </div>
        <div className='profile-side'>
<h4>Profile</h4>
      <h4>Cart</h4>
      <p>{`Total-amount:$ ${number}`}</p>
      <p>0</p>
        </div>
      
  </aside>
    
      
    
  
}

export default Sidebar
