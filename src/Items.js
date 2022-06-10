
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import Single from "./Single";


const Items = ({amount,addCart, increase, decrease, input, setInput}) => {


const { items} = useGlobalContext()







    


  return <section className="product-display">
  <div>
      <div>
          <h2>Our Products</h2>
      </div>
      <div className="products">
          {items.map((item)=>{
              const {image,title,description,price} = item
              let desc = description.slice(0,55)  
              return<Single {...item} item={item} amount={amount} addCart={addCart} increase={increase}
              decrease={decrease} input={input} setInput={setInput}
              />
          })}
      </div>
     
</div>
</section>
}

export default Items
