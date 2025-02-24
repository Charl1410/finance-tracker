import React, { Component } from 'react'
import { useState } from 'react'
import "./AddPayment.scss"

export function AddPayment() {
    return (
      <div className="add-payment-container">
        <h1>Add Payment</h1>
        <form>
            <label>Amount</label>
            <input type="number" />
            <label>Date</label>
            <input type="date" />
            <label>Description</label>
            <input type="text" />
            <button type="submit">Add Payment</button>
        </form>
      </div>
    )
  }


export default AddPayment