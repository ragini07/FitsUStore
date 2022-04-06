
import React, { useState } from 'react'
import { useUser } from "../../Context/user-context";
import { UserProfile } from './UserProfile'
import { OrderDetails } from './OrderDetails'


export function UserTab() {
    const { userTab , setUserTab } = useUser();


  return (
    <div className="App">
    <h2 className="center">Account</h2>
      <div className="main-container">
         
      <div className="container-account">
          <div className="tab">
              <button className={`tablinks ${userTab === "Profile" && "active"}`} onClick={() => setUserTab("Profile")}>Profile</button>
              <button className={`tablinks ${userTab === "Orders" && "active"}`} onClick={() => setUserTab("Orders")}>Orders</button>
            
          </div>
          { userTab === "Profile" && <UserProfile /> }
          { userTab === "Orders" && <OrderDetails />}
      </div>
      </div>
  </div>
  )
}
