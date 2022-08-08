import React, { useState } from 'react'
import { useGlobalContext } from './context'

const Button = (id) => {
    const {number,setNumber} = useGlobalContext()
   

    const increase = () =>{
            setNumber(number+1)
        }
        const decrease =()=> {
            
            if(number<0){
               return setNumber(number- 1)
            }else{
                return number
            }
        }
  return (
    <div>
       <div className='number'>
            <button className='num-btn' onClick={(e)=>decrease(id)}>-</button>
            <p className='number-p'>{number}</p>
            <button className='num-btn' onClick={(e)=>increase(id)}>+</button>
        </div>
    </div>
  )
}

export default Button
