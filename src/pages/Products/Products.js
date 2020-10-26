import React from 'react'
import Product from './Product'

export const Products = (props) => {

 const renderProducts = () => {
  return props.products.map( product => 
    <Product product={product}/>
   )
 } 


 return (
  <div className="row">
   {renderProducts()}
  </div>
 )
}
