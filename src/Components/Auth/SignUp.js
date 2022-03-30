import './auth.css'
import {useState} from 'react'
import {useAuth} from '../../Context/auth-context' 
import {useNavigate , Link} from 'react-router-dom'
function SignUp() {

  const [formData , setFormData] = useState({
    firstName : '',
    lastName : '',
    password : '',
    email : ''
  })
  const navigate = useNavigate()
  const { signUpUser , token} = useAuth()
  const submitHandler = (e) => {
    e.preventDefault()
    signUpUser(formData)
  }
  return (<>
{ token ? navigate('/products') :  <div className="container">
    <div className="form-container sign-up">
        <form action="#" className="form-data" onSubmit={submitHandler}>
            <h1>Create Account</h1>
            <span className='span-txt'>Fill below details to start your journey with us</span>
            <div> <input 
                    type="text" 
                    placeholder="FirstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData , firstName : e.target.value})}/></div>
            <div> <input 
                    type="text" 
                    placeholder="LastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData , lastName : e.target.value})}/></div>
           <div>  <input 
                    type="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData , email : e.target.value})}/></div>
           <div className="input-with-eye">
                  <input 
                      type="password" 
                      placeholder="password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData , password : e.target.value})}/>
            <i className="fa fa-eye btn-icon eye-icon"></i></div>
           {/* <div className="input-with-eye"><input type="password" placeholder="confirm password"/>
            <i className="fa fa-eye-slash btn-icon eye-icon"></i></div> */}
            <button className="btn sign-up-btn">Sign Up</button>

        </form>
        <span className='span-txt'>Already have an account? <Link to='/login'><strong> Log In</strong> </Link></span>
       
    </div>
</div>}
</>
  )
}

export {SignUp}