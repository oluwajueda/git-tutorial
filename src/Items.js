
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import Single from "./Single";


const Items = ({products}) => {









    


  return <section className="product-display">
  <div>
      <div>
          <h2>Our Products</h2>
      </div>
      <div className="products" >
          {products.map((product)=>{
            console.log(product)
              const {id,image,title,description,price} = product
              let desc = description.slice(0,55)  
              return <Single key={id} {...product} product={product}/>
          })}
      </div>
     
</div>
</section>
}

export default Items
