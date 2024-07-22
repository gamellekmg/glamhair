import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Promotions from './components/Promotions';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import TutorialVideos from './components/TutorialVideos';
import ConsultationBooking from './components/ConsultationBooking';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import Checkout from './components/Checkout';





import './styles/App.css';

function App() {
  return (
    
    <CartProvider>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/tutorial-videos" element={<TutorialVideos/>} />
          <Route path="/consultation-booking" element={<ConsultationBooking/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path="/checkout" element={<Checkout />} />
          

        </Routes>
        <Footer />
      </div>
    </Router>
    </CartProvider>
   
    
  );
}

export default App;
