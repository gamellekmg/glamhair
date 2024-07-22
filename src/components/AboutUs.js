import React from 'react';
import './AboutUs.css';

function AboutUs() {

  return (
    <div className="about-us">
      <div className="about-us-section">
        <div className="about-us-header">
          <h1>About Us</h1>
          <p>Learn more about GlamHair and our mission to provide the best wigs.</p>
        </div>
        <div className="about-us-content">
          <img src={process.env.PUBLIC_URL + '/images/bf.jpg'} alt="Best Fit for Everyone" className="icon-image" />
          <div>
            <h2>Best Fit for Everyone</h2>
            <p>GlamHair stands out as the best fit for everyone due to its diverse product range, offering a variety of high-quality wigs that cater to different tastes and needs. The wigs are made from premium materials ensuring durability, comfort, and a natural look. GlamHair provides customizable options, allowing customers to personalize their wigs to match their preferences perfectly.

Comfort is a priority, with wigs designed to be lightweight, breathable, and equipped with adjustable straps for a secure fit. The brand offers expert support and guidance, helping customers choose the right wig and ensuring satisfaction with their purchase. Affordable pricing and frequent promotions make high-quality wigs accessible to a wide audience.</p>
          </div>
        </div>
      </div>

      <div className="about-us-section">
        <div className="about-us-content">
          <div>
            <h2>Our Services</h2>
            <p>At GlamHair, we are dedicated to providing an outstanding and unique shopping experience, ensuring that customer satisfaction is our top priority. Our online platform allows you to conveniently explore and purchase high-quality wigs from the comfort of your home. We believe everyone deserves to feel beautiful and confident, and our extensive collection of stylish hair wigs is designed to help you achieve just that.

Relax and enjoy your look with our wide range of wigs, from trendy styles to classic looks, all crafted from premium materials for a natural and comfortable fit. Our expert team is always ready to assist you in finding the perfect wig that matches your style and needs. With a user-friendly website, you can browse our collection and make your purchase with ease, ensuring a seamless shopping experience.</p>
          </div>
          <img src={process.env.PUBLIC_URL + '/images/os.jpg'} alt="Our Services" className="icon-image" />
        </div>
      </div>

      <div className="about-us-section">
        <div className="about-us-content">
          <img src={process.env.PUBLIC_URL + '/images/team.jpg'} alt="Our Team" className="icon-image" />
          <div>
            <h2>Our Team</h2>
            <p>At GlamHair, our team is dedicated to helping you look and feel your best. Our fashion designers create stylish and comfortable wigs that cater to all tastes. Our human resources team ensures smooth operations and a positive work environment. Our front office managers provide excellent customer service and personalized recommendations. Together, we strive to deliver high-quality products and exceptional service, making your shopping experience seamless and enjoyable.</p>
          </div>
        </div>
      </div>

      <div className="about-us-section">
        <div className="about-us-content">
          <h2>Meet Our Team</h2>
          <div className="about-us-images">
            <div className="team-member">
              <img src={process.env.PUBLIC_URL + '/images/fom.jpg'} alt="Janice Kim" />
              <p>Janice Kim<br/>Front Office Manager</p>
            </div>
            <div className="team-member">
              <img src={process.env.PUBLIC_URL + '/images/hr.jpg'} alt="Mandy Payne" />
              <p>Mandy Payne<br/>Human Resources</p>
            </div>
            <div className="team-member">
              <img src={process.env.PUBLIC_URL + '/images/fd.jpg'} alt="Micheal Barton" />
              <p>Micheal Barton<br/>Fashion Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
