import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <>
    <footer className="footer-center">
            <h3>Fits<strong>U</strong></h3>
            <ul className="right-menu">
                <li><Link to="https://github.com/ragini07"><i className="fa fa-github fa-2x"></i></Link>
                    
                </li>
                <li>
                <Link to="https://twitter.com/Ragini94008326"> <i className="fa fa-twitter fa-2x"></i></Link>
                </li>
                <li>
                <Link to="https://www.linkedin.com/in/ragini-singh-a67358179/"> <i className="fa fa-linkedin fa-2x"></i></Link>
               </li>
            </ul>
            <p className="copyright">© 2021 CopyRight|Version 1.0</p>
        </footer>
    </>
  )
}

export  {Footer}