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
                        {/* product img 2 */}
                        <img className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-6.jpg"/>
                    </a>
                    
                    <span className="product-new-label">Sale</span>
                    <span className="product-discount-label">50%</span>
                </div>
                <div className="product-content">
                 {/* product title */}
                    <h3 className="title"><a href="#">Men's Plain Tshirt</a></h3>
                    {/* product sale price */}
                    <div className="price">$5.00
                        <span>$10.00</span>
                        {/* product og price */}
                    </div>
                    <a className="add-to-cart" href="">+ Add To Cart</a>
                </div>
            </div>
        </div>
  )
 }
}
