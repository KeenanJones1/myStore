import React from 'react'
import Featurette from './Featurette'

export default function Featurettes(props) {


const renderFeaturettes = () => {
 return props.featuredProducts.map(
   product => <Featurette  product={product}/>
 )
}


 return (
  <div >
    {renderFeaturettes()}
  </div>
 )
}
