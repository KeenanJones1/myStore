import React from 'react'
import Heading from './Heading'

function Headings(props) {

 const renderHeadings = () => {
  return props.featuredProducts.map(
   product => <Heading product={product}/>
  )
 }

 return (
  <div className="row">
    {renderHeadings()}
  </div>
 )
}

export default Headings
