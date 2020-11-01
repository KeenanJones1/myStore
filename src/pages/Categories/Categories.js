import React from 'react'
import Category from './Category'

const Categories = (props) => {

 const renderCategories = () => {
  return props.categories.map( category =>
    <Category category={category}/>
   )
 } 


 return (
  <div className="row">
   {renderCategories()}
  </div>
 )
}
export default Categories;