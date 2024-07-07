import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    image: process.env.PUBLIC_URL + '/images/wig1b.jpg',
    title: "M-CAP 9*6 Black straight Wig",
    rating: 4,
    reviews: [
      {
        name: "Michelle L",
        date: "August 14, 2024",
        rating: 4,
        text: "I absolutely love my new wig from GlamHair! The quality is outstanding and it looks so natural. I’ve received so many compliments. Highly recommend!"
      },
      {
        name: "Jessica T",
        date: "August 14, 2024",
        rating: 5,
        text: "This wig has been a game-changer for me. It’s comfortable to wear all day and the color is perfect. The customer service was also fantastic. Will definitely be buying again!"
      }
    ]
  },
  {
    image: process.env.PUBLIC_URL + '/images/wig2b.jpg',
    title: "Short Curly Pixie Haircut 13*4 Wig",
    rating: 4,
    reviews: [
      {
        name: "John Doe",
        date: "August 14, 2024",
        rating: 4,
        text: "I absolutely love my new wig from GlamHair! The quality is outstanding and it looks so natural. I’ve received so many compliments. Highly recommend!"
      },
      {
        name: "Sarah J",
        date: "August 14, 2024",
        rating: 5,
        text: "This wig has been a game-changer for me. It’s comfortable to wear all day and the color is perfect. The customer service was also fantastic. Will definitely be buying again!"
      }
    ]
  }
];

function Testimonials() {
  return (
    <div className="testimonials">
      <h1>Customer Testimonials</h1>
      <p>Read what our satisfied customers have to say about GlamHair.</p>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-item">
          <div className="testimonial-image">
            <img src={testimonial.image} alt={testimonial.title} />
            <div className="thumbnail-images">
              <img src={testimonial.image} alt="Thumbnail" />
              <img src={testimonial.image} alt="Thumbnail" />
              <img src={testimonial.image} alt="Thumbnail" />
            </div>
          </div>
          <div className="testimonial-details">
            <h2>{testimonial.title}</h2>
            <div className="rating">
              {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
              <span>4 Reviews</span>
            </div>
            <h3>Reviews</h3>
            {testimonial.reviews.map((review, idx) => (
              <div key={idx} className="review">
                <div className="reviewer-info">
                  <div className="reviewer-name">{review.name}</div>
                  <div className="reviewer-date">{review.date}</div>
                  <div className="reviewer-rating">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
                </div>
                <div className="review-text">{review.text}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="leave-review">
        <h2>Leave your Review</h2>
        <form>
          <div className="form-group">
            <label htmlFor="product">Select the Product</label>
            <select id="product" name="product">
              {testimonials.map((testimonial, index) => (
                <option key={index} value={testimonial.title}>{testimonial.title}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Rating</label>
            <div className="stars">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="review">Review</label>
            <textarea id="review" name="review" placeholder="Type Here"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        <div className="review-hints">
          <div className="hint">
            <div className="hint-text">Help others to select the best products</div>
          </div>
          <div className="hint">
            <div className="hint-text">Feel free to tell us what we should improve</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
