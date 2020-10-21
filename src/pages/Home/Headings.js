import React from 'react'
import Heading from './Heading'

function Headings(props) {

 const renderHeadings = () => {
  return props.featuredProducts.map(
   product => <Heading product={product}/>
  )
 }

console.log(props.featuredProducts)
 return (
  <div>
   <div className="row">
    {renderHeadings()}
    </div>
  </div>
 )
}

export default Headings
