import React, {useState} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useGlobalContext } from './context';

const Single = ({id, image, title, desc, price,}) => {
 const {addItem, number,setNumber} = useGlobalContext();   
 
    
  //   const increase = () =>{
  //     setQty(qty + 1)
  //   }
  //   const decrease = () => {
  //     setQty(qty -1)
  //   }

  // const checkQty = (n) => {
  //   if(n<0){
  //     return 0;
  //   }else {
  //     return n;
  //   }
  // }
   

    const increase = () =>{
            setNumber(number+1)
        }
        const decrease =()=> {
            
            if(number<=0){
               return number
            }else{
                return  setNumber(number - 1)
            }
        }


  return (
    <main className='main-product' >
     <div className="single-products" key={id}>
      <img className="image" src={image} alt=''/>
         <h3>{title}</h3>
         <p>{desc}...</p>
        <h3>{price}</h3>
         <div className='number'>
            <button className='num-btn' onClick={decrease}>-</button>
            <p className='number-p'>{number}</p>
            <button className='num-btn' onClick={increase}>+</button>
        </div>
</div>
 

     <button onClick={() => addItem(id,title,price,image)} className="cart-btn"><AiOutlineShoppingCart/>Add item</button>

     </main>
  )
}

export default Single
