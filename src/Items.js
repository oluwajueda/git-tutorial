
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import Single from "./Single";


const Items = ({i}) => {


const { items} = useGlobalContext()







    


  return <section className="product-display">
  <div>
      <div>
          <h2>Our Products</h2>
      </div>
      <div className="products" >
          {items.map((item)=>{
              const {id,image,title,description,price} = item
              let desc = description.slice(0,55)  
              return<Single {...item} item={item} key={id}
              />
          })}
      </div>
     
</div>
</section>
}

export default Items
