import React, { useState } from 'react';
import './Checkout.css';


function Checkout() {
 
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e, setInfo) => {
    const { name, value } = e.target;
    setInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process checkout
    alert('Checkout successful!');
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <h2>Shipping Information</h2>
        <input 
          type="text" 
          name="name" 
          value={shippingInfo.name} 
          onChange={(e) => handleInputChange(e, setShippingInfo)} 
          placeholder="Name" 
          required 
        />
        <input 
          type="text" 
          name="address" 
          value={shippingInfo.address} 
          onChange={(e) => handleInputChange(e, setShippingInfo)} 
          placeholder="Address" 
          required 
        />
        <input 
          type="text" 
          name="city" 
          value={shippingInfo.city} 
          onChange={(e) => handleInputChange(e, setShippingInfo)} 
          placeholder="City" 
          required 
        />
        <input 
          type="text" 
          name="postalCode" 
          value={shippingInfo.postalCode} 
          onChange={(e) => handleInputChange(e, setShippingInfo)} 
          placeholder="Postal Code" 
          required 
        />
        <input 
          type="text" 
          name="country" 
          value={shippingInfo.country} 
          onChange={(e) => handleInputChange(e, setShippingInfo)} 
          placeholder="Country" 
          required 
        />
        
        <h2>Payment Information</h2>
        <input 
          type="text" 
          name="cardNumber" 
          value={paymentInfo.cardNumber} 
          onChange={(e) => handleInputChange(e, setPaymentInfo)} 
          placeholder="Card Number" 
          required 
        />
        <input 
          type="text" 
          name="expiryDate" 
          value={paymentInfo.expiryDate} 
          onChange={(e) => handleInputChange(e, setPaymentInfo)} 
          placeholder="Expiry Date (MM/YY)" 
          required 
        />
        <input 
          type="text" 
          name="cvv" 
          value={paymentInfo.cvv} 
          onChange={(e) => handleInputChange(e, setPaymentInfo)} 
          placeholder="CVV" 
          required 
        />
        
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
}

export default Checkout;
