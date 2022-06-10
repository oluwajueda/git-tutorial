import React, {useState} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useGlobalContext } from './context';

const Single = ({id, image, title, desc, price, addCart, increase, setInput,decrease,input}) => {
    

    
    

    


  return (
    <main>
     <div className="single-products">
      <img className="image" src={image} alt=''/>
         <h3>{title}</h3>
         <p>{desc}...</p>
        <h3>{price}</h3>
</div>
<div className='quantity'>
       <button onClick={increase} className='btn-increase'>
          +
        </button>
        <input className='input' type='number' value={input}
            onChange={(e) => setInput(e.target.value)} />
        <button onClick={decrease} className='btn-decrease'>
          -
        </button>
</div>
     <button onClick={() => addCart(id)} className="cart-btn"><AiOutlineShoppingCart/>Add item</button>

     </main>
  )
}

export default Single
