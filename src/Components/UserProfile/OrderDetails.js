import React from 'react'
import { useUser } from "../../Context/user-context";
import "./userProfile.css";

function OrderDetails() {
    const { userData, dispatchUserData } = useUser();
    const {orders} = userData
    console.log(orders)
  return (
    <div id="Profile" className="tabcontent">
        <h3>My Orders</h3>
        {
            orders.length > 0 ? (
                <>
                {
                    orders.map(({products , amount}) =>{
                        return <>
                            <div>Order Confirmed</div>
                            <div>{amount}</div>
                         {
                            products.map(item => <div>{item.name}{item.qty}</div>)
                         }
                         <div>one ends</div>
                         </>
                    })
                }
                 
               
                </>
            ):
            <div>No orders to show</div>
        }
    </div>
  )
}

export { OrderDetails}