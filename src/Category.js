import React from 'react'

const Category = ( {filterItems}) => {
  return (
    <div>
      <h2>categories</h2>
  <div className='category'>
 <h4 className='single-category' onClick={()=>filterItems("all")}>All</h4>
 <h4 className='single-category' onClick={()=>filterItems("men's clothing")}>Men's Clothing</h4>
 <h4 className='single-category' onClick={()=>filterItems("jewelery")}>Jewelery</h4>
 <h4 className='single-category' onClick={()=>filterItems("electronics")}>Electronics</h4>
 <h4 className='single-category' onClick={()=>filterItems("women's clothing")}>Women's Clothing</h4>
  </div>
    </div>
  )
}

export default Category
