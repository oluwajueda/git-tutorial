import React, {useState} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useGlobalContext } from './context';

const Single = ({id, image, title, desc, price}) => {
 const {addItem, qty} = useGlobalContext();   
 
    
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


  return (
    <main>
     <div className="single-products">
      <img className="image" src={image} alt=''/>
         <h3>{title}</h3>
         <p>{desc}...</p>
        <h3>{price}</h3>
</div>
     <button onClick={addItem} className="cart-btn"><AiOutlineShoppingCart/>Add item</button>

     </main>
  )
}

export default Single
