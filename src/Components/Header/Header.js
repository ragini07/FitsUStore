import './Header.css'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useUser}  from '../../Context/user-context'
import {useAuth} from '../../Context/auth-context' 
import { useState } from 'react'

function Header() {
    const [searchInput , setSearchInput] = useState(false)
    const navigate = useNavigate()
    const {userData , dispatchUserData } = useUser()
    const {token} = useAuth()
    const {cart , wishlist} = userData

   
  return (<>

    <nav className="main-nav">
            <img src={logo} alt="Brand Logo" />
            <ul className="main-menu">
                <li> <Link to='/'>Home</Link> </li>
                <li><Link to='/products'>Products</Link></li>
            </ul>
            <ul className="right-menu">
                <li className = "list-link"
                    onClick={() => setSearchInput(true)}>
                    <i className="fa fa-search"></i>
               </li>
                <li className = "list-link"> 
                     <div onClick={() => token ? navigate('/wishlist') : navigate('/login')}>
                        <i className="fa fa-heart"></i>
                        {token &&  <span>{wishlist.length}</span>}
                       
                    </div>
                </li>
                <li className = "list-link">
                    <div onClick={() => token ? navigate('/cart') : navigate('/login')}>
                        <i className="fa fa-shopping-cart"></i>
                        {token &&  <span>{cart.length}</span>}
                       
                    </div>
                    
                 </li>
               
                <li className = "list-link">
                    <div onClick={() => token ? navigate('/profile') : navigate('/login')}>
                        <i className="fa fa-user"></i>
                    </div>
                </li>
            </ul>
        </nav>
    
        {
            searchInput && (
            <div className="searchbar">
                <label for="">
                    <input className="searchbar-input search" type="text"  placeholder="type to search"/>
                    <i 
                        onClick={() => setSearchInput(false)}
                        className="fa fa-times"></i>
                </label>
            
            </div> )
        }
       
  </>
  )
}

export {Header};