import React from 'react'
import Hero from './Hero'
import Headings from './Headings/Headings'
import Featurettes from './Featurettes/Featurettes'

const index = () => {
  return (
    <div>
      <Hero />
      <Headings featuredProducts = {[1,2,3]} />
      <Featurettes featuredProducts = {[1,2,3]}/>
    </div>
  )
}




export default index;