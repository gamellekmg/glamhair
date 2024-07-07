import React from 'react';
import './Cards.css';

function Partner() {
  return (
    <div className='cards2'>
      <h1>Our Purpose at GlamHair</h1>
      <br></br>
      <div className='purpose-container'>
        <div className='purpose-text'>
          At GlamHair, we bring you a seamless and personalized wig shopping journey. Our website is designed to help you find the perfect wig that matches your style and needs, whether it's for everyday wear, a special occasion, or a medical necessity. With an extensive range of categories, easy-to-use filters, and insightful reviews, GlamHair ensures that every customer can effortlessly explore, choose, and purchase the ideal wig. Our comprehensive guides and expert tips on wig care and styling further enhance your experience, making GlamHair your one-stop destination for all things wigs.
        </div>
        <div className='purpose-image'>
          <img src={process.env.PUBLIC_URL + '/images/wig2.jpg'} alt="purpose" className='imgsize'/>
        </div>
      </div>
    </div>
  );
}

export default Partner;
