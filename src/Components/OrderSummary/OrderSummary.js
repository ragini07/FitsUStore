import React from 'react'
import '../Cart/Cart.css'
import { useUser } from "../../Context/user-context";
import {useNavigate} from 'react-router-dom'
function OrderSummary() {
    const {setUserTab } = useUser();
    const navigate = useNavigate()
   
   
  return (
      <>
      <div className="center-container">
      <h2 className="center">Order successfully placed !! 🎊</h2>
      <h5>Thankyou for shopping with us !</h5>
      <button className="btn" 
        onClick={() => {
            setUserTab("Orders")
            navigate('/profile')}}>View Order</button>
      </div>
      </>
   
  )
}

export { OrderSummary}