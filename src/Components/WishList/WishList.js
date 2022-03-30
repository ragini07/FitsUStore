import './Wishlist.css'
import { useUser}  from '../../Context/user-context'
import { useAuth } from '../../Context/auth-context'
import {isAlreadyInCart , addToCart , removeFromWishList} from '../../Service/userAction'
import {useNavigate , Link} from 'react-router-dom'


function WishList() {

    const {userData , dispatchUserData } = useUser()
    const {token} = useAuth()
    const {cart , wishlist} = userData

    const addToCartHandler = (product) => {
        token ?  addToCart(dispatchUserData , token , product)  : navigate('/login')
    }
    const wishlistHandler = (product) => {
        removeFromWishList(dispatchUserData , token , product)
    }
  return (
    <>
 { wishlist.length > 0 ?  (<div class="wishlist-container">
            <h2 class="title-center">My WishList</h2>
            <div class="grid-3-col">
              { wishlist.map(product => {
                  return (<div class="card-vertical">
                 
                      <div class="image-container">
                          <img class="res-img" src={product.imageURL} alt="product preview"/>
                      </div>
              
                  
                 {product.isBestSeller && <span class="card-badge-left">Best Seller</span>}
                  <span 
                        class="card-badge-right"
                        onClick={() => wishlistHandler(product)}><i class="fa fa-trash  icon-black"></i></span>
                  <div class="text-container">
                      <div class="title-wishlist">
                          <div class="text-container-title">{product.name}</div>
                      </div>
                      <div class="text-container-desc">{product.desc}</div>
                      <span className="rating-badge-number">{product.rating}<i className="fa fa-star filled-star"></i></span>
                      <div class="price">
                          <div class="sale-price">{`₹${product.salePrice}`}</div>
                          <div class="mrp-price">{`₹${product.price}`}</div>
                          <div class="discount">{`(${Math.trunc( (product.price - product.salePrice )/product.price*100 )}% OFF)`}</div>
                      </div>
                      <div className="text-container-desc">{product.fastDelivery ? 'Fast Delivery' : '3 days minimum'}</div>
                      {
                            isAlreadyInCart(cart , product) ? 
                            (<Link to='/cart'> <button class="btn product-btn">Go To Cart</button> </Link>) : 
                            ( <button 
                                onClick={() => addToCartHandler(product)}
                                className="btn product-btn" 
                                disabled={!product.inStock}>{product.inStock ? 'Add To Cart' : 'Out Of Stock'}</button>)
                     }
                  </div>
               </div>)
              }) }
                

                 
              </div>
        </div>)
        :(
            <h2 className="center cart">WishList Is Empty</h2>
         )}
      
    </>
  )
}

export {WishList}