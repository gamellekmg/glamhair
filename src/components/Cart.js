import React from 'react';
import './Cart.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { useCart } from './CartContext';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <p>${item.price}</p>
            <input 
              type="number" 
              value={item.quantity} 
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              min="1"
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</h2>
      </div>
      <div className="cart-actions">
        <Link to="/services" className="continue-shopping-button">Continue Shopping</Link>
        <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
