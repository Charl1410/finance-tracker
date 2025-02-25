import React, { useRef } from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import firestore from "../../firebase"; // Import the Firestore instance
import "./YourPayments.scss"
import { AddPayment } from "./AddPayment";
export default function YourPayments() {
    const paymentRef = useRef();
    const ref = collection(firestore, "payments");
    const [isAddPaymentOpen, setIsAddPaymentOpen] = useState(false);

    //when we click on the add payment button this sets isAddPaymentOpen to true which redereds the AddPayment component
    const openAddPayment = () => {
      setIsAddPaymentOpen(true);
    }

    //passed into the onClose prop of the AddPayment component
    const closeAddPayment = () => {
      setIsAddPaymentOpen(false);
    }

    return (
      <div className="your-payments">
        <form>
          <div className="payment-header">
            <h1>Your payments</h1>
            <a onClick={openAddPayment}>Add payment</a>
          </div>
        </form>

        {isAddPaymentOpen && (
          <div className="modal-overlay">
            <AddPayment onClose={closeAddPayment}/>
          </div>
          )
        }

        <table className="payment-list">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr className="payment-item">
              <td className="cost">£10.56</td>
              <td className="date">24/02/2025</td>
              <td className="description">Coffee</td>
              <td className="category">Food</td>
            </tr>
            <tr className="payment-item">
              <td className="cost">£10.56</td>
              <td className="date">24/02/2025</td>
              <td className="description">Coffee</td> 
              <td className="category">Food</td>
            </tr>
          </tbody>
        </table>
      </div>
    ); 
}


