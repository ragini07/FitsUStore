import "./App.css";
import { UserProfile,Header ,Login ,SignUp , Products , Cart,WishList, NotFound, Home , ProductDetail} from "./Components/index.js";
import Mockman from 'mockman-js'
import { Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/products' element={<Products/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />

        <Route path='/cart' element={<Cart/>} />
        <Route path='/wishlist' element={<WishList/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path="/testApi" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
