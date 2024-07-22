import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaUser, FaCartArrowDown, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useCart } from './CartContext';
import TranslateButton from './TranslateButton'; // Import the TranslateButton component

function Navbar() {
  const [click, setClick] = useState(false);
  const { cartItems } = useCart();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          GlamHair
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" className='imglogo' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/promotions' className='nav-links' onClick={closeMobileMenu}>
              Promotions
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/testimonials' className='nav-links' onClick={closeMobileMenu}>
              Testimonials
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
          <li className='nav-links-mobile'>
            <Link className='nav-links'>
              <FaHeart /><span>  </span><FaUser /><span>  </span><FaCartArrowDown />
            </Link>
          </li>
        </ul>
        <form className='nav-search'>
          <input type='text' placeholder='Search...' />
          <button type='submit'>Search</button>
        </form>
        <div className='nav-cart'>
          <Link to='/cart'>
            <FaShoppingCart />
            <span className='cart-count'>{cartItems.length}</span>
          </Link>
        </div>
        <Link className='nav-links hide'><FaHeart /></Link>
        <Link className='nav-links hide'><FaUser /></Link>
        <Link className='nav-links hide'><FaCartArrowDown /></Link>
        <div id="google_translate_element" className='bg-white'></div>
      </div>
    </nav>
  );
}

export default Navbar;
