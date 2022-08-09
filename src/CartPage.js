import React from 'react'
import { useGlobalContext } from './context'

const CartPage = () => {
    const {cart, removeItem, amount,total} = useGlobalContext();
  return <section className="product-display">

      <div>
          <h2>Our Products</h2>
      </div>
      <div className="products">
          {cart.map((product)=>{
              const {id,price,image,desc,title} = product
          
            
            return   <main className='main-product'>
            
            <div className="single-products">
      <img className="image" src={image} alt=''/>
         <h3>{title}</h3>
         <p>{desc}</p>
        <h3>{price}</h3>
        
        


      
</div>
 <button onClick={()=>removeItem(id)} className="cart-btn">remove item</button>
</main>


             
          })}
         
      </div>
   <div className='btn-cart'>
 <button className='cart-total'>total-quantity: {amount}</button>
 <button className='cart-total'>total-price: ${total}</button>

    
    </div>  
    </section>   
 

}

export default CartPage
