import React, { useState } from 'react';
import './cart.css';

const Cart = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const addToCart = (course) => {
    setSelectedCourses((prevCourses) => [...prevCourses, course]);
  };

  const removeFromCart = (courseId) => {
    setSelectedCourses((prevCourses) =>
      prevCourses.filter((course) => course.id !== courseId)
    );
  };

  const calculateTotalPrice = () => {
    return selectedCourses.reduce((total, course) => total + course.price, 0);
  };

  const handlePurchase = () => {
    // Perform purchase logic
    console.log('Purchase completed');
  };

  return (
    <div className="cart-container">
      <div className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-count">{selectedCourses.length}</span>
      </div>
      {selectedCourses.length > 0 && (
        <div className="cart-dropdown">
          <ul className="cart-items">
            {selectedCourses.map((course) => (
              <li key={course.id} className="cart-item">
                <div className="item-info">
                  <span className="item-title">{course.title}</span>
                  <span className="item-price">${course.price}</span>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(course.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <span className="total-label">Total:</span>
            <span className="total-price">${calculateTotalPrice()}</span>
          </div>
          <button className="purchase-btn" onClick={handlePurchase}>
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
