
import { Provider } from 'react-redux'
import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './pages/user/Register'
import store from './store/store'
import Home from './pages/home/home'
import Login from './pages/user/Login'
import Product from './pages/Product/Product'
import SingleProduct from './pages/single-product/SingleProduct'


function App() {
 

  return (
   <Provider store={store}>
    <BrowserRouter>
   <Routes >
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register />}/>
     <Route path='/login' element={<Login />}/>
     <Route path='/products' element={<Product/>}/>

     <Route path ='/products/:id' element={<SingleProduct/>}/>
    </Routes>
    </BrowserRouter>
   </Provider>
  )
}

export default App
