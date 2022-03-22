import './userProfile.css'
import React from 'react'
import {useAuth} from '../../Context/auth-context' 
import {useNavigate} from 'react-router-dom'
export  function UserProfile() {

    const navigate = useNavigate()

    const {logOutUser , user} = useAuth()
    const logOutHandler = () => {
        logOutUser()
        navigate('/')
        
    }
  return (<>
    <h2 className="center">Account</h2>
    <div className="main-container-account">
    <div className="container-account">
<div id="Profile" className="tabcontent">
    <div className="sub-container">
        <div>Name:</div>
        <div className="desc">{`${user.firstName} ${user.lastName}`}</div>
    </div>
    <div className="sub-container">
        <div>Email:</div>
        <div className="desc">{user.email}</div>
    </div>         
    <button 
        className="btn secondary"
        onClick={logOutHandler}>Log Out</button>
</div>
</div>
</div>
</>
  )
}
