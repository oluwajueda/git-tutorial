
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import Single from "./Single";


const Items = ({products1}) => {









    


  return <section className="product-display">
  <div>
      <div>
          <h2>Our Products</h2>
      </div>
      <div className="products" >
          {products1.map((product)=>{
            
              const {id,image,title,description,price} = product
              let desc = description.slice(0,55)  
              return <Single key={id} {...product} product={product}/>
          })}
      </div>
     
</div>
</section>
}

export default Items
