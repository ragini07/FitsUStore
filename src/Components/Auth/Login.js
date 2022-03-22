import './auth.css'
import {useState} from 'react'
import {useAuth} from '../../Context/auth-context' 
import {useNavigate , Link} from 'react-router-dom'
function Login() {


  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const { loginUser , token} = useAuth()
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(email , password)
    loginUser(email , password)
  }
  console.log(token)
  
  const loginWithAdminHandler = () => {
    setEmail('test@gmail.com')
    setPassword('Test@123')
    loginUser(email , password)
  }
    
  return (<>

{ token ? navigate('/products') : <div class="container">
    <div class="form-container sign-in">
        <form action="#" class="form-data" onSubmit={submitHandler}>
            <h1>Login</h1>
            <span>Please enter you credentials</span>
            <div>  <input 
                      type="email" 
                      placeholder="email"
                      value={email}
                      onChange = {(e) => setEmail(e.target.value)}/></div>
            <div class="input-with-eye">
              <input 
                  type="password" 
                  placeholder="password"
                  value={password}
                  onChange = {(e) => setPassword(e.target.value)}/>
                <i class="fa fa-eye btn-icon eye-icon"></i></div>
            <div class="left-content">
                <label for="check-1">
                    <input type="checkbox" name="checkbox" id="check-1"/> Remember me
                </label> 
            </div>
           
            <button class="btn sign-in-btn">Login</button>
            <button 
                class="btn secondary sign-in-btn"
                onClick={loginWithAdminHandler}>Login with Admin credential</button>
            <span><a href="./forgotPassword.html">Forgot Password ?</a></span>
        </form>
        <span>Dont have an account? <Link to='/signup'><strong>Sign Up</strong> </Link></span>
       
    </div>
</div>}

</>
  )
}

export {Login}