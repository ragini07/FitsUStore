import React from 'react'
import {useNavigate} from 'react-router-dom'

function ProductCard({product}) {
    const navigate = useNavigate()
    return (
        <div className="card-vertical" >
                <div 
                    className="image-container"
                    onClick={() => navigate(`/product/${product._id}`)}
                    >
                    <img className="res-img" src={product.imageURL} alt="product preview"/>
                </div>
         
            {
                product.isBestSeller &&   <span className="card-badge-left">Best Seller</span>
            }
      
            <div className="text-container">
                <div className="title-wishlist">
                    <div className="text-container-title">{product.name}</div>
                    <div className="text-container-wishlist"><i className="fa fa-heart"></i></div>
                </div>
                <div className="text-container-desc">{product.desc}</div>
                <span className="rating-badge-number">{product.rating}<i className="fa fa-star filled-star"></i></span>
                <div className="price">
                    <div className="sale-price">{`₹${product.salePrice}`}</div>
                    <div className="mrp-price">{`₹${product.price}`}</div>
                    <div className="discount">{`(${Math.trunc( (product.price - product.salePrice )/product.price*100 )}% OFF)`}</div>
                </div>
                <div className="text-container-desc">{product.fastDelivery ? 'Fast Delivery' : '3 days minimum'}</div>
                <button className="btn product-btn" disabled={!product.inStock}>{product.inStock ? 'Add To Cart' : 'Out Of Stock'}</button>
                
            </div>
    </div>
         )
}

export default ProductCard