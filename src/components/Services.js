import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import HeaderVideo from './Headervid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useCart } from './CartContext';

const wigs = [
  { id: 1, name: "M-CAP 9*6 WIG", image: process.env.PUBLIC_URL + '/images/wig1a.jpg', price: 300, length: 'long', color: 'blonde', path: "#mcap96wig" },
  { id: 2, name: "WEAR GO WIG V5", image: process.env.PUBLIC_URL + '/images/wig2a.png', price: 250, length: 'medium', color: 'black', path: "#weargowigv5" },
  { id: 3, name: "13*4 LACE WIG", image: process.env.PUBLIC_URL + '/images/wig3a.jpg', price: 280, length: 'long', color: 'brown', path: "#134lacewig" },
  { id: 4, name: "COLOR LACE WIG", image: process.env.PUBLIC_URL + '/images/wig4a.png', price: 270, length: 'medium', color: 'red', path: "#colorlacewig" },
  { id: 5, name: "SHORT BOB WIG", image: process.env.PUBLIC_URL + '/images/wig5a.jpg', price: 220, length: 'short', color: 'blonde', path: "#shortbobwig" },
  { id: 6, name: "PINCKY CURLY WIG", image: process.env.PUBLIC_URL + '/images/wig6a.jpg', price: 260, length: 'medium', color: 'pink', path: "#pinckycurlywig" }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const careTips = [
  { title: "Cleaning and Washing" },
  { title: "Styling and Shaping" },
  { title: "Maintenance and Storage" },
  { title: "Repair and Restoration" },
  { title: "General Tips" }
];

function Services() {
  const [sortedWigs, setSortedWigs] = useState(wigs);
  const [sortCriteria, setSortCriteria] = useState({
    length: '',
    color: '',
    price: ''
  });
  const { addToCart } = useCart();

  const handleSortChange = (e) => {
    const { name, value } = e.target;
    setSortCriteria({
      ...sortCriteria,
      [name]: value
    });
  };

  const sortWigs = useCallback(() => {
    let sorted = [...wigs];

    if (sortCriteria.length) {
      sorted = sorted.filter(wig => wig.length === sortCriteria.length);
    }
    if (sortCriteria.color) {
      sorted = sorted.filter(wig => wig.color === sortCriteria.color);
    }
    if (sortCriteria.price) {
      sorted = sorted.sort((a, b) => sortCriteria.price === 'low-high' ? a.price - b.price : b.price - a.price);
    }

    setSortedWigs(sorted);
  }, [sortCriteria]);

  useEffect(() => {
    sortWigs();
  }, [sortCriteria, sortWigs]);

  const handleAddToCart = (wig) => {
    addToCart({ ...wig, quantity: 1 });
  };

  return (
    <>
      <div className="header-video-container">
        <HeaderVideo videoUrl={process.env.PUBLIC_URL + '/videos/tuto.mov'} speech={"Explore Our Services"} btntxt={"Get Your Wig"} />
      </div>
      <div className="services">
        <div className="sort-button-container">
          <select name="length" value={sortCriteria.length} onChange={handleSortChange}>
            <option value="">Sort by Length</option>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
          <select name="color" value={sortCriteria.color} onChange={handleSortChange}>
            <option value="">Sort by Color</option>
            <option value="blonde">Blonde</option>
            <option value="black">Black</option>
            <option value="brown">Brown</option>
            <option value="red">Red</option>
            <option value="pink">Pink</option>
          </select>
          <select name="price" value={sortCriteria.price} onChange={handleSortChange}>
            <option value="">Sort by Price</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>
        <div className="carousel-container">
          <Carousel responsive={responsive} infinite={true} showDots={true}>
            {sortedWigs.map((wig, index) => (
              <div key={index} className="carousel-item">
                <img src={wig.image} alt={wig.name} />
                <h3>{wig.name}</h3>
                <p className="price">${wig.price}</p>
                <button onClick={() => handleAddToCart(wig)} className="add-to-cart">Add to Cart</button>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="tutorial-section">
        <h2 className="tutorial-title">Tuto wigs installation</h2>
        <div className="tutorial-content">
          <div className="tutorial-image">
            <img src={process.env.PUBLIC_URL + '/images/tuto.jpg'} alt="Tutorial" className="tutorial-image-element" />
          </div>
          <div className="tutorial-text">
            <p>Watch our step-by-step videos guide to learn how to flawlessly install your wig. Whether you're a beginner or looking to perfect your technique, these tips will help you achieve a natural and secure fit. Enjoy your beautiful new look!</p>
            <Link to="/tutorial-videos" className="btn-watch">WATCH VIDEOS</Link>
            <a href="https://www.youtube.com/watch?v=example" target="_blank" rel="noopener noreferrer" className="btn-started">GET STARTED</a>
          </div>
        </div>
      </div>
      <div className='care-tips'>
        <h2 className="care-tips-title">Wig Care Tips</h2>
        <p className="care-tips-subtitle">Welcome to our comprehensive wig care tips section! We have organized our video guides into easy-to-follow categories to help you maintain and style your wigs effortlessly. Explore the categories below.</p>
        <div className='care-tips-container'>
          {careTips.map((tip, index) => (
            <div key={index} className='care-tip-item'>
              {tip.title}
            </div>
          ))}
        </div>
        <div className="consultation-section">
          <h2>Online Consultations with Wig Experts</h2>
          <p>Book a one-on-one online consultation with our wig experts to get personalized advice and tips.</p>
          <Link to="/consultation-booking" className="consultation-button">Book a Consultation</Link>
        </div>
        <div className='cards__container'>
          For more information consult our <Link to='/FAQ'>FAQ page</Link>
        </div>
      </div>
    </>
  );
}

export default Services;
