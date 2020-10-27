import React, { Component } from 'react'

export default class Product extends Component {
 render() {
  return (
<div className="col-md-3 col-sm-6">
    <div className="product-grid">
        <div className="product-image">
            <a href="#">
            {/* product img 1 */}
                <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-5.jpg"/>
            </a>
        </div>
        <div className="product-content">
        {/* product title */}
            <h3 className="title"><a href="#">Category</a></h3>
        <a className="add-to-cart" href="">View All</a>
        </div>
    </div>
</div>
  )
 }
}
