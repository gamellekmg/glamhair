import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Promotions from './components/Promotions';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';



import './styles/App.css';

function App() {
  return (
  
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/aboutus" element={<AboutUs />} />
          

        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
