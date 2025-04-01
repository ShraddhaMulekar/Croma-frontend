import './App.css'
import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar.jsx';
import Home from '../components/Home.jsx';
import Footer from '../components/Footer.jsx';
import LogIn from '../components/LogIn.jsx';
import SignIn from '../components/SignIn.jsx';
import AddToCart from '../components/AddToCart.jsx';
import ProductPage from '../components/ProductPage.jsx';
import ProductDetailPage from '../components/ProductDetailPage.jsx';
import BuyNow from '../components/BuyNow.jsx';
import Orders from '../components/Order.jsx';
import FilterProduct from '../components/FilterProduct.jsx';
import LogOut from '../components/LogOut.jsx';


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/log_in' element={<LogIn />} />
        <Route path='/log_out' element={<LogOut />} />
        <Route path='/sign_in' element={<SignIn />} />
        <Route path='/add_to_cart' element={<AddToCart />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/product/product_detail/:id' element={<ProductDetailPage />} />
        <Route path="/buy/:productId" element={<BuyNow />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/filterproduct" element={<FilterProduct />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
