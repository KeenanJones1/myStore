import React from 'react'
import Categories from './Categories'
import Hero from '../Hero'

 const index = (props) => {

 return (
  <main>
    <Hero /> 
    <Categories categories={props.categories}/>
  </main>
 )
}
export default index