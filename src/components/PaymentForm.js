import React, { useState } from 'react';
import './paymentForm.css';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, '').slice(0, 16);
    setCardNumber(input);
  };
  

  const handleCardHolderChange = (e) => {
    const input = e.target.value.replace(/[^A-Za-z\s]/g, '');
    setCardHolder(input);
  };
  

  const handleExpiryMonthChange = (e) => {
    setExpiryMonth(e.target.value);
  };

  const handleExpiryYearChange = (e) => {
    setExpiryYear(e.target.value);
  };

  const handleCvvChange = (e) => {
    const input = e.target.value.replace(/\D/g, '').slice(0, 3);
    setCvv(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform payment processing logic
    console.log('Payment submitted');
  };

  return (
    <div className="payment-form-container">
      <h2>Payment Form</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardHolder">Card Holder</label>
          <input
            type="text"
            id="cardHolder"
            value={cardHolder}
            onChange={handleCardHolderChange}
            placeholder="John Doe"
            required
          />
        </div>
        <div className="expiry-cvv-container">
          <div className="expiry-group">
            <label htmlFor="expiryMonth">Expiration Date</label>
            <div className="expiry-inputs">
              <select
                id="expiryMonth"
                value={expiryMonth}
                onChange={handleExpiryMonthChange}
                required
              >
                <option value="" disabled hidden>
                  Month
                </option>
                {/* Populate the options dynamically if needed */}
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                {/* ...and so on */}
              </select>
              <select
                id="expiryYear"
                value={expiryYear}
                onChange={handleExpiryYearChange}
                required
              >
                <option value="" disabled hidden>
                  Year
                </option>
                {/* Populate the options dynamically if needed */}
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                {/* ...and so on */}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={handleCvvChange}
              placeholder="123"
              required
            />
          </div>
        </div>
        <button type="submit" className="submit-button">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
