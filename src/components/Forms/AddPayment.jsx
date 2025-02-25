import React, { Component } from 'react'
import { useState } from 'react'
import "./AddPayment.scss"



export function AddPayment({ onClose }) {
    return (
      <div className="add-payment-container">
        <div className="addpayment-header">
          <h1>Add Payment</h1>
          <a onClick={onClose}>x</a>
        </div>

        <form>
          <article className="amount">
            <label>Amount</label>
            <input type="number" />
          </article>
          <article className="date">
            <label>Date</label>
            <input type="date" />
          </article>
          <article className="category">
            <label>Category</label>
            <select>
              <option value="">Select a category</option>
              <option value="food">Food</option>
              <option value="transportation">Transportation</option>
              <option value="utilities">Utilities</option>
              <option value="entertainment">Entertainment</option>
              <option value="other">Other</option>
            </select>
          </article>
          <article className="description">
            <label>Description</label>
            <input type="text" />
          </article>
          <button className="button-primary" type="submit">Add Payment</button>
        </form>
      </div>
    );
  }


export default AddPayment