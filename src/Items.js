
import React, { useEffect, useState } from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useGlobalContext } from "./context";



const Items = () => {


const {increase, items} = useGlobalContext()







    


  return <section className="product-display">
  <div>
      <div>
          <h2>Our Products</h2>
      </div>
      <div className="products">
          {items.map((item)=>{
              const {image,title,description,price} = item
              let desc = description.slice(0,55)  
              return<main>
                  <div className="single-products">
                      <img className="image" src={image} alt=''/>
                      <h3>{title}</h3>
                      <p>{desc}...</p>
                      <h3>{price}</h3>
                  </div>
                      <button onClick={increase} className="cart-btn"><AiOutlineShoppingCart/>Add item</button>

              </main>
          })}
      </div>
     
</div>
</section>
}

export default Items
