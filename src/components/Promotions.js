import React, { useState } from 'react';
import { Button } from './Button';
import './Promotions.css';
import { Link } from 'react-router-dom';
import Bots from './bots'; // Import the chatbot component

function Promotions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Can I style my wig with heat tools?",
      answer: "Most of our human hair wigs can be styled with heat tools. However, for synthetic wigs, we recommend checking the product details to ensure they are heat-resistant before using any heat styling tools."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of purchase, provided the wig is in its original condition and packaging. Please refer to our return policy page for more details."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping usually takes 5-7 business days within the continental United States. International shipping times may vary."
    }
  ];

  return (
    <div className="promotions">
      <div className="promo-banner">
        <div className="promo-text">Buy one, Get one 50% OFF</div>
        <div className="promo-text">Buy Two, Get free accessories</div>
      </div>
      <h1>Unbeatable Deals and Offers</h1>
      <p>Don't miss out on our latest promotions! Enjoy amazing discounts and special offers on a wide selection of our high-quality wigs. Shop now and save big on your favorite styles!</p>
      <div className="promo-discounts">
        <Link to="/discount-25" className="discount-link">
          <button className="discount-button">25% OFF</button>
        </Link>
        <Link to="/discount-50" className="discount-link">
          <button className="discount-button">50% OFF</button>
        </Link>
        <button className="discount-button">Save up to 50%!</button>
      </div>
      <div className="promo-cards">
        <div className="promo-card">
          <div className="promo-card-header">
            <div className="promo-card-icon">🎯</div>
            <h3>ESSENTIALS</h3>
          </div>
          <div className="promo-card-image">
            <img src={process.env.PUBLIC_URL + '/images/wig9.jpg'} alt="Essentials" />
          </div>
          <div className="promo-card-price">
            <span className="old-price">$100</span>
            <span className="new-price">$75</span>
          </div>
          <Link to="/services" className="promo-link">
            <Button buttonStyle="btn--primary" buttonSize="btn--large">SHOP NOW</Button>
          </Link>
        </div>
        <div className="promo-card">
          <div className="promo-card-header">
            <div className="promo-card-icon">💲</div>
            <h3>LUXURY</h3>
          </div>
          <div className="promo-card-image">
            <img src={process.env.PUBLIC_URL + '/images/wig5.jpg'} alt="Luxury" />
          </div>
          <div className="promo-card-price">
            <span className="old-price">$200</span>
            <span className="new-price">$150</span>
          </div>
          <Link to="/services" className="promo-link">
            <Button buttonStyle="btn--primary" buttonSize="btn--large">SHOP NOW</Button>
          </Link>
        </div>
        <div className="promo-card">
          <div className="promo-card-header">
            <div className="promo-card-icon">🌟</div>
            <h3>GLAM PACKAGE</h3>
          </div>
          <div className="promo-card-image">
            <img src={process.env.PUBLIC_URL + '/images/wig12.jpg'} alt="Glam Package" />
          </div>
          <div className="promo-card-price">
            <span className="old-price">$270</span>
            <span className="new-price">$203</span>
          </div>
          <Link to="/services" className="promo-link">
            <Button buttonStyle="btn--primary" buttonSize="btn--large">SHOP NOW</Button>
          </Link>
        </div>
      </div>
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p>This section is to reassure you by proactively addressing questions and concerns.</p>
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
      <div className="chat-section">
        <h2>Have More Questions?</h2>
        <p>Chat with us and find out how our product can be more satisfying.</p>
        <button className="chat-button" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>LET'S CHAT</button>
      </div>
      <Bots /> {/* Render the chatbot at the bottom */}
    </div>
  );
}

export default Promotions;
