import React, { Component } from 'react'
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import db from '../../firebase'
import "../Forms/scss/AddPayment.scss"


export function AddPayment({ onClose }) {
  // Add state for form fields
  const [formData, setFormData] = useState({
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add document to payments collection
      await addDoc(collection(db, "payments"), {
        ...formData,
        amount: Number(formData.amount),
        timestamp: new Date(),
      });

      // Clear form and close modal
      setFormData({
        amount: "",
        date: "",
        category: "",
        description: "",
      });
      onClose();
    } catch (error) {
      console.error("Error adding payment: ", error);
    }
  };

  return (
    <div className="add-payment-container">
      <div className="addpayment-header">
        <h1>Add Payment</h1>
        <a onClick={onClose}>x</a>
      </div>

      <form onSubmit={handleSubmit}>
        <article className="amount">
          <label>Amount</label>
          <input 
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
           />
        </article>
        <article className="date">
          <label>Date</label>
          <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          />
        </article>
        <article className="category">
          <label>Category</label>
          <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          >
            <option value="">Select a category</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Presents</option>
            <option value="other">Other</option>
          </select>
        </article>
        <article className="description">
          <label>Description</label>
          <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          />
        </article>
        <button className="button-primary" type="submit">
          Add Payment
        </button>
      </form>
    </div>
  );
}


export default AddPayment