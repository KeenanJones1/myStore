import React from 'react'
import Hero from './Hero'
import Headings from './Headings'

const index = () => {
  return (
    <div>
      <Hero />
      <Headings featuredProducts = {[1,2,3]} />
    </div>
  )
}




export default index;