import React from 'react'
import Hero from './Hero'
import Headings from './Headings/Headings'
import Featurette from './Featurettes/Featurette'

const index = (props) => {
  const renderFeaturettes = () => {
    return props.featuredProducts.map(
      product => <div>
        <hr className="featurette-divider"/>
        <Featurette  product={product}/>
        </div>
    )
   }


  return (
    <div>
      <Hero />
      <div className="container marketing">
        <Headings featuredProducts = {[1,2,3]} />
        {renderFeaturettes()}
      </div>
    </div>
  )
}




export default index;