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
<<<<<<< HEAD

=======
import ErrorBoundary from './components/ErrorBoundary';
import { useEffect } from "react";
>>>>>>> a0acc62ca4ce896654f87a2ccfc9bffbbe340971




import './styles/App.css';

const App = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
<<<<<<< HEAD
    
=======
    <>
   
    <ErrorBoundary>
>>>>>>> a0acc62ca4ce896654f87a2ccfc9bffbbe340971
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
<<<<<<< HEAD
   
    
=======
    </ErrorBoundary>
     
    </>
>>>>>>> a0acc62ca4ce896654f87a2ccfc9bffbbe340971
  );
}
 


export default App;
