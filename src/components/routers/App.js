import React,{useState,useEffect, Suspense} from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Magazines from '../pages/Magazines';
import Footer from '../pages/Footer';
import AddtoCart from '../pages/AddtoCart';
import Blogs from '../pages/Blogs';
import Coupon from '../pages/Coupon'
import Navbar from '../pages/Navbar'
import { CartProvider } from 'react-use-cart';
import "../../assets/sass/style.css"
import Aos from 'aos';
import 'aos/dist/aos.css';
import About from '../pages/About'; 
const loadingMarkup=(
  <div className="py-4 text-center">
      <h2>Loading..</h2>
  </div>
)

const App=()=> {
  useEffect(()=>{
    Aos.init({duration:2000 });
  }, []);
  const[darkMode, setDarkMode] = useState(true);
  return (
      
  
       <Suspense fallback={loadingMarkup}>
      <BrowserRouter>
    
    <Switch>
    <CartProvider>
    <Navbar/>
    <Route  exact path='/' component={Home}></Route>
    <Route path='/magazines' component={Magazines}></Route>
     <Route path='/blogs' component={Blogs}></Route>
    <Route path='/cart' component={AddtoCart}></Route>
    <Route path='/cou' component={Coupon}></Route>
    <Route path='/about' component={About}></Route>
    <Footer/>
    </CartProvider>  
    </Switch> 
    </BrowserRouter>
    </Suspense>
 
   
  
  
  )
}
export default App

