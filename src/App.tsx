
import { Provider } from 'react-redux'
import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './pages/user/Register'
import store from './store/store'
import Home from './pages/home/home'
import Login from './pages/user/login'
import Product from './pages/Product/Product'


function App() {
 

  return (
   <Provider store={store}>
    <BrowserRouter>
   <Routes >
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register />}/>
     <Route path='/login' element={<Login />}/>
     <Route path='/products' element={<Product/>}/>
    </Routes>
    </BrowserRouter>
   </Provider>
  )
}

export default App
