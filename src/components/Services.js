import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom'; 
import './Services.css';
import { Button } from './Button';

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

const wigs = [
  { name: "M-CAP 9*6 WIG", image: process.env.PUBLIC_URL + '/images/wig1a.jpg', price: 300, length: 'long', color: 'blonde', path: "#mcap96wig" },
  { name: "WEAR GO WIG V5", image: process.env.PUBLIC_URL + '/images/wig2a.png', price: 250, length: 'medium', color: 'black', path: "#weargowigv5" },
  { name: "13*4 LACE WIG", image: process.env.PUBLIC_URL + '/images/wig3a.jpg', price: 280, length: 'long', color: 'brown', path: "#134lacewig" },
  { name: "COLOR LACE WIG", image: process.env.PUBLIC_URL + '/images/wig4a.png', price: 270, length: 'medium', color: 'red', path: "#colorlacewig" },
  { name: "SHORT BOB WIG", image: process.env.PUBLIC_URL + '/images/wig5a.jpg', price: 220, length: 'short', color: 'blonde', path: "#shortbobwig" },
  { name: "PINCKY CURLY WIG", image: process.env.PUBLIC_URL + '/images/wig6a.jpg', price: 260, length: 'medium', color: 'pink', path: "#pinckycurlywig" }
];

const careTips = [
  { title: "Cleaning and Washing" },
  { title: "Styling and Shaping" },
  { title: "Maintenance and Storage" },
  { title: "Repair and Restoration" },
  { title: "General Tips" }
];

function Services() {
  const [sortedWigs, setSortedWigs] = useState(wigs);
  const [isSortedAsc, setIsSortedAsc] = useState(true);

  const handleWatchVideosClick = () => {
    alert("These videos contain subtitles.");
  };

  const sortWigsByPrice = () => {
    const sorted = [...sortedWigs].sort((a, b) => isSortedAsc ? a.price - b.price : b.price - a.price);
    setSortedWigs(sorted);
    setIsSortedAsc(!isSortedAsc);
  };

  const sortWigsByLength = () => {
    const sorted = [...sortedWigs].sort((a, b) => isSortedAsc ? a.length.localeCompare(b.length) : b.length.localeCompare(a.length));
    setSortedWigs(sorted);
    setIsSortedAsc(!isSortedAsc);
  };

  const sortWigsByColor = () => {
    const sorted = [...sortedWigs].sort((a, b) => isSortedAsc ? a.color.localeCompare(b.color) : b.color.localeCompare(a.color));
    setSortedWigs(sorted);
    setIsSortedAsc(!isSortedAsc);
  };

  return (
    <>
      <div className="services">
        <h1 className="services-title">Explore Our Wig Categories</h1>
        <p className="services-subtitle">Welcome to GlamHair's extensive collection of premium wigs!</p>
        <div className="sort-button-container">
          <Button buttonStyle='btn--primary' buttonSize='btn--large' onClick={sortWigsByLength}>
            Sort by Length {isSortedAsc ? '▲' : '▼'}
          </Button>
          <Button buttonStyle='btn--primary' buttonSize='btn--large' onClick={sortWigsByPrice}>
            Sort by Price {isSortedAsc ? '▲' : '▼'}
          </Button>
          <Button buttonStyle='btn--primary' buttonSize='btn--large' onClick={sortWigsByColor}>
            Sort by Color {isSortedAsc ? '▲' : '▼'}
          </Button>
        </div>
        <div className="carousel-container">
          <Carousel responsive={responsive} infinite={true} showDots={true}>
            {sortedWigs.map((wig, index) => (
              <div key={index} className="carousel-item">
                <CardItem
                  src={wig.image}
                  text={wig.name}
                  price={`$${wig.price}`}
                  classcenter="cards__text__center"
                  label='Wig'
                  path={wig.path}
                  pathbutton='/Buy'
                />
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
            <button className="btn-watch" onClick={handleWatchVideosClick}>WATCH VIDEOS</button>
            <button className="btn-started">GET STARTED</button>
          </div>
        </div>
      </div>
      <div className='cards__container'>
        For more information consult our <Link to='/FAQ'>FAQ page</Link>
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
      </div>
    </>
  );
}

export default Services;