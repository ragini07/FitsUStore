// import './Header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useUser}  from '../../Context/user-context'
import { useState } from 'react'

function Header() {
    const [searchInput , setSearchInput] = useState(false)
    const {userData , dispatchUserData } = useUser()
    const {cart , wishlist} = userData
   
  return (<>

    <nav className="main-nav">
            <img src={logo} alt="Brand Logo" />
            <ul className="main-menu">
                <li> <Link to='/'>Home</Link> </li>
                <li><Link to='/products'>Products</Link></li>
            </ul>
            <ul className="right-menu">
                <li 
                    onClick={() => setSearchInput(true)}>
                    <i className="fa fa-search"></i>
               </li>
                <li><Link to="/wishlist">
                    <i className="fa fa-heart"></i>
                </Link></li>
                <li><Link to='/cart'><i className="fa fa-shopping-cart"></i>{cart.length}</Link>
                    
              </li>
               
                <li><a href="../Auth/login.html">
                    <i className="fa fa-user"></i>
                </a></li>
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