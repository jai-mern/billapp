import React, { useState } from 'react';
import { processPayment } from './api/payment'; // Import your payment processing API

const PaymentComponent = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    billingAddress: ''
  });
  const [paymentError, setPaymentError] = useState('');

  const handlePayment = async () => {
    try {
      // Call the payment processing API
      const response = await processPayment(paymentData);
      console.log(response); // Handle success response
    } catch (error) {
      setPaymentError(error.message); // Handle error
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  return (
    <div>
      <h2>Payment Information</h2>
      <input type="text" name="cardNumber" value={paymentData.cardNumber} onChange={handleInputChange} placeholder="Card Number" />
      <input type="text" name="expirationDate" value={paymentData.expirationDate} onChange={handleInputChange} placeholder="Expiration Date" />
      <input type="text" name="cvv" value={paymentData.cvv} onChange={handleInputChange} placeholder="CVV" />
      <input type="text" name="billingAddress" value={paymentData.billingAddress} onChange={handleInputChange} placeholder="Billing Address" />
      <button onClick={handlePayment}>Process Payment</button>
      {paymentError && <p>{paymentError}</p>}
    </div>
  );
};

export default PaymentComponent;
