import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
`;

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    // Perform payment API call using cardNumber, expiryDate, and cvv
  };

  return (
    <StyledForm onSubmit={handlePayment}>
      <StyledInput
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        required
      />
      <StyledInput
        type="text"
        placeholder="Expiry Date"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        required
      />
      <StyledInput
        type="text"
        placeholder="CVV"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        required
      />
      <StyledButton type="submit">Pay Now</StyledButton>
    </StyledForm>
  );
};

export default PaymentForm;
