import { useEffect, useState } from 'react'
import './Cart.css'
import { useUser}  from '../../Context/user-context'
import { useAuth } from '../../Context/auth-context'
import {useNavigate , Link} from 'react-router-dom'
import {removeFromCart , changeQtyInCart , isAlreadyInWishList , addToWishList} from '../../Service/userAction'

export function Cart() {
    
    const [cartTotal , setCartTotal] = useState({
        MRP : 0,
        discount : 0,
        TotalAmt : 0
    })
    const {userData , dispatchUserData } = useUser()
    const {token} = useAuth()
    const {cart , wishlist} = userData
    console.log(cart)
    useEffect(() => {

        const summaryData = cart.reduce((acc,curr) => {
            return ({
                MRP : acc.MRP + curr.price*curr.qty,
                discount : acc.discount + (curr.price -  curr.salePrice)*curr.qty,
                TotalAmt : acc.TotalAmt + curr.salePrice*curr.qty
            })
        },{
            MRP : 0,
            discount : 0,
            TotalAmt : 0
        })
        setCartTotal(summaryData)
    },[cart])

    const removeFromCartHandler = (product) => {
      removeFromCart(dispatchUserData , token , product)
    }
    const updateCartHandler = (product , type) => {
      changeQtyInCart(dispatchUserData , token , product , type)
    }
    const wishlistHandler = (product) => {
      removeFromCart(dispatchUserData , token , product)
      addToWishList(dispatchUserData , token , product)
     
}
  return (
     <>
     {
         cart.length > 0 ? (
             <>
              <h2 className="center cart">My Cart</h2>
             <div className='main-container'>
           
            <div className="cart-container">
            <div className="left-container">
                {/* <div className="address-card">
                    <div className="detail">
                        <h5>Deliver To :</h5><span>abc road,sakchi,JSR</span>
                    </div>
                    
                    <button className="btn secondary"><a href="../AddressPage/address.html">Change</a></button>
                </div> */}
            {
                cart.map(product => {
                    return (
                        <div className="horizontal-card">
                           
                    <div>
                        <img className="res-img-small"src={product.imageURL} alt="" />
                    </div>
                   
                   <div className="text-container">
                   <button className = "text-right"
                        onClick={() => removeFromCartHandler(product)}><i className="fa fa-trash"></i></button>
                    <h4>{product.desc}</h4>
                    <p className="brand">{product.name}</p>
                    <div className="price">
                        <div className="sale-price">{`₹${product.salePrice}`}</div>
                        <div className="mrp-price">{`₹${product.price}`}</div>
                        <div className="discount">{`(${Math.trunc( (product.price - product.salePrice )/product.price*100 )}% OFF)`}</div>
                    </div>
                    <div className="cta-container">
                        <button 
                            onClick={() => updateCartHandler(product , 'decrement')} 
                            disabled ={product.qty === 1}
                            className="btn-icon"><i className="fa fa-minus"></i></button>
                        <span className="product-qty">{product.qty}</span>
                        <button  
                            onClick={() => updateCartHandler(product , 'increment')}
                            className="btn-icon"><i className="fa fa-plus"></i></button>
                        {
                          isAlreadyInWishList(wishlist , product) ? 
                          (<Link to='/wishlist'> <button class="btn secondary">Go To WishList</button> </Link>) : 
                            ( <button 
                                onClick={() => wishlistHandler(product)}
                                className="btn secondary" 
                                 >Move To Wishlist</button>)
                        }
                      
                    </div>
                   </div>
                   
                 
                        
                </div>
                    )
                })
            }
                
            </div>
            <div className="right-container">
                <div className="container-coupon">
                    <p><i className="fa fa-tag"></i> Have a Coupon ? </p>
                    <a href="#">Apply</a>
                </div>
                <h4 className="center">PRICE DETAILS:<span>{`(${cart.length}items)`}</span></h4>
                <div className="divider"></div>
                <div className="cart-total-container">
                <div className="right-sub-container">
                    <p>Total MRP</p>
                    <p>{cartTotal.MRP}</p>
                </div>
                <div className="right-sub-container">
                    <p>Discount</p>
                    <p>-₹{cartTotal.discount}</p>
                </div>
                <div className="right-sub-container">
                    <p>Delivery</p>
                    <p>FREE</p>
                </div>
                <div className="divider"></div>
                <div className="right-sub-container">
                   <strong> <p>Total Amount</p></strong>
                    <strong><p>₹{cartTotal.TotalAmt}</p></strong>
                </div>
             </div>
                <button className="btn full-width-btn">Place Order</button>
            </div>
            </div>
        </div>
        </>
         ) :(
            <h2 className="center cart">Cart Is Empty</h2>
         )
     }
     </>
  )
}

